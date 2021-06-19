import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from '../assets/img/logo.PNG';

const Header = () => {
    return (
        <div>
            <section className="topbar-wrapper">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-md-flex align-items-center justify-content-between flex-md-wrap">
                                    <div className="left-dropdown">
                                        <div className="btn-group">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    English
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">English</Dropdown.Item>
                                                    <Dropdown.Item href="#">Japanies</Dropdown.Item>
                                                    <Dropdown.Item href="#">Chines</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <div className="horizental-line"></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    Currency: USD
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Currency: USD</Dropdown.Item>
                                                    <Dropdown.Item href="#">Currency: Pound</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="right-mobile">
                                        <div className="d-flex align-items">
                                            <div className="horizental-line"></div>
                                            <span className="title">Call us toll free: </span>
                                            <span className="mobileName">+1888 234 5678</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-3 logo-part">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12"> 
                            <div className="d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap">
                                <div className="logo mb-3">
                                    <img src={logo} className="img-fluid" />
                                </div>  
                                <div className="search-wrapper bg-gray mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend d-flex align-items-center">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    All Categories
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="py-0">
                                                    <Dropdown.Item href="#">All Categories</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Search Products..." />
                                        <div className="horizental-line"></div>
                                        <div className="input-group-append">
                                            <button className="btn btn-icon btn-sm btn-warning btn-search" type="button">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart-wrapper mb-3">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <div className="cart-btn">
                                            <i className="fas fa-shopping-cart"></i>
                                            <span className="count">3</span>
                                        </div>
                                        <span className="ammount">$&nbsp;909.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
  
  export default Header;    