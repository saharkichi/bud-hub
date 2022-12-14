import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_TO_CART = gql`
    mutation AddToCart($productData: ProductInput!){
        AddToCart(productData: $productData){
                _id
                username
                email
                savedCart {
                _id
                name
                strain
                cbd_thc
                pricePerGram
                imageUrl
            }
            
        }
    }
`;

export const REMOVE_FROM_CART = gql`
    mutation RemoveFromCart($_id: ID!){
        RemoveFromCart(_id: $_id) {
            
                _id
                username
                email
                savedCart {
                _id
                name
                strain
                cbd_thc
                pricePerGram
                imageUrl
            }
         }
        }
    
`;