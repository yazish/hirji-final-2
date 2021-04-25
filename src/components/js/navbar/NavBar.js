import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"


function NavBar() {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/details">HIRJI</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/products?page=1">Products <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar