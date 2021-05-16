import React from 'react';
import BrandsLayout from "../components/js/brands/brands"


const Brands = (props) => {
    return ( 
        <BrandsLayout data={props.data}  />
    );
}
 
export default Brands;