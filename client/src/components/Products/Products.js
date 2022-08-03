import React from 'react';
import "./style.css";
// import {
//   Card,
//   CardColumns,
//   Button
// } from 'react-bootstrap';
// import {useMutation, useQuery } from '@apollo/client';
// import { GET_PRODUCTS } from '../../utils/queries';
// import { ADD_TO_CART } from '../../utils/mutations';
// import { saveProductIds, getSavedProductIds } from '../../utils/localStorage';
//import React, { useState, useEffect } from 'react';
// import Auth from '../../utils/auth';


function Products() {
//   const [allProducts, setAllProducts] = useState([]);

//   const [savedProductIds, setSavedProductIds] = useState(getSavedProductIds());
//   const [saveProduct, {error: mutationError, data: mutationData}] = useMutation(ADD_TO_CART);

//   useEffect(() => {
//     return () => saveProductIds(savedProductIds);
//   });

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     fetch(
//         `http://localhost:3001/graphql`
//       )
//       .then(async response => response.json())

      

//       const { items } = await response.json();
    
//   const productData = items.map((product) => ({
//     productId: product.id,
//     name: product.name,
//     strain: product.strain,
//     cbd_thc: product.cbd_thc,
//     pricePerGram: product.pricePerGram,
//     imageUrl: product.imageUrl,
//   }));

//   setAllProducts(productData);
// };
//   const {loading, queryData } = useQuery(GET_PRODUCTS);
//   const savedProducts = queryData?.product || []
// console.log(savedProductIds)
  

//   const AddToCartSubmit = async (productId) => {
//     // find the Product in `searchedProducts` state by the matching id
//     const productToSave = savedProducts.find((product) => product.productId === productId);

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const { queryData } = await saveProduct({
//         variables: { productData: { ...productToSave } },
//       });
//       console.log(savedProducts);
//       setSavedProductIds([...savedProductIds, productToSave.productId]);
//     } catch (err) {
//       console.error(err);
//     }
//   }

return (
  <section>
         <div>
           <h1 id="flowerheader">Flower</h1>
           <div>
             {/* possible change cards to card */}
             <div>
               <div>
                 <div>
                   <h6 className="productTitle">Lemon Haze</h6>
                        <div>
                            <img className = "productimage" src="https://images.leafly.com/flower-images/defaults/red-orange-amber/strain-4.png?auto=compress&amp;w=1200&amp;h=630&amp;fit=crop&amp;bg=FFFFFF&amp;fit=fill" alt=""></img>
                            <p className ="productText">Strain: Sativa<br/>CBD-THC": "20%-20%
                            </p>
                            <h6 className="pricetag">$ 7/Gram</h6>
                            <button className="ATC">Add to Cart</button>
                      </div>
                 </div>
               </div>
               <div>
                 <div>
                   <h6 className="productTitle"> Pink Kush</h6>
                   <img className = "productimage"src="https://leafly-cms-production.imgix.net/wp-content/uploads/2020/04/21143425/PINK-KUSH-020.jpg" alt=""></img>
                   <p className ="productText"> Strain: Indica<br/>CBD-THC": "20%-20%
                   </p>
                   <h6 className="pricetag">$ ​10/Gram</h6>
                   <button className="ATC">Add to Cart</button>
                 </div>
               </div>
               <div>
                 <div>
                   <h6 className="productTitle"> Pineapple Express</h6>
                   <img className = "productimage" src="https://images.hytiva.com/Pineapple-Express.jpg?mw667-mh1000" alt=""></img>
                   <p className ="productText"> Strain: Sativa<br/>CBD-THC": "20%-20%
                   </p>
                   <h6 className="pricetag"> $ 10/Gram</h6>
                   <button className="ATC">Add to Cart</button>
                 </div>
               </div>
               <div>
                 <div>
                   <h6 className="productTitle"> Death Bubba</h6>
                   <img className = "productimage" src="https://growingexposed.com/wp-content/uploads/2019/08/Death-Bubba-Feature-Photo-1.jpg" alt=""></img>
                   <p className ="productText"> Strain: Indica<br/>CBD-THC": "20%-20%
                   </p>
                   <h6 className="pricetag"> $ 10/Gram</h6>
                   <button className="ATC">Add to Cart</button>
                 </div>
               </div>
               <div>
                 <div>
                   <h6 className="productTitle"> Jean Guy</h6>
                   <img className = "productimage"src="https://www.7acres.com/wp-content/uploads/2021/04/JEAN-GUY-transparent-square-1.png" alt="" ></img>
                   <p className ="productText"> Strain: Hybrid<br/>CBD-THC": "20%-20%
                   </p>
                   <h6 className="pricetag"> $ 10/Gram</h6>
                   <button className="ATC">Add to Cart</button>
                 </div>
               </div>
               <div>
                 <div>
                   <h6 className="productTitle"> White Widow</h6>
                   <img className = "productimage"src="https://images.leafly.com/flower-images/white-widow.png" alt=""></img>
                   <p className ="productText"> Strain: Hybrid<br/>CBD-THC": "20%-20%
                   </p>
                   <h6 className="pricetag"> $ 10/Gram</h6>
                   <button className="ATC">Add to Cart</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       
)
}

export default Products;


/* <CardColumns>
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
        </CardColumns> */