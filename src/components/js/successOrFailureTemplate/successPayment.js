import React from 'react';

import classes from "../../css/sucessOrFailureCss/successPayment.module.css"

function PaymentSuccess() {


    setTimeout(() => {
        window.location.assign("http://localhost:3001/")
    }, 2000)


    return (
        <div className={`${classes.wrapUpDiv}`}>
            <svg version="1.1" id={classes.Layer_1} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="370px" height="370px" viewBox="0 0 170 170" enableBackground="new 0 0 170 170" xmlSpace="preserve">
                <path id={classes.circle} fill="none" stroke="#00c853" strokeWidth={8} strokeMiterlimit={4} strokeDasharray="none" strokeOpacity={1} d="M 
	  7,   86 A 78,78 0 0 1 
	  86,  7    78,78 0 0 1 
	  164, 86   78,78 0 0 1 
	  86,  164  78,78 0 0 1 
	  7,   86 Z" />
                <path fill="none" stroke="#00c853" strokeWidth={8} strokeMiterlimit={4} strokeDasharray="none" strokeOpacity={1} d="m 
       33, 84 
       34, 38 
       68,-67" id={classes.check} />
            </svg>
        </div>
    )
}
export default PaymentSuccess