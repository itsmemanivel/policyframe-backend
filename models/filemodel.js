"use strict"

const mongoose = require('mongoose');
import { ObjectID } from "mongodb";

ObjectID.prototype.valueOf = function() {
    return this.toString();
  };



const fileSchema =  mongoose.Schema({


    filename: {
        type: String,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },

  });
  
  const fileupload = module.exports = mongoose.model("File", fileSchema);

  export default  fileupload;