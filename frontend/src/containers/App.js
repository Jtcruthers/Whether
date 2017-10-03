import {connect} from 'react-redux';
import MainPage from '../components/MainPage';

const mapStateToProps = state => {
  return {
    submitted: state.submitted
  }
};

const App = connect(
  mapStateToProps,
  null // no mapDispatchToProps needed
)(MainPage);

export default App;
