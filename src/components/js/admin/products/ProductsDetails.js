import axios from 'axios';
import React, { useState } from 'react';
import { storage } from "../../../../firebase/index"


const ProductsDetails = (props) => {

    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)


    const productId = sessionStorage.getItem("productId");
    const brandId = sessionStorage.getItem("brandId");
    let imageId = undefined;
    let productName, productPrice, productQuantity, hsn, tax, shelfLife = undefined
    let brandName = undefined;
    let mainData = props.data;
    let productsData = undefined

    if (mainData) {
        productsData = mainData[brandId];
        brandName = Object.keys(productsData)[0];
        productsData = productsData[brandName];
        productsData = productsData[productId];

        productPrice = productsData.price[0];
        productName = productsData.name;
        productQuantity = productsData.quantity[0];
        hsn = productsData.hsn;
        shelfLife = productsData.shelfLife;
        tax = productsData.tax

        imageId = Array.isArray(productsData.images) ? productsData.images.length : 0
        console.log(imageId)
    }



    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }


    const handleFireBaseUpload = e => {
        if (mainData) {
            props.isLoadingTrue();
            e.preventDefault()

            let images = Array.isArray(productsData.images) ? productsData.images : [];
            images.push(`image-id-${imageId}`)
            console.log(images)

            axios.patch(`https://hirji-final-2-3699e-default-rtdb.firebaseio.com/products/${brandId}/${brandName}/${productId}.json`, { images })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })


            console.log('start of upload')
            // async magic goes here...
            if (imageAsFile === '') {
                console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
            }
            const uploadTask = storage.ref(`/brand-id-${brandId}/product-id-${productId}/image-id-${imageId}`).put(imageAsFile)
            //initiates the firebase side uploading 
            uploadTask.on('state_changed',
                (snapShot) => {
                    //takes a snap shot of the process as it is happening
                    console.log(snapShot)
                }, (err) => {
                    //catches the errors
                    console.log(err)
                }, () => {
                    // gets the functions from storage refences the image storage in firebase by the children
                    // gets the download url then sets the image from firebase as the value for the imgUrl key:
                    storage.ref('images').child(imageAsFile.name).getDownloadURL()
                        .then(fireBaseUrl => {
                            alert("Images Uploaded Successfully")
                            setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                            props.isLoadingFalse()
                        })
                        .catch(err => {
                            console.log(err)
                            props.isLoadingFalse()
                            alert("Product image added successfully !")
                        })
                })
        }
    }


    const divStyle = {
        backgroundColor: "aliceblue",
        maxHeight: "fitContent",
        maxWidth: "50%",
        borderRadius: "12px",
        margin: "20px",
        marginBottom: "50px"
    }
    return (
        <React.Fragment>
            <div style={divStyle}>
                <p className={`p-3`}>Name : {productName} </p>
                <p className={`p-3`}>Price : {productPrice}</p>
                <p className={`p-3`}>SKU :{productQuantity} </p>
                <p className={`p-3`}>HSN Code : {hsn}</p>
                <p className={`p-3`}>Tax : {tax}</p>
                <p className={`p-3`}>Shelf Life : {shelfLife}</p>
            </div>

            <form>
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

            <button className="btn btn-warning m-3 btn-lg" >Update</button>
            <button className="btn btn-danger m-3 btn-lg">Delete Product</button>

            <form className={`m-5`}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1" >Add an Image</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={handleImageAsFile} />
                </div>
                <button className={`btn btn-warning`} onClick={handleFireBaseUpload} >Add an Image</button>
            </form>

        </React.Fragment>
    );
}

export default ProductsDetails;