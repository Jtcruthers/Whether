import React, { Component } from 'react';
import FAQ from './FAQ';
import '../css/AboutPage.css';

class AboutPage extends Component {


    render() {
        return (
            <div className="AboutPage">
                <h1>About Whether</h1>
                <p>During a roadtrip, it's hard to plan ahead for the weather along the whole path. Whether aims
                    to solve this. Whether will give you the route to your destination along with the weather in
                    each city you pass through. There won't be anymore surprise storms causing traffic nightmares
                </p>
                <h1>FAQs</h1>
                <FAQ />
            </div>
        )
    }

}

export default AboutPage;