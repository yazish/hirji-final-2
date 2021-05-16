import React from 'react';
import { useParams } from 'react-router-dom';
import Logic from "../components/js/productsDetails/logic"

function ProductDetails(props) {

    let productData = props.productData
    const { brandId , productId } = useParams()

    console.log(productData)

    if (productData) {
        productData = productData[brandId]
        let brandName = Object.keys(productData)[0]
        productData = productData[brandName]
        productData = productData[productId]
    }


    return (
        <Logic data={productData} productIncreaseHandler={props.productIncreaseHandler}
            noOfProducts={props.noOfProducts} productDecreaseHandler={props.productDecreaseHandler}
            changeQuantityHandler={(loop, index) => props.changeQuantityHandler(loop, index)}
            productQuantity={props.productQuantity} isQuantityTrue={props.isQuantityTrue} imageId={props.imageId}
            imageButtonHandler={(index) => {props.imageButtonHandler(index)}} />
    )
}

export default ProductDetails