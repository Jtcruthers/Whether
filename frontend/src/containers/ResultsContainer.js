import {connect} from 'react-redux';
import ResultsPage from '../components/ResultsPage';
import {toggleSubmitted} from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    toggleSubmitted: () => {
      dispatch(toggleSubmitted())
    }
  }
};

const ResultsContainer = connect(
  null, // No mapStateToProps needed
  mapDispatchToProps
)(ResultsPage);

export default ResultsContainer;
