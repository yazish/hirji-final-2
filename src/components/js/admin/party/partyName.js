import React from 'react';
import cancelIcon from "../../../../assets/cancelSvg.svg"
import axios from "axios"
import { useEffect } from 'react';

const PartyNames = (props) => {

    let adminPassword = sessionStorage.getItem("adminPassword");

    if (adminPassword === "yazish") {

        adminPassword = true;
        let list = null;
        let addPartyClicked = props.addPartyClicked
        let data = props.data;
        let partyNamesData = props.partyNamesData;

        console.log(partyNamesData);

        if (partyNamesData) {
            list = partyNamesData.map((loop, index) => {
                return <a href={`/admin/brands/${index}`} key={index} ><li >{loop.partyName} </li></a>
            })
        }

        let addPartyToTheDBHandler = () => {

            console.log("clicked")
            console.log(partyNamesData.length)

            let partyName = sessionStorage.getItem("partyName");
            let brandName = sessionStorage.getItem("partyBrandName");
            let price = sessionStorage.getItem("partyProductPrice");
            let quantity = sessionStorage.getItem("partyProductQuantity");
            let name = sessionStorage.getItem("partyProductName");
            let date = sessionStorage.getItem("partyProductDate");



            axios.patch("https://hirji-final-2-3699e-default-rtdb.firebaseio.com/admin/partName.json", {
                [partyNamesData.length]: {
                    brands: [
                        {
                            brandName,
                            products: [
                                {
                                    price,
                                    quantity,
                                    name,
                                    date
                                }
                            ]
                        }
                    ],
                    partyName: partyName
                }
            })
                .then((res) => {
                    console.log(res);
                    alert("Party Added");
                    document.location.reload();
                    sessionStorage.removeItem("partyName");
                    sessionStorage.removeItem("partyBrandName");
                    sessionStorage.removeItem("partyProductPrice");
                    sessionStorage.removeItem("partyProductQuantity");
                    sessionStorage.removeItem("partyProductName");
                    sessionStorage.removeItem("partyProductDate");

                })
                .catch((err) => {
                    alert("An error occurred")
                })
        }

        return (
            <React.Fragment>
                <button className={`btn btn-primary m-4`} onClick={props.addPartyHandler} >Add Party</button>
                {addPartyClicked ?
                    <React.Fragment>
                        <form className="row g-3 needs-validation m-5" required="required">

                            <div className="col-md-4 m-3">
                                <input placeholder="Party Name" type="text" onChange={(event) => { sessionStorage.setItem("partyName", event.target.value) }} />
                            </div>

                            <div className="col-md-4 m-3">
                                <input className="name" type="text" placeholder="Brand Name" onChange={(event) => { sessionStorage.setItem("partyBrandName", event.target.value) }} />
                            </div>

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
                        <button className={`btn btn-light ml-2`} onClick={addPartyToTheDBHandler}>Add Party</button>
                        <button className={`btn btn-light  ml-3`} onClick={props.addPartyHandler}>X</button >
                    </React.Fragment>
                    : <React.Fragment>
                        <hr />
                        <ul>
                            {list}
                        </ul>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
    else {
        adminPassword = false
        return (
            <h1>An error occurred. Make sure you signUp.</h1>
        )
    }

}

export default PartyNames;