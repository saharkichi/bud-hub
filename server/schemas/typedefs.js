const {gql} = require("apollo-server-express");


const typeDefs = gql `

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveProduct(productData: ProductInput!): User
    removeProduct(productId: ID!): User
}

type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    savedProducts: [Product]
}

type Product {
    _id: ID!
    name: String!
    strain: String!
    cbd_thc: String!
    price: Int!
    imageUrl: String!
}
input ProductInput {
    _id: ID
    name: String
    strain: String
    cbd_thc: String
    price: Int
    imageUrl: String
}
type Auth {
    token: ID!
    user: User
}

` 
module.exports = typeDefs



