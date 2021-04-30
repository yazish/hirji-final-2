import React from 'react';
import ProductDetailsLayout from "../components/js/productsDetails/Layout"
import Logic from "../components/js/productsDetails/logic"

function ProductDetails(props) {

    return(
        <Logic data={props.data} productIncreaseHandler={props.productIncreaseHandler} noOfProducts={props.noOfProducts} productDecreaseHandler={props.productDecreaseHandler} changeQuantityHandler={props.changeQuantityHandler} changeQuantityHandler={(loop,index) => props.changeQuantityHandler(loop,index)} productQuantity={props.productQuantity} isQuantityTrue={props.isQuantityTrue} />
    )
}

export default ProductDetails