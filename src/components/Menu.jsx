import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const addBodyClass = () => {
    document.getElementById("mainBody").classList.add("mobile-view");
}

const Menu = () => {
       return  (
           <section className="menu-warpper">
               <div className="container-fluid">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-12">
                                
                                <Navbar expand="lg">
                                    <Navbar.Brand href="#home">
                                        <i className="fas fa-bars"></i>
                                        <a className="" href="#" onClick={(e) => addBodyClass(e)}>Browser Categories</a>
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto">
                                            <Nav.Link href="#" className="active">HOME</Nav.Link>
                                            <Nav.Link href="#">SHOP</Nav.Link>
                                            <Nav.Link href="#">BLOG</Nav.Link>
                                            <Nav.Link href="#">PAGES</Nav.Link>
                                            <Nav.Link href="#">CONTACT US</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
       )
}

export default Menu;