
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Homepage from './components/Homepage/Homepage';

import Cart from './components/Cart/cart.js';
import AboutUs from './components/Homepage/AboutUs';
import Checkout from './components/Cart/Checkout'

import LoginPage from './components/Login/LoginPage';

import Products from './components/Products/Products';

import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';



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



export default function App() {
    return (
      <div className="App">

      <ApolloProvider client = {client}>
      <Router>
        <Header/>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
          
<Route path="/Home" element={<Homepage/>}/>
<Route path="/Aboutus" element={<AboutUs/>}/>
<Route path="/Products" element={<Products/>}/>
<Route path="/Cart" element={<Cart/>}/>
<Route path="/Login" element={<LoginPage/>}/>
<Route path="/Checkout" element={<Checkout/>}/>

          
          </Routes>
        <Footer/>
      </Router>
      </ApolloProvider>
      </div>
    );
  }
