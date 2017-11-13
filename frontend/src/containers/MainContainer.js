import {connect} from 'react-redux';
import MainPage from '../components/MainPage';

const mapStateToProps = state => {
    return {
        submitted: state.submitted
    }
};

const MainContainer = connect(
    mapStateToProps,
    null // no mapDispatchToProps needed
)(MainPage);

export default MainContainer;
