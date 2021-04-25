import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function GoToProducts () {
    const style  = {
        margin : "8px"
    }
    return (
        <button className="btn btn-primary" style={style}>Go to Products</button>
    )
}

export default GoToProducts