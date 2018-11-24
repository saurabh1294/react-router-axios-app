import { connect } from 'react-redux';
import { fetAllFAQS } from '../actions/actions';
import Home from '../components/Home';

const mapDispatchToProps = dispatch => {
  return {
    onFetchFAQList: () => {
        console.log("onFetchFAQList() called");
      dispatch(fetAllFAQS());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);