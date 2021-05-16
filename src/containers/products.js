import React from 'react';
import Layout from "../components/js/products/layout"
import queryString from "query-string"



function Products (props) {
    const mainData = props.productsData
    let queryParams = window.location.search;
    queryParams = queryString.parse(queryParams);

    let brandId = queryParams.brand
    let brandProducts = mainData ? mainData[brandId] : null
    let brandName = brandProducts ? Object.keys(brandProducts)[0] : null   
    brandProducts =  brandProducts ? brandProducts[brandName] : null 

    console.log(brandProducts)

    return (
        <Layout  productsData={brandProducts}  />
    )
}

export default Products 