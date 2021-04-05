require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const async = require('async');
const cors = require('cors');
const http = require('http');
const config = require('./models/config/db');
const methodOverride = require('method-override');
const passport = require('passport');
const path = require('path');

// const user = require('./routes/users');
// const users = require('./routes/users');
// const testimonals = require('./routes/testimonals');
// const blogs = require('./routes/blogs');
// const embedVideos = require('./routes/embed-videos');
// const ppt = require('./routes/ppt');
// const templates = require('./routes/templates');
// const ebooks = require('./routes/ebooks');

var graphqlHTTP = require('express-graphql');
var { graphql, buildSchema } = require('graphql');
import { GraphQLServer, PubSub } from "graphql-yoga";
import schema from "./graphql/schema";
import { models } from "./models/index";


const pubsub = new PubSub();


const context = {
  models,
  pubsub
};

const server = new GraphQLServer({
  schema,
  context

})

const options = {
  port: process.env.PORT || "4000",
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};




//db
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.db, function(err, dbInstance) {
  if (err) {
      console.log(`[MongoDB connection] ERROR: ${err}`);
      failureCallback(err); // this should be "caught" by the calling function
  } else {
      // const dbObject = dbInstance.db('policyframe');
      // const dbCollection = dbObject.collection('users');
      console.log("[MongoDB connection] SUCCESS");
      // console.log(dbInstance);
      // successCallback(dbCollection);
  }
});

//cors
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposeHeaders: ['x-auth-token']
};


app.use(cors(corsOption));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));

// app.use('/api/v1/users',  users);
// app.use('/api/v1/blogs',  blogs);
// app.use('/api/v1/ebooks',  ebooks);
// app.use('/api/v1/embed-videos',  embedVideos);
// app.use('/api/v1/ppt',  ppt);
// app.use('/api/v1/templates',  templates);
// app.use('/api/v1/testimonals', testimonals);



//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(passport.initialize())
app.use(passport.session())


//graphql

app.use('/graphql', graphqlHTTP({
  schema: schema,
  // rootValue: root,
  graphiql: true
}), (req, res, next) => {

  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Request-Method', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Content-Length');
  res.end();
});


server.express.get('/', (req, res, next) =>{

  res.send("policyframe-API-restricted-area");

});

//port
server.start(options, ({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`)
});