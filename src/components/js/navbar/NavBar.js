import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../../../assets/sheroadin-delights-logo.jpeg"
import { Link } from "react-router-dom"
import  classes  from '../../css/navbar/navbar.module.css';

function NavBar() {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <img src={logo}  alt="..." className={classes.logo}/>
                <div className="navbar-nav ml-auto">
                    <Link className="nav-item nav-link active" to="#">Contact Us</Link>
                    <Link className="nav-item nav-link active" to="#">About Us</Link>
                </div>
        </nav>
    )
}

export default NavBar