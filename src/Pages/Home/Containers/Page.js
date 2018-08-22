import Page from "Pages/Home/Components/Page";
import { connect } from "react-redux";

// selectors
import * as counterSelectors from "Pages/Home/utils/selectors/counter";

// actions
import * as counterActions from "Pages/Home/utils/actions/counter";

const mapStateToProps = (state, props) => ({
  getCounter: counterSelectors.getCounter(state)
});

const mapDispatchToProps = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
