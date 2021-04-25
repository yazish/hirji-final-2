import React from 'react';
import Layout from "../components/js/products/layout"


function Products (props) {


    return (
        <Layout  productsData={props.productsData} />
    )
}

export default Products 