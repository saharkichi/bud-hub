import { gql } from '@apollo/client';

export const GET_ME = gql`
     {
        me {
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
`

export const GET_PRODUCTS = gql `
{
    getProducts {
        _id
        name
        strain
        cbd_thc
        pricePerGram
        imageUrl
    }
}
`