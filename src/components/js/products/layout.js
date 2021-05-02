import React from 'react';
import Card from "./ProductCard";
import queryString from "query-string"
import Pagination from "./Pagination"


function ProductsLayout(props) {

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

    const data = props.productsData
    let products = null


    if (data) {

        let  queryValue = window.location.search
        queryValue = queryString.parse(queryValue);
        queryValue = queryValue.page * 1

        const skipNo = (queryValue - 1) * 10


        let newData = skip(data , skipNo)
        newData = limit(newData , 10)

        console.log(newData)


        var nextPageNo = queryValue + 1;
        var previousPageNo = queryValue - 1;
        var pageNo = queryValue
        var dataLength = data.length
        

        console.log(dataLength)

        console.log(nextPageNo , previousPageNo)


        products = newData.map((loop,index) => {
            return loop ? <Card name={loop.name} price={loop.price} key={index} id={skipNo + index} productQuantity={({skip}) => props.productQuantity}  />  : null
        })

    } else {
        console.log("sorry")
    }
    
    return (
        <React.Fragment>
            {products}
            <Pagination nextPageNo={nextPageNo} previousPageNo={previousPageNo} pageNo={pageNo} dataLength={dataLength} />
        </React.Fragment>

    )
        
    
}



export default ProductsLayout


