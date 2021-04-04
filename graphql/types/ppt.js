export default `

type Ppt {

    _id: ID!
    author: String!
    title: String!
    content: String!
    image: String!
    description: String!
    category: String!
    tags: String!
    createdtime: String!
    
    
}

type Query {

    getPpt(_id: ID!): Ppt!
    getPpts: [Ppt!]!
}

type Mutation {

    addPpt(author: String!, title: String!, content: String!, image: String!, description: String!,category: String!,tags: String!, createdtime: String! ): Ppt!,
    deletePpt(_id: ID!): String

}

`