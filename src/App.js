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


function App() {
  return (
    <div className="App">
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/Homepage' element={<Homepage/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
         </div>
    );
}

export default App
