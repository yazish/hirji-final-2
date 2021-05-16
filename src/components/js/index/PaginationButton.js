import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import { Link } from "react-router-dom"

function GoToProducts() {
    const style = {
        margin: "8px",

    }
    return (
        <div className="d-flex justify-content-center">
            <Link to="/brands" >
                <button className="btn btn-primary btn-lg m-4 " style={style}>Go to Products</button>
            </Link>
        </div>
    )
}

export default GoToProducts