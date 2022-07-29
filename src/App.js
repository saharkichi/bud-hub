import React from 'react';
import './App.css';
import Cart from './components/Cart/cart';
import CartItem from './components/Cart/cartItem';
import Checkout from './components/Checkout/checkout';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import AboutUs from './components/Homepage/aboutus';
import Homepage from './components/Homepage/homepage';
import Loginform from './components/Login/loginform';
import Loginpage from './components/Login/loginpage';
import Navbar from './components/Navbar/navbar';
import Products from './components/Products/products';
import Signupform from './components/Signup/signupform';
import Signuppage from './components/Signup/signuppage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/context';

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

const apolloclient = new ApolloClient ({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})



function App() {
  return (
    <div className="App">
<ApolloProvider client = {apolloclient}>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/Homepage' element={<Homepage/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
</ApolloProvider>
         </div>
    );
}

export default App
