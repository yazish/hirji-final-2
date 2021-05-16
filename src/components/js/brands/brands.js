import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"
import classes from "../../css/brands/brands.module.css"

const BrandsLayout = (props) => {
    const data = props.data
    console.log(data)

    let brandsArray = data?.map((loop, index) => {
        return Object.keys(loop)[0]
    })

    console.log(brandsArray)

    let newBrandsArray = brandsArray?.map((loop, index) => {
        return <Link to={`/products?brand=${index}&page=1`} key={loop} ><button className={`btn btn-info btn-lg ${classes.brandNamesButtons}`} >{loop}</button></Link>
    })

    console.log(newBrandsArray)
    return (
        <React.Fragment>
            <h3 className={classes.heading} >The Brands with which we Deal</h3>
            <div className={classes.mainDiv}>
                {newBrandsArray}
            </div>
        </React.Fragment>
    );
}

export default BrandsLayout;