import React, {Component} from 'react';
import Header from './Header';
import MainContainer from '../containers/MainContainer';
import AboutPage from './AboutPage';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class AppComponent extends Component {

    render() {
        return (
            <div className="Whether">
                <Router>
                    <div>
                        <Header />
                        <div className="app">
                            <Route exact path="/" component={MainContainer}/>
                            <Route path="/about" component={AboutPage}/>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }

}

export default AppComponent;