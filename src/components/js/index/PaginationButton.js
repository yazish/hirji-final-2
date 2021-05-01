import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import {Link} from "react-router-dom"

function GoToProducts () {
    const style  = {
        margin : "8px",

    }
    return (
        <Link to="/products?page=1" ><button className="btn btn-primary btn-lg m-4 justify-content-center" style={style}>Go to Products</button></Link>
    )
}

export default GoToProducts