export default `

type User {

    _id: ID!
    username: String!
    email: String!
    password: String!
    image: String
    role: String!
    createdtime: String!
    
    
}

type Query {

    getUser(_id: ID!): User!
    getUserByEmail(email: String!): User!
    getUsers: [User!]!
}

type Mutation {

    addUser(username: String!, email: String!, password: String!, image: String, role: String!, createdtime: String! ): User!,
    deleteUser(_id: ID!): String

}

`