import React from 'react';
import TabContainer from 'react-bootstrap/TabContainer';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContent from 'react-bootstrap/TabContent';
import { Carousel, Col, Nav, Row, Button } from 'react-bootstrap';
import Menu from './Menu';
import menuImage from '../assets/img/img2.jpg';
import sliderImage from '../assets/img/slider.PNG';

const HomeSlider = () => {

    const megaMenuToggle = (e) => {
        let id = document.getElementById(e);
        if(id.className.indexOf('show') > -1){
            id.classList.remove("show");
            id.classList.remove("active");
            document.getElementById(e).setAttribute('aria-hidden', 'true');
            localStorage.setItem('showMenuId', e);
        }else{
            id.classList.add("show");
            id.classList.add("active");
            document.getElementById(e).setAttribute('aria-hidden', 'false');
            localStorage.setItem('showMenuId', e);
        }
    }

    const megaMenuClose = () => {
        let id = document.getElementById(localStorage.getItem('showMenuId'));
        if(id){
            id.classList.remove("show");
            id.classList.remove("active");
            id.setAttribute('aria-hidden', 'true');
        }
        document.getElementById("mainBody").classList.remove("mobile-view");
        console.log('id', id);
    }


    return(
        <div className="container mega-menu-wrapper">
            <div className="row">
                <Tab.Container id="tabs" active="false">
                    <aside className="col-md-3">
                        <Nav className="flex-column list-group">
                            <Nav.Item>
                                <Nav.Link eventKey="first" onClick={(e) => megaMenuToggle('tabs-tabpane-first')} className="d-flex align-items-center justify-content-between">
                                    <span id="first">Brake Parts</span>
                                    <i className="fas fa-chevron-right"></i>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" onClick={(e) => megaMenuToggle('tabs-tabpane-second')} className="d-flex align-items-center justify-content-between">
                                    <span>Wheels & Tires</span>
                                    <i className="fas fa-chevron-right"></i>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" onClick={(e) => megaMenuToggle('tabs-tabpane-third')} className="d-flex align-items-center justify-content-between">
                                    <span>Furnitured & Decor</span>
                                    <i className="fas fa-chevron-right"></i>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="forth" onClick={(e) => megaMenuToggle('tabs-tabpane-forth')} className="d-flex align-items-center justify-content-between">
                                    <span>Turbo System</span>
                                    <i className="fas fa-chevron-right"></i>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth" className="d-flex align-items-center justify-content-between">
                                    <span>Cras justo odio</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sixth" onClick={(e) => megaMenuToggle('tabs-tabpane-sixth')} className="d-flex align-items-center justify-content-between">
                                    <span>Accessories</span>
                                    <i className="fas fa-chevron-right"></i>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="seven" onClick={(e) => megaMenuToggle('tabs-tabpane-seven')} className="d-flex align-items-center justify-content-between">
                                    <span>Body Parts</span>
                                    <i className="fas fa-chevron-right"></i>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="eight" onClick={(e) => megaMenuToggle('tabs-tabpane-eight')} className="d-flex align-items-center justify-content-between">
                                    <span>Perfomance Filters</span>
                                    <i className="fas fa-chevron-right"></i>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="nineth" onClick={(e) => megaMenuToggle('tabs-tabpane-nineth')} className="d-flex align-items-center justify-content-between">
                                    <span>Engine Parts</span>
                                    <i className="fas fa-chevron-right"></i>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <span id="mobileMenuClose" onClick={(e) => megaMenuClose(e)} ><i className="fa fa-times"></i></span>
                    </aside>
                    <Col md={9} sm={12} xs={12}>
                        <div className="position-relative">
                            <Tab.Content className="h-100 w-75">
                                <Tab.Pane eventKey="first" className="h-100 border">
                                    <Row className="p-3 submenu">
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Laptops, Desktops</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers </Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computerss</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className="h-100 border">
                                    <Row className="p-3 submenu">
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Laptops, Desktops</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers </Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computerss</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className="h-100 border">
                                    <Row className="p-3 submenu">
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Laptops, Desktops</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers </Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computerss</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="forth" className="h-100 border">
                                    <Row className="p-3 submenu">
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Laptops, Desktops</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers </Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computerss</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth" className="h-100 border">
                                    <Row className="p-3 submenu">
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Laptops, Desktops</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers </Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computerss</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven" className="h-100 border">
                                    <Row className="p-3 submenu">
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Laptops, Desktops</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers </Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computerss</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eight" className="h-100 border">
                                    <Row className="p-3 submenu">
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Laptops, Desktops</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers </Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computerss</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="nineth" className="h-100 border">
                                    <Row className="p-3 submenu">
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Laptops, Desktops</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers </Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            <h5 className="title">Heading</h5>
                                            <Nav className="flex-column">
                                                <Nav.Link href="#" className="px-0">All Computerss</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Printers</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Networking</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Computer Accessories</Nav.Link>
                                                <Nav.Link href="#" className="px-0">Software</Nav.Link>
                                            </Nav>
                                        </Col>
                                        <Col md={4}>
                                            
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={sliderImage}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <span className="product-name">Clothing</span>    
                                    <h3 className="main-title">Up to 20% Off <br/>Speakers</h3>
                                    <p className="sort-msg">The Best Gadgets Collection 2021</p>
                                    <div className="d-flex align-items-center justify-content-start price">
                                        <span className="mr-2">$430.00</span>
                                        <h5 className="mb-0 text-danger">$350.00</h5>
                                    </div>
                                    <Button variant="primary" className="mt-4">Start Buying</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={sliderImage}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <span className="product-name">Clothing</span>    
                                    <h3 className="main-title">Up to 20% Off <br/>Speakers</h3>
                                    <p className="sort-msg">The Best Gadgets Collection 2021</p>
                                    <div className="d-flex align-items-center justify-content-start price">
                                        <span className="mr-2">$430.00</span>
                                        <h5 className="mb-0 text-danger">$350.00</h5>
                                    </div>
                                    <Button variant="primary" className="mt-4">Start Buying</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={sliderImage}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <span className="product-name">Clothing</span>    
                                    <h3 className="main-title">Up to 20% Off <br/>Speakers</h3>
                                    <p className="sort-msg">The Best Gadgets Collection 2021</p>
                                    <div className="d-flex align-items-center justify-content-start price">
                                        <span className="mr-2">$430.00</span>
                                        <h5 className="mb-0 text-danger">$350.00</h5>
                                    </div>
                                    <Button variant="primary" className="mt-4">Start Buying</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Tab.Container>
            </div>
        </div>
    );
}

export default HomeSlider;