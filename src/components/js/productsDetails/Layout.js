import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import classes from "../../css/productDetails/layout.module.css"
import { Link } from "react-router-dom"



function ProductDetailsLayout(props) {

    const quantityArray = props.quantityArray
    const productDetailsText = props.productDetailsText
    const productDetails = props.productDetails

    let productPrice = productDetails?.price * props.noOfProducts


    const buttons = quantityArray?.map((loop, index) => {
        return <button key={index} onClick={() => props.changeQuantityHandler(loop, index)} className={`${classes.quantityButtons} btn btn-primary`}>{loop}</button>
    })


    const quantityDivHtml = <div className={`${classes.quantityDiv} m-3`}>
        <b>Quantity</b>
        <div className={`btn btn-group-vertical`}>
            {buttons}
        </div>
    </div>

    const productsDetailsHtml = <div className={`${classes.productsDetailsDiv} m-3`}>
        <h4 className={`p-2 ${classes.detailsHeading}`}>Details</h4>
        <p className={`${classes.productsDetailsText} p-3`}>{productDetailsText}</p>
    </div>


    function addProductToCart() {

        let retrivedData = JSON.parse(localStorage.getItem("products"))
        let cartArray = retrivedData ? retrivedData : []

        console.log(cartArray)

        const productDataThatIsGoingToBeAddedToTheCart = {
            name: productDetails.name,
            price: productPrice,
            quantity: productDetails?.quantity ? props.isQuantityTrue ? props.productQuantity : productDetails.quantity[0] : null,
            number : props.noOfProducts,
            image : process.env.PUBLIC_URL + "assets/index/indexPicture1.png",
            id : props.id
        }

        const productIncluded = cartArray.find((loop) => {
            return loop.name === productDataThatIsGoingToBeAddedToTheCart.name
        })

        console.log(productIncluded)

        if (productIncluded) {
            return 0
        } else {
            cartArray.push(productDataThatIsGoingToBeAddedToTheCart)
            localStorage.setItem("products", JSON.stringify(cartArray))
        }

    }

    return (
        <React.Fragment>

            <div className="upperDiv">

                <div className={classes.imageDiv}>
                    <img src={process.env.PUBLIC_URL + "/assets/index/indexPicture1.png"} alt="..." className={classes.image} />
                    <div className={`btn-toolbar ${classes.imageNavigationButtons}`} role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group-vertical mr-2" role="group" aria-label="First group">
                            <button type="button" className="btn btn-secondary">1</button>
                            <button type="button" className="btn btn-secondary">2</button>
                            <button type="button" className="btn btn-secondary">3</button>
                            <button type="button" className="btn btn-secondary">4</button>
                        </div>
                    </div>
                </div>

                <div className={`${classes.informationDiv} m-3`}>
                    <p className={`${classes.informationData} m-3 justify-content-center pt-2`} >Name : {productDetails ? productDetails.name : null}</p>
                    <p className={`${classes.informationData} m-3 justify-content-center`} >Price : {productDetails ? productPrice : null}</p>
                    <p className={`${classes.informationData} m-3 justify-content-center pb-2`} >Quantity :  {productDetails?.quantity ? props.isQuantityTrue ? props.productQuantity : productDetails.quantity[0] : null}</p>
                </div>

                <div className={`${classes.numberDiv} btn-group`} role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={props.productDecreaseHandler}>-</button>
                    <button type="button" className="btn btn-secondary">{props.noOfProducts}</button>
                    <button type="button" className="btn btn-secondary" onClick={props.productIncreaseHandler}>+</button>
                </div>

                {props.quantityDiv ? quantityDivHtml : null}
                {props.doesProductHaveDetails ? productsDetailsHtml : null}

                <div className={`${classes.addToCartDiv}`}>
                    <Link to="/cart"><button className={`btn justify-content-center btn-primary btn-lg m-3 ${classes.addToCartButton}`} onClick={addProductToCart} >Add To Cart</button></Link>
                </div>

            </div>

        </React.Fragment>
    )
}

export default ProductDetailsLayout