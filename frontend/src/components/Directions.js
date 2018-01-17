import React from 'react';
import axios from 'axios';
import ToggleButton from '../components/ToggleButton';
import ResultsTable from './ResultsTable';
import '../css/ResultsPage.css';


class Directions extends React.Component {

    componentDidMount() {

    }

    componentWillReceiveProps(props) {
        this.setState({ directions: props.directions }); 
    }

    render() {

        return (
            <div className="Directions">
                <ResultsTable directions={this.props.directions} />
                <ToggleButton text="Back" onClick={this.props.toggleSubmitted} />
            </div>
        )
    }

};

export default Directions;
