import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from "../productsDetails/Layout"

function Logic(props) {

    const data = props.data

    const {brandId , productId} = useParams()

    let price,name,quantity,shelfLife,hsn,tax=undefined
    let quantityArrayLength = null
    let imageId = undefined
    let quantityArray = undefined
    let imageArray = undefined
    
    if (data) {
        price = data.price.toString()
        name = data.name
        quantity = data.quantity.toString()
        shelfLife = data.shelfLife
        hsn = data.hsn
        tax = data.tax

        imageId = Array.isArray(data.images) ? data.images.length : 0
        quantityArrayLength = data.quantity.length
        console.log(quantityArrayLength)
        quantityArray = data.quantity
        imageArray = data.images
    }

    let productsDetailsText = null
    let productDetails = null

    return (
        <Layout price={price} name={name} quantity={quantity} shelfLife={shelfLife} hsn={hsn} tax={tax} brandId={brandId} productId={productId}
            quantityArrayLength={quantityArrayLength} imageId={props.imageId} imageArray={imageArray}
            productDetailsText={productsDetailsText} quantityArray={quantityArray}
            changeQuantityHandler={(loop,index) => props.changeQuantityHandler(loop,index)}
            productQuantity={props.productQuantity} isQuantityTrue={props.isQuantityTrue} imageButtonHandler={(index) => props.imageButtonHandler(index)}  />
    )
}

export default Logic
