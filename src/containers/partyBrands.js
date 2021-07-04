import React from 'react';
import PartyBrands from '../components/js/admin/party/partyBrands';

const PartyBrandsContainer = (props) => {

    return (
        <PartyBrands addPartyBrandHandler={props.addPartyBrandHandler} partyBrandClicked={props.partyBrandClicked} partyBrandNames={props.partyBrandNames} />
    );
}
 
export default PartyBrandsContainer;