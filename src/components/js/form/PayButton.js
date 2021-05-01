import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"

function PayButton() {

    const payButtonHandler = () => {

        let usersData = JSON.parse(sessionStorage.getItem("details"));
        let cartProducts = JSON.parse(localStorage.getItem("products"));


        let mainObj = {}

        mainObj.firstName = usersData.firstName
        mainObj.lastName = usersData.lastName
        mainObj.email = usersData.email
        mainObj.area = usersData.area
        mainObj.city = usersData.city
        mainObj.phone = usersData.phone
        mainObj.products = cartProducts 

        console.log(mainObj)
        
        axios.post("https://hirji-final-2-3699e-default-rtdb.firebaseio.com/customers.json" , mainObj).then((obj) => {window.location.assign("http://localhost:3001/successful-payment")}).catch(err => {console.log(err)})
    }

    return (
        <div className="col-12">
            <button className="btn btn-primary btn-lg pay-on-delievery m-3" onClick={payButtonHandler} >Pay on Delivery</button>
        </div>
    )
}

export default PayButton