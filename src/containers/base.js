import React, { useEffect, useState }  from 'react';
import NavBar from "../components/js/navbar/NavBar"
import Index from "./index"

import {BrowserRouter , Link , Route} from "react-router-dom"
import Products from "./products"
import axios from "axios"

import ProductDetails from "./productDetails"



function Base() {

    const store = {
        products : null,
        sides : [
            {pagination : {
                currentPage : 1
            }}
        ]
    }




    const [fstate , fsetState] = useState(store);

    useEffect(() => {
        axios.get("https://hirji-final-2-3699e-default-rtdb.firebaseio.com/products.json").then(
            (data) => {
                fsetState({...fstate , products : data.data})
                console.log(data.data)
            }
        ).catch((err) => {
            console.log(err)
        } )
    } , [])

    console.log(fstate)



    return (
        <BrowserRouter>
            <NavBar/>
            <Route path="/" exact component={Index}/> 
            <Route path="/products" exact component={() => <Products productsData={fstate.products?.products}/>}/>
            <Route path="/products/details/:id" exact component={() => <ProductDetails data={fstate.products?.products}/>} />
        </BrowserRouter>
    )
}

export default Base

