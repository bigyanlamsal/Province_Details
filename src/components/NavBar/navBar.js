import React from 'react';
import { Link } from "react-router-dom";

import './navBar.css'

const NavBar=()=>{
    return(
        <nav className="navbar sticky-top navbar-expand-lg bg-light py-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand " >Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/kathmandu"className="nav-link active" aria-current="page" >Kathmandu</Link>
              </li>
              <li className="nav-item">
                <Link to="/bhaktapur" className="nav-link" >Bhaktapur</Link>
              </li>
              <li className="nav-item">
                <Link to="/ilam" className="nav-link" >Illam</Link>
              </li>
              <li className="nav-item">
                <Link to="/sikkim" className="nav-link" >Sikkim</Link>
              </li>


            </ul>
            <form className="d-flex" role="search">
              <Link to="/register" className="btn btn-outline-success" type="submit">Register here</Link>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;
