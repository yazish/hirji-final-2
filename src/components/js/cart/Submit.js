import React from 'react';
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


function Buy() {
    return (
        <Link to="/form"><button className={`btn btn-primary m-3 btn-lg`} >Buy</button></Link>
    )
}

export default Buy