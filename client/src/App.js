
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import './App.css';
// import Cart from './components/Cart/cart';
// import CartItem from './components/Cart/cartItem';
// import Checkout from './components/Checkout/checkout';
// import Footer from './components/Footer/footer';
// import Header from './components/Header/header';
// import AboutUs from './components/Homepage/Aboutus';
// import Homepage from './components/Homepage/Homepage';
// import Loginform from './components/Login/LoginForm';
// import Loginpage from './components/Login/LoginPage';
// import Navbar from './components/Navbar/Navbar';
// import Products from './components/Products/Products';
// import Signupform from './components/Signup/SignupForm';
// import Signuppage from './components/Signup/SignupPage';

// import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
// import {setContext} from '@apollo/client/link/context';

// const httpLink = createHttpLink ({uri:'/graphql'})
// const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     const token = localStorage.getItem('id_token');
//     // return the headers to the context so httpLink can read them
//     return {
//     headers: {
//     ...headers,
//     authorization: token ? `Bearer ${token}` : '',
//     },
//     };
//     });

// const client = new ApolloClient ({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
// })

// function App() {
//   return (
//     <div className="App">
// <ApolloProvider client = {client}>
//             <BrowserRouter>
//             <Header/>
//                 <Routes>
//                     <Route path='/Homepage' element={<Homepage/>}/>
//                 </Routes>
//             <Footer/>
//             </BrowserRouter>
// </ApolloProvider>
//          </div>
//     );
// }

// export default App;

export default function App() {
    return (
      <Router>
        <header>
            BudHub
            <nav>
                <span> <Link to="/components/Login/LoginPage">Login</Link> </span>
            </nav>
        </header>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/components/Products/Products">Products</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
