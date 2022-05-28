import React from 'react';
import { Link } from "react-router-dom";

import './navBar.css'

const NavBar=()=>{
    return(
        <nav className="navbar sticky-top navbar-expand-lg bg-light py-4">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand " >Home</Link>
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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More..
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" >Action</a></li>
                  <li><a className="dropdown-item" >Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" >Something else here</a></li>
                </ul>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">Register here</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;
