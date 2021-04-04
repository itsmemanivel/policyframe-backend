export default `

type EmbedVideo {

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

    getEmbedVideo(_id: ID!): EmbedVideo!
    getEmbedVideos: [EmbedVideo!]!
}

type Mutation {

    addEmbedVideo(author: String!, title: String!, content: String!, image: String!, description: String!,category: String!,tags: String!, createdtime: String! ): EmbedVideo!,
    deleteEmbedVideo(_id: ID!): String

}

`