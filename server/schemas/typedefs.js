const {gql} = require("apollo-server-express");


const typeDefs = gql `

type Query {
    me: User
}
//CHANGED ALL INSTANCES OF BOOK TO PRODUCT
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveProduct(product: ProductInput!): User
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

type Auth {
    token: ID!
    user: User
}

` 
module.exports = typeDefs



// line 22 probably will need an auth type which 
//will have a token and then a userkey that refs the usertype 
//will also need to add a type query which refs any queries in resolvers
// also need a type mutation which will ref mutations in resolvers and set params
// reference activity 9