import {connect} from 'react-redux';
import ResultsPage from '../components/ResultsPage';
import {toggleSubmitted, fetchPostsSuccess} from "../actions";

const mapStateToProps = state => {
  return {
    origin: state.locations.origin,
    destination: state.locations.destinationg
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleSubmitted: () => {
      dispatch(toggleSubmitted());
    },
    fetchPostsSuccess: payload => {
      dispatch(fetchPostsSuccess(payload));
    }
  }
};

const ResultsContainer = connect(
  null, // No mapStateToProps needed
  mapDispatchToProps
)(ResultsPage);

export default ResultsContainer;
