import React, { useState, useEffect } from 'react';
import "./style.css";
import {
  Card,
  CardColumns,
  Button
} from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../utils/queries';
import { ADD_TO_CART } from '../../utils/mutations';
import { saveProductIds, getSavedProductIds } from '../../utils/localStorage';

import Auth from '../../utils/auth';


function Products() {
  const [savedProductIds, setSavedProductIds] = useState(getSavedProductIds());
  const [saveProduct] = useMutation(ADD_TO_CART);
  const {loading, error, data } = useQuery(GET_PRODUCTS);
  const savedProducts = data?.product || []

  useEffect(() => {
    return () => saveProductIds(savedProductIds);
  });

  

  const handleSaveProduct = async (productId) => {
    // find the Product in `searchedProducts` state by the matching id
    const productToSave = savedProducts.find((product) => product.productId === productId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveProduct({
        variables: { productData: { ...productToSave } },
      });
      console.log(savedProductIds);
      setSavedProductIds([...savedProductIds, productToSave.productId]);
    } catch (err) {
      console.error(err);
    }
  }

  const AddToCartSubmit = async (event) => {
    event.preventDefault()

    console.log(event.target.getAttribute('data-id'));
  }

  return (
    <div>
      <h1 id="flowerheader">Flower</h1>
      <div>
        <CardColumns>
          {savedProducts.map((product) => {
            return (
              <Card key={product.productId} border="dark">
                {product.imageUrl !== null && 
                  <Card.Img src={product.imageUrl} alt={product.name}></Card.Img>
                }
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <p>Strain: {product.strain}</p>
                  <Card.Text>{product.pricePerGram}</Card.Text>
                </Card.Body>
                Auth.loggedIn() && (
                  <Button data-id={product.productId} disabled={savedProducts.Ids?.some((savedId) => savedId === product.productId)} onClick={AddToCartSubmit} className="btn-block btn-info" >
                    {savedProductIds?.some((savedId) => savedId === product.productId) ? <p>You already purchased this you dumbass</p> : <p>Add to card</p>}
                  </Button>
                )
              </Card>
            )
          })}
        </CardColumns>
      </div>
    </div>
  )
};


export default Products;