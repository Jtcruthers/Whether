import React from 'react';
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
            </div>
        )
    }

};

export default Directions;
