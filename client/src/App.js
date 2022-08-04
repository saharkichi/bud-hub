
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Homepage from './components/Homepage/Homepage';

import Cart from './components/Cart/cart.js';
import Thankyou from './components/Cart/Thankyou.js';
import AboutUs from './components/Homepage/Aboutus.js';
import Checkout from './components/Cart/Checkout'
import "./app.css";
import LoginPage from './components/Login/LoginPage';


import Products from './components/Products/Products';

import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import Modal from "react-modal";
import { MDBCheckbox } from 'mdb-react-ui-kit';

import "../src/components/Homepage/style.css";


const httpLink = createHttpLink ({uri:'/graphql'})
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
    headers: {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
    },
    };
    });

const client = new ApolloClient ({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})


Modal.setAppElement('#root')
export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true)
    return (
      <body>
        <div className="App">
          <Modal className="modal" isOpen={modalIsOpen}>
          <h3>Welcome to BudHub!</h3>
          <p>Are you over 19?</p>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Yes' />
      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='No' />
            <button onClick={() => setModalIsOpen(false)}>Continue to site</button>
      
          
        </Modal>

      <ApolloProvider client = {client}>
      <Router>
        <Header/>

          <Routes>
            
<Route path="/" element={<Homepage/>}/>         
<Route path="/Home" element={<Homepage/>}/>
<Route path="/Aboutus" element={<AboutUs/>}/>
<Route path="/Products" element={<Products/>}/>
<Route path="/Cart" element={<Cart/>}/>
<Route path="/Login" element={<LoginPage/>}/>
<Route path="/Checkout" element={<Checkout/>}/>
<Route path="/Thankyou" element={<Thankyou/>}/>

          
          </Routes>
        <Footer/>
      </Router>
      </ApolloProvider>
      </div>
      </body>
    );
  }
