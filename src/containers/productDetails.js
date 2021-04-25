import React from 'react';
import ProductDetailsLayout from "../components/js/productsDetails/Layout"
import Logic from "../components/js/productsDetails/logic"

function ProductDetails(props) {

    return(
        <Logic data={props.data} />
    )
}

export default ProductDetails