import React from 'react';
import Card from "./ProductCard";
import queryString from "query-string"
import Pagination from "./Pagination"


function ProductsLayout(props) {

    let productsData = props.productsData 
    console.log(productsData)


    function limit(arr,c) {
        return arr.filter((x, i) => {
            if (i <= (c - 1)) { return true }
        })
    }

    function skip(arr,c) {
        return arr.filter((x, i) => {
            if (i > (c - 1)) { return true }
        })
    }

    let products = null
    let brandId = undefined

    if (productsData) {

        let  queryValue = window.location.search
        brandId = queryString.parse(queryValue).brand
        queryValue = queryString.parse(queryValue);
        queryValue = queryValue.page * 1
        console.log(brandId)


        const skipNo = (queryValue - 1) * 10


        let newData = skip(productsData , skipNo)
        newData = limit(newData , 10)

        console.log(newData)


        var nextPageNo = queryValue + 1;
        var previousPageNo = queryValue - 1;
        var pageNo = queryValue
        var dataLength = productsData.length

        console.log(newData)


        products = newData.map((loop,index) => {
            return loop ? <Card name={loop.name} quantity={loop.quantity.toString() } shelfLife={loop.shelfLife} brandId={brandId}  productId={skipNo + index}  key={index} />  : null
        })
        
    } else {
        console.log("sorry")
    }
    
    return (
        <React.Fragment>
            {products}
            <Pagination nextPageNo={nextPageNo} previousPageNo={previousPageNo} brandId={brandId} pageNo={pageNo} dataLength={dataLength} />
        </React.Fragment>

    )
        
    
}



export default ProductsLayout


