import axios from 'axios';
import React, { useState } from 'react';
import { storage } from "../../../../firebase/index"

const AddProduct = (props) => {

    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    let mainData = props.data
    let brandId = sessionStorage.getItem("brandId");

    let productData = null
    let brandName = null

    if (mainData) {
        productData = mainData[brandId];
        brandName = Object.keys(productData)[0];
        productData = productData[brandName]
    }


    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }



    const handleFireBaseUpload = e => {
        if (mainData) {
            props.isLoadingTrue()
            e.preventDefault()
            console.log('start of upload')
            // async magic goes here...
            if (imageAsFile === '') {
                console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
            }
            const uploadTask = storage.ref(`/brand-id-${brandId}/product-id-${productData.length}/image-id-0`).put(imageAsFile)
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
                        })
                        .catch(err => {
                            props.isLoadingFalse();
                        })
                })
        }
    }




    function addProductButton() {

        if (mainData) {

            props.isLoadingTrue()

            let productName = sessionStorage.getItem("productName")
            let mrp = sessionStorage.getItem("MRP")
            let quantity = sessionStorage.getItem("quantity")
            let shelfLife = sessionStorage.getItem("shelfLife")
            let tax = sessionStorage.getItem("tax")
            let hsn = sessionStorage.getItem("hsn")

            let postData = {
                name: productName,
                price: [mrp] ,
                quantity :[quantity],
                shelfLife,
                tax,
                hsn,
            }
            console.log(props.testData)

            axios.patch(`https://hirji-final-2-3699e-default-rtdb.firebaseio.com/products/${brandId}/${brandName}.json`, { [productData?.length]: postData })
                .then((res) => {
                    props.isLoadingFalse()
                    console.log(res)
                    console.log(props.testData)
                    alert("Product Added Successfuly")
                })
                .catch((err) => {
                    console.log(err)
                    props.isLoadingFalse()
                    alert("Sorry an error occured")
                })
        }
    }


    return (
        <React.Fragment>
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

            <button className={`btn btn-warning m-3 btn-lg`} onClick={addProductButton} >Add Product</button>

            <form className={`m-5`}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Add an Image</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={handleImageAsFile} />
                </div>
                <button className={`btn btn-danger`} onClick={handleFireBaseUpload}>Add an Image</button>
            </form>
        </React.Fragment>
    );
}

export default AddProduct;