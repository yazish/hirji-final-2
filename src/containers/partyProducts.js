import React from 'react';
import PartyProducts from '../components/js/admin/party/partyProducts';

const PartyProductsContainer = (props) => {
    return (
        <PartyProducts addPartyProductClicked={props.addPartyProductClicked} addPartyProductHandler={props.addPartyProductHandler} partyProductsData={props.partyProductsData} />
    );
}
 
export default PartyProductsContainer;