import {connect} from 'react-redux';
import AppComponent from '../components/AppComponent';

const mapStateToProps = state => {
  return {
    submitted: state.submitted
  }
};

const App = connect(
  mapStateToProps,
  null // no mapDispatchToProps needed
)(AppComponent);

export default App;
