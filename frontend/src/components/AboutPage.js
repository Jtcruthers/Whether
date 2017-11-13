import React, {Component} from 'react';
import styles from '../css/AboutPage.css';

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
                <ul>
                    <div className="FAQ">
                        <li className="question">Does this plan ahead or give you current information?</li>
                        <li className="answer">At this point, it only gives current weather. The first thing will be to add AI
                            so Whether will give you the best time to travel over a certain range.</li>
                    </div>
                    <div className="FAQ">
                        <li className="question">When will this be completed?</li>
                        <li className="answer">In December 2017.</li>
                    </div>
                </ul>
            </div>
        )
    }

}

export default AboutPage;