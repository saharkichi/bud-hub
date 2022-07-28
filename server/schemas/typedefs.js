const {gql} = require("apollo-server-express");


const typeDefs = gql `

type User {
    _id: ID
    username: String
    email: String
    password: String
    age: Int
    savedProducts: [Product]
}

type Product {
    _id: ID
    name:
    strain:
    price:
    imageUrl:
}


` 
module.exports = typeDefs



// line 22 probably will need an auth type which 
//will have a token and then a userkey that refs the usertype 
//will also need to add a type query which refs any queries in resolvers
// also need a type mutation which will ref mutations in resolvers and set params
// reference activity 9