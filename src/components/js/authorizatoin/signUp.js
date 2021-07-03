import React from 'react';
import classes from "../../css/signUp/signUp.module.css"

const SignUp = (props) => {

    const PasswordHandler = () => {
        let input = sessionStorage.getItem("adminPassword");

        if (input === "yazish") {
            console.log("right password");
            window.location = "/admin/partyName"
            
        } else {
            alert("Password Is wrong")
        }
    }

    return (
        <div className={`${classes.mainDiv}`}>
            <input type="text" className={`form-control ${classes.passwordInput} `} placeholder="Password" onChange={ (event) => { sessionStorage.setItem("adminPassword" , event.target.value) } } />
            <button className={`btn btn-primary m-4`} onClick={PasswordHandler} >Send Password</button>
        </div>
    );
}

export default SignUp;