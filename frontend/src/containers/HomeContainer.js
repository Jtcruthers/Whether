import {connect} from 'react-redux';
import HomePage from '../components/HomePage';
import {toggleSubmitted, editOrigin, editDestination } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    toggleSubmitted: () => {
      dispatch(toggleSubmitted())
    },
    editOrigin: (e) => {
      dispatch(editOrigin(e.target.value))
    },
    editDestination: (e) => {
      dispatch(editDestination(e.target.value))
    }
  }
};

const HomeContainer = connect(
  null, // No mapStateToProps needed
  mapDispatchToProps
)(HomePage);

export default HomeContainer;
