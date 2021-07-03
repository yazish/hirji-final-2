import { Button } from 'bootstrap';
import React from 'react';

const PartyNames = () => {

    let adminPassword = sessionStorage.getItem("adminPassword");

    if (adminPassword === "yazish") {
        adminPassword = true;
    } else {
        adminPassword = false
    }

    let error = <h1>An error occurred. Make sure you signUp.</h1>

    return (
        adminPassword ? <ul>
        <li>Yazish</li>
        <li>Armin</li>
        <li>Navroz</li>
    </ul>  : error
    );
}

export default PartyNames;