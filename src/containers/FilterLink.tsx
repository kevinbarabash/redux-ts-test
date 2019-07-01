import { connect } from "react-redux";
import { setVisibilityFilter, VisibilityFilters, Action } from "../actions";
import Link from "../components/Link";
import { $Values } from "utility-types";
import { State } from "../reducers/index";

type OwnProps = {
  filter: $Values<typeof VisibilityFilters>;
  children: React.ReactNode;
};

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (
  dispatch: (action: Action) => unknown,
  ownProps: OwnProps
) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
