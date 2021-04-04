export default `





type Ebook {

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

input Tag {

   
    tags: String!
    

}




type Query {

    getEbook(_id: ID!): Ebook!
    getEbooks: [Ebook!]!
}

type Mutation {

    addEbook(author: String!, title: String!, content: String!, image: String, description: String!,category: String!,tags: String!, createdtime: String! ): Ebook!,
    deleteEbook(_id: ID!): String

}

`