import React from 'react';
import axios from "axios"


const PartyBrands = (props) => {
    let adminPassword = sessionStorage.getItem("adminPassword");

    if (adminPassword === "yazish") {

        let partyBrandClicked = props.partyBrandClicked;
        let partyBrandNames = props.partyBrandNames

        let partyName = undefined;

        let partyId = window.location.pathname
        partyId = partyId.split("");
        partyId = partyId[partyId.length - 1];

        let list = null;
        let partyBrandsLength = undefined;

        if (partyBrandNames) {

            partyName = partyBrandNames[partyId].partyName

            list = props.partyBrandNames[partyId];
            partyBrandsLength = list.brands?.length;
            list = list.brands?.map((loop, index) => {
                return <a href={`/admin/${partyId}/${index}/products`} key={index}><li>{loop.brandName}</li></a>
            })
        }

        const addPartyBrandToTheDBHandler = () => {


            console.log(partyId)

            let brandName = sessionStorage.getItem("partyBrandName");
            let productName = sessionStorage.getItem("partyProductName");
            let price = sessionStorage.getItem("partyProductPrice");
            let quantity = sessionStorage.getItem("partyProductQuantity");
            let date = sessionStorage.getItem("partyProductDate");


            if (partyBrandNames) {
                axios.patch(`https://hirji-final-2-3699e-default-rtdb.firebaseio.com/admin/partName/${partyId}/brands.json`, {
                    [partyBrandsLength]: {
                        brandName: brandName,
                        products: [
                            {
                                name : productName,
                                price,
                                quantity,
                                date
                            }
                        ]
                    }
                }).then((res) => {
                    alert("Brand Added Successfully !");
                    window.location.reload();
                    sessionStorage.removeItem("partyBrandName");
                    sessionStorage.removeItem("partyProductName");
                    sessionStorage.removeItem("partyProductPrice");
                    sessionStorage.removeItem("partyProductQuantity");
                    sessionStorage.removeItem("partyProductDate");
                }).catch((err) => {
                    alert("An error occurred !")
                })
            }
        }

        return (
            <React.Fragment>
                <button className={`btn btn-primary m-3`} onClick={props.addPartyBrandHandler} >Add Brand</button>
                <span className={`m-2`}>Party : <b> {partyName} </b></span>
                <hr />

                {partyBrandClicked ?
                    <React.Fragment>
                        <form className="row g-3 needs-validation m-5" required="required">

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
                        <hr/>
                        <button className={`btn btn-light  ml-3`} onClick={props.addPartyBrandHandler}>X</button >
                        <button className={`btn btn-light  ml-3`} onClick={addPartyBrandToTheDBHandler}>Add Brand</button >
                    </React.Fragment>
                    : <ul>
                        {list}
                    </ul>}
            </React.Fragment>
        )
    } else {
        return (
            <h1>An error occurred. Make sure you signUp.</h1>
        )
    }

}

export default PartyBrands;