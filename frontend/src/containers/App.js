import {connect} from 'react-redux';
import MainContainer from '../components/MainPage';

const mapStateToProps = state => {
  return {
    submitted: state.submitted
  }
};

const App = connect(
  mapStateToProps,
  null // no mapDispatchToProps needed
)(MainContainer);

export default App;
