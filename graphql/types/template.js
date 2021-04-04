export default `

type Template {

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

    getTemplate(_id: ID!): Template!
    getTemplates: [Template!]!
}

type Mutation {

    addTemplate(author: String!, title: String!, content: String!, image: String!, description: String!,category: String!,tags: String!, createdtime: String! ): Template!,
    deleteTemplate(_id: ID!): String

}

`