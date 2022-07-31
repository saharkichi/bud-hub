import React from 'react';
import './App.css';
import Cart from './components/Cart/cart';
import CartItem from './components/Cart/cartItem';
import Checkout from './components/Checkout/checkout';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import AboutUs from './components/Homepage/Aboutus';
import Homepage from './components/Homepage/Homepage';
import Loginform from './components/Login/LoginForm';
import Loginpage from './components/Login/LoginPage';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Signupform from './components/Signup/SignupForm';
import Signuppage from './components/Signup/SignupPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
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



function App() {
  return (
    <div className="App">
<ApolloProvider client = {client}>
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
