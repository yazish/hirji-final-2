import React, { useEffect, useState } from 'react';
import NavBar from "../components/js/navbar/NavBar"
import Index from "./index"

import { BrowserRouter, Route } from "react-router-dom"
import Products from "./products"
import axios from "axios"

import ProductDetails from "./productDetails"
import Cart from "./cart"
import Form from "./form"


function Base() {

    const store = {
        products: null,
        sides: [
            {
                pagination: {
                    currentPage: 1
                }
            },
            {
                productsNo: {
                    productsNo: 1
                }
            },
            {
                productQuantity: {
                    productQuantity: false
                }
            }
        ]
    }




    const [fstate, fsetState] = useState(store);

    useEffect(() => {
        axios.get("https://hirji-final-2-3699e-default-rtdb.firebaseio.com/products.json").then(
            (data) => {
                fsetState({ ...fstate, products: data.data })
                console.log(data.data)
            }
        ).catch((err) => {
            console.log(err)
        })
    }, [])


    function productIncreaseHandler() {
        let productsNo = fstate.sides[1].productsNo.productsNo + 1
        fsetState({
            ...fstate , 
            sides : [
                {
                    pagination: {
                        currentPage: 1
                    }
                },
                {
                    productsNo: {
                        productsNo: productsNo
                    }
                },
                {
                    productQuantity: {
                        productQuantity: false
                    }
                }
            ]
        })
    }


    function productDecreaseHandler() {
        let productsNo = fstate.sides[1].productsNo.productsNo

        if (productsNo === 1) {
            productsNo = 1
        } else {
            productsNo = fstate.sides[1].productsNo.productsNo - 1
        }

        fsetState({
            ...fstate ,
            sides : [
                {
                    pagination: {
                        currentPage: 1
                    }
                },
                {
                    productsNo: {
                        productsNo: productsNo
                    }
                },
                {
                    productQuantity: {
                        productQuantity: false
                    }
                }
            ]
        })
    }



    function changeQuantityHandler(loop,index) {
        console.log(loop)
        console.log(index)
        //let productQuantity = fstate.products?.products[index]?.quantity[loop]
        fsetState({
            ...fstate ,
            sides: [
                {
                    pagination: {
                        currentPage: 1
                    }
                },
                {
                    productsNo: {
                        productsNo: 1
                    }
                },
                {
                    productQuantity: {
                        productQuantity: loop
                    }
                }
            ]
        }) 
    }

    return (
        <BrowserRouter>
            <NavBar />
            <Route path="/" exact component={Index} />
            <Route path="/products" exact component={() => <Products productsData={fstate.products?.products} />} />
            <Route path="/products/details/:id" exact component={() => <ProductDetails data={fstate.products?.products} productIncreaseHandler={productIncreaseHandler} noOfProducts={fstate.sides[1].productsNo.productsNo} productDecreaseHandler={productDecreaseHandler} changeQuantityHandler={(loop,index) => changeQuantityHandler(loop,index)} productQuantity={fstate.sides[2].productQuantity?.productQuantity  ? fstate.sides[2].productQuantity.productQuantity : null} isQuantityTrue={fstate.sides[2].productQuantity.productQuantity} />} />
            <Route path="/cart" exact component={() => <Cart  />} />
            <Route path="/form" exact component={() => <Form/>} />
        </BrowserRouter>
    )
}

export default Base

