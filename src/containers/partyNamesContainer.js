import React from 'react';
import PartyNames from '../components/js/admin/party/partyName';

const PartyNameContainer = (props) => {
    return (
        <PartyNames addPartyClicked={props.addPartyClicked} data={props.data} addPartyHandler={props.addPartyHandler} partyNamesData={props.partyNamesData} />
    );
}
 
export default PartyNameContainer;