import React from 'react';
import "./style.css";
import { NavLink } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../../utils/queries'
import { REMOVE_FROM_CART } from '../../utils/mutations';
import { removeProductId } from '../../utils/localStorage';
import { CardColumns, Card } from 'react-bootstrap';

import Auth from '../../utils/auth';    

const Cart = () => {
            const { data } = useQuery(GET_ME);
            const [removeProduct, { error }] = useMutation(REMOVE_FROM_CART);
          
            const userData = data?.me || {};
          
            // create function that accepts the book's mongo _id value as param and deletes the book from the database
            const handleDeleteProduct = async (_id) => {
              // get token
              const token = Auth.loggedIn() ? Auth.getToken() : null;
          
              if (!token) {
                return false;
              }
          
              try {
                const { data } = await removeProduct({
                  variables: { _id},
                });
          
                // upon success, remove book's id from localStorage
                removeProductId(_id);
              } catch (err) {
                console.error(err);
              }
            }
            
            
    return (
            <div> 
                <h1>Cart Items:</h1>
                <div>
                <h1>Viewing User's cart</h1>
                </div>

        <div>
        <CardColumns>
          {userData.savedCart?.map((product) => {
            return (
              <Card key={product._id} border="dark">
                {product.image ? (
                  <Card.Img
                    src={product.imageUrl}
                    alt={`Product picture of ${product.name} flower`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <p className="small">Strain: {product.strain}</p>
                  <Card.Text>{product.cbd_thc}</Card.Text>
                  <button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Remove from cart
                  </button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </div>
         
         <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Checkout"> <button className='checkoutbtn'>Checkout</button> </NavLink>
     </div> 
    )
    };

export default Cart;