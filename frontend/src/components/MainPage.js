import React, {Component} from 'react';
import Header from './Header';
import HomeContainer from '../containers/HomeContainer';
import ResultsContainer from '../containers/ResultsContainer';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {submitted: props.submitted}; // Component state, not app state
    this.renderConditionalComponent = this.renderConditionalComponent.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({submitted: props.submitted}); // This will update your component.
  }

  render() {
    return (
      <div>
        {this.renderConditionalComponent()}
      </div>
    )
  }

  renderConditionalComponent() { // Gotta be a better way to do this
    if (!this.state.submitted) {
      return (
        <div className="MainContainer">
          <Header/>
          <HomeContainer/>
        </div>
      )
    } else {
      return (
        <div className="MainContainer">
          <Header/>
          <ResultsContainer/>
        </div>
      )
    }
  }

}

export default MainPage;