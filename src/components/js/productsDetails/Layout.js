import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import classes from "../../css/productDetails/layout.module.css"
import { Link } from "react-router-dom"



function ProductDetailsLayout(props) {

    // Image Button Html

    let imagesButtonHtml = null

    if (props.name) {
        console.log(props.imageArray)
        let imageArray = props.imageArray?.map((loop, index) => {
            return <button key={index} className={`btn btn-warning`} onClick={() => props.imageButtonHandler(index)} >{index + 1}</button>
        })

        console.log(imageArray)

        imagesButtonHtml = <div className={`btn-toolbar `} role="toolbar" aria-label="Toolbar with button groups">
            <div className={`btn-group-vertical mr-2 ${classes.imageNavigationButtons}`} role="group" aria-label="First group">
                {imageArray}
            </div>
        </div>
    }

    // Qunatity Buttons HTML

    let quantityDivHtml = false


    if (props.name) {
        const buttons = props.quantityArray?.map((loop, index) => {
            return <button key={index} className={`${classes.quantityButtons} btn btn-primary`}>{loop}</button>
        })

        if (props.quantityArrayLength === 1) {
            quantityDivHtml = false
        } else {
            quantityDivHtml = <div className={`${classes.quantityDiv} m-3`}>
                <b>Quantity</b>
                <div className={`btn btn-group-vertical`}>
                    {buttons}
                </div>
            </div>
        }
    }


    // Return

    return (
        <React.Fragment>

            <div className={`${classes.mainDiv}`}>

                <div className={classes.imageDiv}>
                    <img src={`https://firebasestorage.googleapis.com/v0/b/hirji-final-2-3699e.appspot.com/o/brand-id-${props.brandId}%2Fproduct-id-${props.productId}%2Fimage-id-${props.imageId}?alt=media&token=6f1c685e-cd50-4102-9399-5bb29a9556c8`} alt="..." className={classes.image} />
                    {imagesButtonHtml ? imagesButtonHtml : null}
                </div>

                <div className={`${classes.informationDiv} m-3`}>
                    <p className={`${classes.informationData} m-3 justify-content-center pt-2`} >Name : {props.name}</p>
                    <hr />
                    <p className={`${classes.informationData} m-3 justify-content-center`} >MRP (₹) : {props.price}/-</p>
                    <hr />
                    <p className={`${classes.informationData} m-3 justify-content-center pb-2`} > SKU :  {props.quantity}</p>
                    <hr />
                    <p className={`${classes.informationData} m-3 justify-content-center pb-2`} > Shelf Life : {props.shelfLife} months</p>
                    <hr />
                    <p className={`${classes.informationData} m-3 justify-content-center pb-2`} >HSN code : {props.hsn}</p>
                    <hr />
                    <p className={`${classes.informationData} m-3 justify-content-center pb-2`}>GST : {props.tax}%</p>
                    <hr />
                </div>


                {quantityDivHtml ? quantityDivHtml : null}

                <div className={`${classes.backBtnDiv}`}>
                    <Link to={`/products?brand=${props.brandId}&page=1`}><button className={`btn justify-content-center btn-primary btn-lg m-3 ${classes.addToCartButton}`} >Back</button></Link>
                </div>

            </div>

        </React.Fragment>
    )
}

export default ProductDetailsLayout