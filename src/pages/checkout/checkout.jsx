import React from 'react';
import {useEffect} from 'react'
import { userIsLoggedIn } from "../../services/auth/auth";


const Checkout = () => {
    useEffect(() => {
        userIsLoggedIn()
    })    
    return <h1>Finalizar compra</h1>
}

export default Checkout;