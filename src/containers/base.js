import React, { useEffect, useState } from 'react';
import NavBar from "../components/js/navbar/NavBar"
import Index from "./index"

import { BrowserRouter, Route } from "react-router-dom"
import Products from "./products"
import axios from "axios"

import ProductDetails from "./productDetails"
import Cart from "./cart"
import Form from "./form"

import SuccessPayment from "./successPayment"
import Admin from './admin';
import Brands from './brands';

import Authorization from './authorization';
import PartyNameContainer from './partyNamesContainer';
import PartyBrandsContainer from './partyBrands';

import PartyProductsContainer from './partyProducts';


function Base() {

    const store = {
        products: null,
        addPartyClicked: false,
        addPartyBrandClicked : false,
        addPartyProductClicked : false,
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
        ],
        imageId: 0,
        partyNamesData: null
    }




    const [fstate, fsetState] = useState(store);

    useEffect(() => {
        axios.get("https://hirji-final-2-3699e-default-rtdb.firebaseio.com/products.json").then(
            (data) => {
                console.log(data.data);
                axios.get("https://hirji-final-2-3699e-default-rtdb.firebaseio.com/admin/partName.json")
                    .then((res) => {
                        console.log(res.data);
                        fsetState({ ...fstate, partyNamesData: res.data, products: data.data })
                    })
                    .catch((err) => {
                        alert("An Error Occurred")
                        console.log(err);
                    })
            }
        ).catch((err) => {
            console.log(err)
        })

    }, [])


    function productIncreaseHandler() {
        let productsNo = fstate.sides[1].productsNo.productsNo + 1
        fsetState({
            ...fstate,
            sides: [
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
            ...fstate,
            sides: [
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



    function changeQuantityHandler(loop, index) {
        console.log(loop)
        console.log(index)
        //let productQuantity = fstate.products?.products[index]?.quantity[loop]
        fsetState({
            ...fstate,
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


    function imageButtonHandler(index) {
        fsetState({
            ...fstate,
            imageId: index
        })
    }

    function addPartyHandler() {
        if (fstate.addPartyClicked === false) {
            fsetState({
                ...fstate,
                addPartyClicked: true
            })
        } else {
            fsetState({
                ...fstate,
                addPartyClicked: false
            })
        }
    }

    function addPartyBrandHandler() {
        if (fstate.addPartyBrandClicked === false) {
            fsetState({
                ...fstate,
                addPartyBrandClicked: true
            })
        } else {
            fsetState({
                ...fstate,
                addPartyBrandClicked: false
            })
        }
    }

    function addPartyProductHandler() {
        console.log("yj")
        if (fstate.addPartyProductClicked === false) {
            fsetState({
                ...fstate,
                addPartyProductClicked: true
            })
        } else {
            fsetState({
                ...fstate,
                addPartyProductClicked: false
            })
        }
    }

    return (
        <BrowserRouter>
            <Route path={["/", "/products", "/products/details/:brandId/:productId", "/brands"]} exact component={NavBar} />
            <Route path="/" exact component={Index} />
            <Route path="/products" exact component={() => <Products productsData={fstate.products} />} />
            <Route path="/products/details/:brandId/:productId" exact component={() => <ProductDetails imageId={fstate.imageId} imageButtonHandler={(index) => imageButtonHandler(index)} productData={fstate.products} productIncreaseHandler={productIncreaseHandler} noOfProducts={fstate.sides[1].productsNo.productsNo} productDecreaseHandler={productDecreaseHandler} changeQuantityHandler={(loop, index) => changeQuantityHandler(loop, index)} productQuantity={fstate.sides[2].productQuantity?.productQuantity ? fstate.sides[2].productQuantity.productQuantity : null} isQuantityTrue={fstate.sides[2].productQuantity.productQuantity} />} />
            <Route path="/cart" exact component={() => <Cart />} />
            <Route path="/form" exact component={() => <Form />} />
            <Route path="/successful-payment" exact component={SuccessPayment} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/brands" exact component={() => <Brands data={fstate.products} />} />
            <Route path="/authorization" exact component={() => <Authorization />} />
            <Route path="/admin/partyName" exact component={() => <PartyNameContainer data={fstate.products} addPartyClicked={fstate.addPartyClicked} addPartyHandler={addPartyHandler} partyNamesData={fstate.partyNamesData} />} />
            <Route path="/admin/brands/:partyId" exact component={() => <PartyBrandsContainer partyBrandClicked={fstate.addPartyBrandClicked} addPartyBrandHandler={addPartyBrandHandler} partyBrandNames={fstate.partyNamesData}/> }/>
            <Route path="/admin/:partyId/:brandId/products" exact component={(() => <PartyProductsContainer addPartyProductClicked={fstate.addPartyProductClicked} addPartyProductHandler={addPartyProductHandler} partyProductsData={fstate.partyNamesData} /> )} />
        </BrowserRouter>
    )
}

export default Base

