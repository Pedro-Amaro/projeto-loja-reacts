import './App.css';
import { lazy, Suspense, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
 } from "react-router-dom"

 import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
 } from "@mui/material";
 import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
 import ExitToAppIcon from '@mui/icons-material/ExitToApp';
 import React from 'react';


const Login = lazy(() => import('./pages/login/login'));
const Register = lazy(() => import('./pages/register/register'));
const Catalog= lazy(() => import('./pages/catalog/catalog'));
const Cart = lazy(() => import('./pages/cart/cart'));
const Checkout= lazy(() => import('./pages/checkout/checkout'));
const Product= lazy(() => import('./pages/product/product'));
const NotFound= lazy(() => import('./pages/not-found/not-found'));



function App() {
  
  
  useEffect(() => {
  }, [])
  
  return <Router>
            <AppBar position={'static'}>
              <Toolbar 
                style={{
                  justifyContent: "space-between"
              }}>
                 <Typography variant="h6" component="h2">
                    <div>
                      Parfums Glactiques
                    </div>
                    <Link to="/catalog">
                      <img src='https://static.vecteezy.com/ti/vetor-gratis/t2/2187366-perfume-neon-sinais-estilo-texto-gr%C3%A1tis-vetor.jpg' height="100px"/> 
                    </Link>
                 </Typography>
                 <div>
                  <IconButton  
                     edge="end" 
                     >
                      <Link to="/cart">
                        <AddShoppingCartIcon style={{
                                      color: '#fff',
                                      marginLeft: 20
                     }}/>
                      </Link>
                   </IconButton>
                   <IconButton 
                     edge="end" 
                     style={{
                      color: '#fff',
                      marginLeft: 20
                     }}>
                      <Link to="/login">
                        <ExitToAppIcon style={{
                                   color: '#fff',
                                   marginLeft: 20
                     }}/>
                      </Link>
                 </IconButton>
                 </div>
              </Toolbar>
           </AppBar>
            <Suspense fallback={'Carregando'}>
              <Routes>
              <Route exact path="/" element={<Catalog/>}/>
                <Route exact path="/catalog" element={<Catalog/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
                <Route exact path="/checkout" element={<Checkout/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </Suspense>
    	  </Router>;
}

export default App;
