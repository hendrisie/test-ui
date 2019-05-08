import selectors from '../selectors';
import { connect } from 'react-redux';
import component from '../components/Result';

const mapStateToProps = (state) => {
  return {
    result: selectors.getResult(state),
    leftover: selectors.getLeftover(state),
  };
};

const Result = connect(
  mapStateToProps,
  null,
)(component);

export default Result;