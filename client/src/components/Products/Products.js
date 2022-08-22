import "./style.css";
import {
  Card,
  CardColumns,
  Button
} from 'react-bootstrap';
import {useMutation, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../utils/queries';
import { ADD_TO_CART } from '../../utils/mutations';
import { saveProductIds, getSavedProductIds } from '../../utils/localStorage';
import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';


function Products() {
  const { data } = useQuery(GET_PRODUCTS)
  const product = data?.getProducts || []
  console.log(product)


  const [savedProductIds, setSavedProductIds] = useState(getSavedProductIds());
  const [saveProduct, {error: mutationError, data: mutationData}] = useMutation(ADD_TO_CART);
  
  useEffect(() => {
    return () => saveProductIds(savedProductIds);
  });


  const productData = product.map((product) => ({
    _id: product.id,
    name: product.name,
    strain: product.strain,
    cbd_thc: product.cbd_thc,
    pricePerGram: product.pricePerGram,
    imageUrl: product.imageUrl,
  }));

console.log(productData)
  

  const AddToCartSubmit = async (_id) => {
    
  const productToSave = product.find((product) => product._id === _id);

//     // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveProduct({
        variables: { productData: { ...productToSave } },
      });
      console.log(product);
      setSavedProductIds([...savedProductIds, productToSave._id]);
    } catch (err) {
      console.error(err);
    }
  }

return (

   <CardColumns>
          {product.map((product) => {
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
                  <Button data-id={product.productId} disabled={product.Ids?.some((savedId) => savedId === product.productId)} onClick={AddToCartSubmit} className="btn-block btn-info" >
                    {savedProductIds?.some((savedId) => savedId === product.productId) ? <p>You already purchased this you dumbass</p> : <p>Add to card</p>}
                  </Button>
                )
              </Card>
            )
          })}
        </CardColumns> 


     
)

}


export default Products;