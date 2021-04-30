import React from 'react';
import Layout from "../productsDetails/Layout"

function Logic(props) {

    const data = props.data
    let params = window.location.pathname
    params = params.split("")
    params = params.splice(18)
    params = params.join("")

    let quantityArray = null
    let productsDetailsText = null
    let productDetails = null




    if (data) {
        var doesProductQuantityHaveAnArray = typeof (data[params].quantity)
        quantityArray = data[params].quantity
        productDetails = data[params]
        if (doesProductQuantityHaveAnArray === 'object') {
            doesProductQuantityHaveAnArray = true
        } else {
            doesProductQuantityHaveAnArray = false
        }
    }


    if (data) {
        var doesProductsHaveDetails = data[params].details ? true : false
        if (doesProductsHaveDetails) {
            productsDetailsText = data[params].details
        }
    }



    return (
        <Layout productDetails={productDetails} quantityDiv={doesProductQuantityHaveAnArray}
            quantityArray={quantityArray} doesProductHaveDetails={doesProductsHaveDetails}
            productDetailsText={productsDetailsText} productIncreaseHandler={props.productIncreaseHandler}
            noOfProducts={props.noOfProducts} productDecreaseHandler={props.productDecreaseHandler}
            changeQuantityHandler={(loop,index) => props.changeQuantityHandler(loop,index)}
            productQuantity={props.productQuantity} isQuantityTrue={props.isQuantityTrue} id={params} />
    )
}

export default Logic