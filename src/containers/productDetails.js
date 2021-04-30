import React from 'react';
import Logic from "../components/js/productsDetails/logic"

function ProductDetails(props) {

    return (
        <Logic data={props.data} productIncreaseHandler={props.productIncreaseHandler}
            noOfProducts={props.noOfProducts} productDecreaseHandler={props.productDecreaseHandler}
            changeQuantityHandler={(loop, index) => props.changeQuantityHandler(loop, index)}
            productQuantity={props.productQuantity} isQuantityTrue={props.isQuantityTrue} />
    )
}

export default ProductDetails