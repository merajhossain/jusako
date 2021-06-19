import React from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Main = () => {
    return (
        <div>
            <Header />
            <Menu />
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </Router>
            <Footer />
        </div>

    );
  }
  
  export default Main;