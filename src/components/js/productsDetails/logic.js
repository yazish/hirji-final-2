import React from 'react';
import Layout from "../productsDetails/Layout"

function Logic(props) {

    const data = props.data
    let params = window.location.pathname
    params = params.split("")
    params = params.splice(18)
    params = params.join("")
    
    let quantityArray = null
    let productsDetailsText  = null

    


    if (data) {
        var doesProductQuantityHaveAnArray = typeof(data[params].quantity)
        quantityArray = data[params].quantity
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
        <Layout quantityDiv={doesProductQuantityHaveAnArray} quantityArray={quantityArray} doesProductHaveDetails={doesProductsHaveDetails} productDetailsText={productsDetailsText} />
    )
}

export default Logic