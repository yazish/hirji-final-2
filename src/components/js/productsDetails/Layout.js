import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import classes from "../../css/productDetails/layout.module.css"



function ProductDetailsLayout(props) {

    const quantityArray = props.quantityArray
    const productDetailsText = props.productDetailsText

    const buttons = quantityArray?.map((loop,index) => {
        return <button key={index} className={`${classes.quantityButtons} btn btn-primary`}>{loop}</button>
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
                    <p className={`${classes.informationData} m-3 justify-content-center pt-2`} >Name : vada</p>
                    <p className={`${classes.informationData} m-3 justify-content-center`} >Price : 300</p>
                    <p className={`${classes.informationData} m-3 justify-content-center pb-2`} >Quantity :  200gm</p>
                </div>

                <div className={`${classes.numberDiv} btn-group`} role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">-</button>
                    <button type="button" className="btn btn-secondary">1</button>
                    <button type="button" className="btn btn-secondary">+</button>
                </div>

                {props.quantityDiv ? quantityDivHtml : null}
                {props.doesProductHaveDetails ? productsDetailsHtml : null }

                <div className={`${classes.addToCartDiv}`}>
                    <button className={`btn justify-content-center btn-primary btn-lg m-3 ${classes.addToCartButton}`}>Add To Cart</button>
                </div>

            </div>

        </React.Fragment>
    )
}

export default ProductDetailsLayout