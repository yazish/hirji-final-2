import axios from 'axios';
import React, { Component } from 'react';

import classes from "../../../css/admin/party/partyProducts.module.css"

const PartyProducts = (props) => {

    const adminPassword = sessionStorage.getItem("adminPassword");

    if (adminPassword === "yazish") {

        let addPartyProductClicked = props.addPartyProductClicked;
        let partyProductsData = props.partyProductsData;

        let brandName = undefined;
        let partyName = undefined;
        let list = undefined

        let brandId = window.location.pathname;
        brandId = brandId.split("");
        brandId = brandId[brandId.length - 10];

        let partyId = window.location.pathname;
        partyId = partyId.split("");
        partyId = partyId[partyId.length - 12];


        if (partyProductsData) {

            partyName = partyProductsData[partyId].partyName
            brandName = partyProductsData[partyId].brands[brandId].brandName;
            partyProductsData = partyProductsData[partyId].brands[brandId].products;

            list = partyProductsData.map((loop , index) => {
                return   <div className={`card ${classes.productDiv} `} key={index} style={{width: '18rem'}}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name : {loop.name}</li>
                  <li className="list-group-item">Price : {loop.price}</li>
                  <li className="list-group-item">Previous-Quantity : {loop.quantity}</li>
                  <li className="list-group-item">Previous-Quantity Date : {loop.date}</li>
                  <input type="text" className={`m-1`} placeholder="Quantity" onChange={(event) => {sessionStorage.setItem("quantity" , event.target.value)}} />
                  <input type="date" className={`m-1`} placeholder="Date"  onChange={(event) => {sessionStorage.setItem("date" , event.target.value)}} />
                  <button className={`btn btn-light m-2 ${index}`} onClick={(productId) => addQuantityAndDateToDBHandler(productId)} >Add Quantity and Date</button>
                </ul>
              </div>
            })
        }


        const addPartyProductToTheDBHanadler = () => {

            let productName = sessionStorage.getItem("partyProductName");
            let price = sessionStorage.getItem("partyProductPrice");
            let quantity = sessionStorage.getItem("partyProductQuantity");
            let date = sessionStorage.getItem("partyProductDate");

            if (partyProductsData) {
                axios.patch(`https://hirji-final-2-3699e-default-rtdb.firebaseio.com/admin/partName/${partyId}/brands/${brandId}/products.json`, {
                    [partyProductsData.length]: {
                        name: productName,
                        price,
                        quantity,
                        date
                    }
                }).then((res) => {

                    alert("Successfully added Product's details !");
                    window.location.reload();
                    sessionStorage.removeItem("partyProductName");
                    sessionStorage.removeItem("partyProductPrice");
                    sessionStorage.removeItem("partyProductQuantity");
                    sessionStorage.removeItem("partyProductDate");

                }).catch((err) => {
                    alert("Sorry an error occurred !")
                })
            }
        }

        const addQuantityAndDateToDBHandler = (productId) => {

            let quantity = sessionStorage.getItem("quantity");
            let date = sessionStorage.getItem("date");

            productId = productId.target.className
            productId = productId.split("");
            productId = productId[productId.length - 1]


            if (partyProductsData) {
                axios.patch(`https://hirji-final-2-3699e-default-rtdb.firebaseio.com/admin/partName/${partyId}/brands/${brandId}/products/${productId}.json` , {
                    quantity ,
                    date
                }).then((res) => {
                    alert("Successfully added Quantity and Date");
                    window.location.reload();
                    sessionStorage.removeItem("date");
                    sessionStorage.removeItem("quantity");
                }).catch((err) => {
                    alert("An error occurred !")
                })
            } 
        }

        return (
            <React.Fragment>
                <button className={`btn btn-primary m-3`} onClick={props.addPartyProductHandler} >Add Product</button>
                <span className={`m-2`}>Party : <b> {partyName} </b></span>
                <span className={`m-2`}>Brand : <b> {brandName} </b></span>
                <hr />
                {addPartyProductClicked ?
                    <React.Fragment>
                        <form className="row g-3 needs-validation m-5" required="required">

                            <div className="col-md-4 m-3">
                                <input className="name" type="text" placeholder="Product Name" onChange={(event) => { sessionStorage.setItem("partyProductName", event.target.value) }} />
                            </div>

                            <div className="col-md-4 m-3">
                                <input className="name" type="text" placeholder="Price" onChange={(event) => { sessionStorage.setItem("partyProductPrice", event.target.value) }} />
                            </div>

                            <div className="col-md-4 m-3">
                                <input className="name" type="text" placeholder="Quantity" onChange={(event) => { sessionStorage.setItem("partyProductQuantity", event.target.value) }} />
                            </div>

                            <div className="col-md-4 m-3">
                                <input className="name" type="date" placeholder="Date" onChange={(event) => { sessionStorage.setItem("partyProductDate", event.target.value) }} />
                            </div>

                        </form>
                        <hr />
                        <button className={`btn btn-light ml-3`} onClick={props.addPartyProductHandler}>X</button >
                        <button className={`btn btn-light ml-3`} onClick={addPartyProductToTheDBHanadler} >Add Product</button >
                    </React.Fragment>
                    :
                    list }
            </React.Fragment>
        )

    } else {

        return (
            <h1>An error occurred. Make sure you signUp.</h1>
        )
    }
}

export default PartyProducts;