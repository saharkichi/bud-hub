
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
import AboutUs from './components/Homepage/AboutUs';
import Checkout from './components/Cart/Checkout'
import "./app.css";
import LoginPage from './components/Login/LoginPage';

import Products from './components/Products/Products';

import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import Modal from "react-modal";

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
          <Modal isOpen={modalIsOpen}>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
  <div className="modal fade" id="ageModal" role="dialog" aria-labelledby="gridSystemModalLabel" data-backdrop="static"
    data-keyboard="false">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="col-xs-12 col-sm-12" id="modal-age-limit">
              <h3 className="hidden-xs"><strong>MUST BE 18 TO ENTER</strong></h3>
            </div>
            <div className="col-xs-4 col-sm-4 mobile-margin-bottom">
              <select name="month" className="form-control" id="verify-month">
                <option value="none">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="col-xs-4 col-sm-4 mobile-margin-bottom">
              <select name="day" className="form-control" id="verify-day">
                <option value="none">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
            <div className="col-xs-4 col-sm-4">
              <select name="Year" className="form-control" id="verify-year">
                <option value="none">Year</option>
                <option value="1940">1940</option>
                <option value="1941">1941</option>
                <option value="1942">1942</option>
                <option value="1943">1943</option>
                <option value="1944">1944</option>
                <option value="1945">1945</option>
                <option value="1946">1946</option>
                <option value="1947">1947</option>
                <option value="1948">1948</option>
                <option value="1949">1949</option>
                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
              </select>
            </div>
            <div className="col-xs-12 col-lg-12" id="age-submit-area">
              <a href="#" className="btn btn-default" id="age-submit">SUBMIT</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
        
    
  </div>
          
        </Modal>

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
      </body>
    );
  }
