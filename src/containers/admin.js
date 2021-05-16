import React, { useState, useEffect } from 'react';
import BrandsOverview from "../components/js/admin/brands/BrandsOverview"

import AddBrand from "../components/js/admin/brands/BrandsAddForm"
import axios from "axios"

import Spinner from "./spinner"
import ProductsOverview from "../components/js/admin/products/productsOverview"

import AddProduct from "../components/js/admin/products/ProductsAddForm"
import ProductsDetails from "../components/js/admin/products/ProductsDetails"


function Admin(props) {
    const store = {
        data: null,
        addBrandButtonClicked: false,
        brandButtonClicked: false,
        isLoading: false,
        addProductButtonClicked: false,
        productsButtonClicked: false
    }


    let [fstate, fsetState] = useState(store)

    useEffect(() => {
        axios.get("https://hirji-final-2-3699e-default-rtdb.firebaseio.com/products.json")
            .then((value) => {
                console.log(value.data)
                fsetState({
                    ...fstate,
                    data: value.data
                })
            })
            .catch(err => console.log(err))
    }, [])

    function addBrandButtonClicked() {
        fsetState({
            ...fstate,
            addBrandButtonClicked: true
        })
    }

    function isLoadingTrue() {
        console.log("loading true")
        fsetState({
            ...fstate,
            isLoading: true
        })
        console.log(fstate.isLoading)
    }

    function isLoadingFalse() {
        console.log("loading false")
        fsetState({
            ...fstate,
            isLoading: false
        })
        console.log(fstate.isLoading)

    }

    function brandButtonClicked(index) {

        sessionStorage.setItem("brandId", index)

        fsetState({
            ...fstate,
            brandButtonClicked: true
        })
    }

    function addProductButton(event) {


        fsetState({
            ...fstate,
            addProductButtonClicked: true
        })
    }


    function productsButtonClicked(event, index) {
        sessionStorage.setItem("productId", index)
        console.log(fstate)
        fsetState({
            ...fstate,
            productsButtonClicked: true
        })
        console.log(fstate)
    }



    if (fstate.addBrandButtonClicked) {
        if (fstate.isLoading) {
            return <Spinner />
        } else {
            return <AddBrand isLoadingTrue={isLoadingTrue} isLoadingFalse={isLoadingFalse} data={fstate.isLoading} mainData={fstate.data}/>
        }
    } else {
        if (fstate.brandButtonClicked) {
            if (fstate.addProductButtonClicked) {
                if (fstate.isLoading) {
                    return <Spinner />
                } else {
                    return <AddProduct testData={fstate} data={fstate.data} isLoadingTrue={isLoadingTrue} isLoadingFalse={isLoadingFalse} />
                }
            } else {
                if (fstate.isLoading) {
                    return <Spinner />
                } else {
                    if (fstate.productsButtonClicked) {
                        return <ProductsDetails data={fstate.data} isLoadingTrue={isLoadingTrue} isLoadingFalse={isLoadingFalse} />
                    } else {
                        return <ProductsOverview data={fstate.data} addProductButton={(event, index) => addProductButton(event, index)} productsButtonClicked={productsButtonClicked} />
                    }
                }
            }
        } else {
            return <BrandsOverview data={fstate.data} addBrandButtonClicked={addBrandButtonClicked} brandButtonClicked={(index) => brandButtonClicked(index)} />
        }
    }

}


export default Admin