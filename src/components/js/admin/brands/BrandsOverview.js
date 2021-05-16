import React, { useEffect, useState } from 'react';
import Brands from '../../../../containers/brands';
import classes from "../../../css/admin/brands/brandsOverview.module.css"

function BrandsOverview(props) {

    let brandNames = null
    let data = props.data

    if (data) {
        brandNames = data.map((loop, index) => {
            return Object.keys(loop)[0]
        })
        brandNames = brandNames.map((loop, index) => {
            return <button key={index} className={`btn btn-warning ${classes.brandNameButtons}`} onClick={() => props.brandButtonClicked(index)}  >{loop}</button>
        })
    }

    return (
        <div className={`${classes.mainDiv}`}>
            <button className={`btn btn-danger btn-lg m-3 ${classes.addBrandButton}`} onClick={props.addBrandButtonClicked} >Add Brand</button>
            <div className={classes.brandButtonsGridDiv}>
                {brandNames}
            </div>
        </div>
    )
}

export default BrandsOverview