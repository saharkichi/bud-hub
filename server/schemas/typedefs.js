const {gql} = require("apollo-server-express");


const typeDefs = gql `

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    AddToCart(productData: ProductInput!): User
    RemoveFromCart(productId: ID!): User
}

type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    savedCart: [Product]
}

type Product {
    _id: ID!
    name: String!
    strain: String!
    cbd_thc: String!
    pricePerGram: Int!
    imageUrl: String!
}
input ProductInput {
    _id: ID
    name: String
    strain: String
    cbd_thc: String
    pricePerGram: Int
    imageUrl: String
}
type Auth {
    token: ID!
    user: User
}

` 
module.exports = typeDefs



