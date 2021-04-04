export default `

type Testimonal {

    _id: ID!
    author: String!
    content: String!
    image: String!
    description: String
    createdtime: String!
    
    
}

type Query {

    getTestimonal(_id: ID!): Testimonal!
    getTestimonals: [Testimonal!]!
}

type Mutation {

    addTestimonal(author: String!,  content: String!, image: String!, description: String, createdtime: String! ): Testimonal!,
    deleteTestimonal(_id: ID!): String

}

`