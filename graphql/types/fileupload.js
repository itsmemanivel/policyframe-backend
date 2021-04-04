export default `


type File {
    _id: ID!
    filename: String!
    mimetype: String!
    path: String!
}

type Query {
    hello: String
    uploads: [File!]
}

type Mutation {

    singleUpload(file: Upload!): File!
}


`