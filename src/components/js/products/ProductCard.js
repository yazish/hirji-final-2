import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import classes from "../../css/products/productCard.module.css"


function Card(props) {



    return (
        <div className={`card ${classes.mainDiv}`}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={process.env.PUBLIC_URL +  `assets/index/indexPicture1.png`} alt="..." className={classes.image} />
                </div>
                <div className="col-md-8">
                    <div className="card-body m-5">
                        <h5 className="card-title font-weight-normal mb-4">{props.name}</h5>
                        <h5 className="card-text font-weight-light mb-4">Price : {props.price}</h5>
                        <h5 className="card-text font-weight-light mb-4">Quantity : 200gm</h5>
                        <a className="btn btn-primary " href={`/products/details/${props.id}`}> Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

