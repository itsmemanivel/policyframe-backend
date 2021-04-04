export default `

type Blog {

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

    getBlog(_id: ID!): Blog!
    getBlogs: [Blog!]!
}

type Mutation {

    addBlog(author: String!, title: String!, content: String!, image: String!, description: String!,category: String!,tags: String!, createdtime: String! ): Blog!,
    deleteBlog(_id: ID!): String

}

`