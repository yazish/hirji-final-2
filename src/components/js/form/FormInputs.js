import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function FormInputs() {

    let userDetails = {}

    function firstNameInputHandler(event) {
        let value = event.target.value;
        userDetails.firstName = value
        sessionStorage.setItem("details" , JSON.stringify(userDetails))
    }

    function lastNameInputHandler(event) {
        userDetails.lastName = event.target.value
        sessionStorage.setItem("details" , JSON.stringify(userDetails))
    }

    function emailInputHandler(event) {
        userDetails.email = event.target.value
        sessionStorage.setItem("details" , JSON.stringify(userDetails))
    }

    function areaInputHandler(event) {
        userDetails.area = event.target.value
        sessionStorage.setItem("details" , JSON.stringify(userDetails))
    }

    function cityInputHandler(event) {
        userDetails.city = event.target.value
        sessionStorage.setItem("details" , JSON.stringify(userDetails))
    }

    function phoneInputHandler(event) {
        userDetails.phone = event.target.value
        sessionStorage.setItem("details" , JSON.stringify(userDetails))
    }


    return (
        <form className="row g-3 needs-validation m-5" required="required">
            <div className="col-md-4"><label className="form-label" htmlFor="validationCustom01" name="firstName">First name</label><input className="form-control first-name-value" id="validationCustom01" type="text" required="required" onChange={(event) => firstNameInputHandler(event) } /></div>
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
            <div className="col-12"><button className="btn btn-primary pay-on-delievery m-3" >Pay on Delivery</button></div>
        </form>
    )
}

export default FormInputs

{/* <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form> */}

/*
        <div className="col-md-3"><label className="form-label" htmlFor="validationCustom04" name="city">City</label><select className="form-select city-value" id="validationCustom04" required="required">
                <option default="default">Baroda</option>
                <option>Ahmedabad </option>
                <option>Navsari </option>
                <option>Surat </option>
                <option>Bharuch</option>
            </select></div> */

//             <div className="col-md-6"><label className="form-label" htmlFor="validationCustom03" name="area">Area</label><input className="form-control area-value" id="validationCustom03" type="text" required="required" onClick={(event) => areaInputHandler(event)} /></div>
