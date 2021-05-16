import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import classes from "../../css/products/productCard.module.css"
import { Link } from "react-router-dom"

function Card(props) {

    return (
        <div className={`card ${classes.mainDiv}`}>
            <div className={`row g-0 ${classes.rowDiv}`}>
                <div className="col-md-4">
                    <img src={`https://firebasestorage.googleapis.com/v0/b/hirji-final-2-3699e.appspot.com/o/brand-id-${props.brandId}%2Fproduct-id-${props.productId}%2Fimage-id-0?alt=media&token=6f1c685e-cd50-4102-9399-5bb29a9556c8`} alt="..." className={classes.image} />
                </div>
                <hr/>
                <div className="col-md-8">
                    <div className="card-body m-3">
                        <h5 className="card-title font-weight-normal mb-4">{props.name}</h5>
                        <h5 className="card-text font-weight-light mb-4">SKU : {props.quantity}</h5>
                        <h5 className="card-text font-weight-light mb-4">Shelf Life : {props.shelfLife} months</h5>
                        <Link className="btn btn-primary " to={`/products/details/${props.brandId}/${props.productId}`}>Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

