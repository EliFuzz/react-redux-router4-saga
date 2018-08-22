import Page from "Pages/AboutUs/Components/Page";
import { connect } from "react-redux";

// selectors
import * as titleSelectors from "Pages/AboutUs/utils/selectors/title";

// actions
import * as titleActions from "Pages/AboutUs/utils/actions/title";

const mapStateToProps = (state, props) => ({
  getTitle: titleSelectors.getTitle(state)
});

const mapDispatchToProps = {
    fetchTitle: titleActions.fetchTitle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
