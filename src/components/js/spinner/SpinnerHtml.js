import React from 'react';
import classes from "../../css/spinner/spinner.module.css"

const SpinnerHtml = () => {
    return (
        <div className={`d-flex justify-content-center m-5`}>
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default SpinnerHtml;