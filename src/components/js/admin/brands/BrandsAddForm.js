import React,{useState} from 'react';
import axios from "axios"
import { storage } from '../../../../firebase';

const AddBrand = (props) => {
    let mainData = props.mainData
    let brandId = undefined;

    if (mainData) {
        brandId = mainData.length
    }


    function addBrandButton(event) {
        let brandName = sessionStorage.getItem("brandName");

        let name = sessionStorage.getItem("productName");
        let price = sessionStorage.getItem("MRP");
        let quantity = sessionStorage.getItem("quantity");
        let shelfLife = sessionStorage.getItem("shelfLife");
        let tax = sessionStorage.getItem("tax");
        let hsn = sessionStorage.getItem("hsn");

        let postData = {
            [brandName]: [{
                name,
                price: [price],
                quantity: [quantity],
                shelfLife,
                tax,
                hsn,
            }]
        }

        let getData = null

        axios.get("https://hirji-final-2-3699e-default-rtdb.firebaseio.com/products.json")
            .then((res) => {
                props.isLoadingTrue()
                console.log(props.data)
                getData = res.data;
                axios.patch("https://hirji-final-2-3699e-default-rtdb.firebaseio.com/products.json", { [getData.length]: postData })
                    .then(res => {
                        props.isLoadingFalse()
                        alert("Brand Successfully added !")
                        console.log(props.data)
                        console.log(res)
                    })
                    .catch(err => console.log(err))
            }).catch(
                err => {
                    console.log(err)
                    props.isLoadingFalse()
                })
    }

    function inputOnChangeHandler(event) {
        let brandName = event.target.value
        sessionStorage.setItem("brandName", brandName)
    }

    return (
        <React.Fragment>
            <div className="col-md-4 m-3">
                <label className="form-label" htmlFor="validationCustom01" name="firstName">Brand Name</label>
                <input className="form-control first-name-value" id="validationCustom01" type="text" required="required" onChange={(event) => inputOnChangeHandler(event)} />
            </div>
            <form className="row g-3 needs-validation m-5" required="required">

                <div className="col-md-4 m-3">
                    <label className="form-label" htmlFor="validationCustom01" name="firstName">Name</label>
                    <input className="form-control first-name-value" id="validationCustom01" type="text" required="required" onChange={(event) => { sessionStorage.setItem("productName", event.target.value) }} />
                </div>

                <div className="col-md-4 m-3">
                    <label className="form-label" htmlFor="validationCustom02" name="lastName">MRP</label>
                    <input className="form-control last-name-value" id="validationCustom02" type="text" required="required" onChange={(event) => { sessionStorage.setItem("MRP", event.target.value) }} />
                </div>

                <div className="col-md-4 m-3">
                    <label className="form-label" htmlFor="validationCustomUsername">Quantity</label>
                    <input className="form-control email-form" id="validationCustomUsername" type="text" aria-describedby="inputGroupPrepend" required="required" onChange={(event) => { sessionStorage.setItem("quantity", event.target.value) }} />
                </div>

                <div className="col-md-4 m-3">
                    <label className="form-label" htmlFor="validationCustom02" name="area">Shelf Life</label>
                    <input className="form-control " id="validationCustom02" type="text" required="required" onChange={(event) => { sessionStorage.setItem("shelfLife", event.target.value) }} />
                </div>

                <div className="form-group col-md-4 m-3">
                    <label htmlFor="inputState">Tax %</label>
                    <input className="form-control" id="inputState" type="text" required="required" onChange={(event) => { sessionStorage.setItem("tax", event.target.value) }} />
                </div>

                <div className="col-md-3 m-3">
                    <label className="form-label" htmlFor="validationCustom05" name="phone">HSN code</label>
                    <input className="form-control phone-value" id="validationCustom05" type="text" required="required" onChange={(event) => { sessionStorage.setItem("hsn", event.target.value) }} />
                </div>

            </form>
            <button className={`btn btn-warning m-3 btn-lg`} onClick={(event) => addBrandButton(event)}>Add Brand</button>

        </React.Fragment>
    );
}

export default AddBrand;