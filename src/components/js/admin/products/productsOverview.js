import React from 'react';
import classes from "../../../css/admin/products/productsOverview.module.css"

import "bootstrap/dist/css/bootstrap.min.css"

const ProductsOverview = (props) => {
    let mainData = props.data

    let productsNames = undefined

    if (mainData) {
        let brandId = sessionStorage.getItem("brandId");
        let productsData = mainData[brandId]
        let brandName = Object.keys(productsData)[0]
        productsData = productsData[brandName]


        productsNames = productsData?.map((loop,index) => {
            return <button key={index} className={`btn btn-warning ${classes.productsNameButtons}`} onClick={(event) => props.productsButtonClicked(event , index)} >{loop.name}</button>
        })
    }

    return (
        <div className={classes.mainDiv}>
            <button className={`btn btn-danger m-3 btn-lg`} onClick={props.addProductButton} >Add Product</button>
            <div className={classes.productsButtonsGridDiv}>
                {productsNames}
            </div>
        </div>
    );
}
 
export default ProductsOverview;