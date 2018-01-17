import {connect} from 'react-redux';
import ResultsPage from '../components/ResultsPage';
import {toggleSubmitted, fetchPostsSuccess} from "../actions";

const mapStateToProps = state => {
  return {
    origin: state.locations.origin,
    destination: state.locations.destination,
    cities: state.api.cities,
    directions: state.api.directions,
    fetched: state.api.fetched
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
  mapStateToProps,
  mapDispatchToProps
)(ResultsPage);

export default ResultsContainer;
