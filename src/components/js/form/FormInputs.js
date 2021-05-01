import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"



function FormInputs() {

    let userDetails = {}
    userDetails.city = "vadodra"

    function firstNameInputHandler(event) {
        let value = event.target.value;
        userDetails.firstName = value
        sessionStorage.setItem("details", JSON.stringify(userDetails))
    }

    function lastNameInputHandler(event) {
        userDetails.lastName = event.target.value
        sessionStorage.setItem("details", JSON.stringify(userDetails))
    }

    function emailInputHandler(event) {
        userDetails.email = event.target.value
        sessionStorage.setItem("details", JSON.stringify(userDetails))
    }

    function areaInputHandler(event) {
        userDetails.area = event.target.value
        sessionStorage.setItem("details", JSON.stringify(userDetails))
    }

    function cityInputHandler(event) {
        userDetails.city = event.target.value
        sessionStorage.setItem("details", JSON.stringify(userDetails))
    }

    function phoneInputHandler(event) {
        userDetails.phone = event.target.value
        sessionStorage.setItem("details", JSON.stringify(userDetails))
    }


    return (
        <form className="row g-3 needs-validation m-5" required="required">
            <div className="col-md-4"><label className="form-label" htmlFor="validationCustom01" name="firstName">First name</label><input className="form-control first-name-value" id="validationCustom01" type="text" required="required" onChange={(event) => firstNameInputHandler(event)} /></div>
            <div className="col-md-4"><label className="form-label" htmlFor="validationCustom02" name="lastName">Last name</label><input className="form-control last-name-value" id="validationCustom02" type="text" required="required" onChange={(event) => lastNameInputHandler(event)} /></div>
            <div className="col-md-4"><label className="form-label" htmlFor="validationCustomUsername" name="email" value="arminkavina@gmail.com">Email</label>
                <div className="input-group has-validation" /><input className="form-control email-form" id="validationCustomUsername" type="email" aria-describedby="inputGroupPrepend" required="required" onChange={(event) => emailInputHandler(event)} />
            </div>
            <div className="col-md-4"><label className="form-label" htmlFor="validationCustom02" name="area">Area</label><input className="form-control " id="validationCustom02" type="text" required="required" onChange={(event) => areaInputHandler(event)} /></div>
            <div className="form-group col-md-4">
                <label htmlFor="inputState">City</label>
                <select id="inputState" className="form-control" onChange={(event) => cityInputHandler(event)} >
                    <option defaultValue>Vadodra</option>
                    <option>Ahmedabad</option>
                    <option>Navsari</option>
                    <option>Surat</option>
                </select>
            </div>
            <div className="col-md-3"><label className="form-label" htmlFor="validationCustom05" name="phone">Phone</label><input className="form-control phone-value" id="validationCustom05" type="tel" required="required" onChange={(event) => phoneInputHandler(event)} /></div>
        </form>
    )
}

export default FormInputs

