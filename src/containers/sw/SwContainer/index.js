import { connect } from "react-redux";
import { getHero } from "../../../store/actions/sw/async";
import SwComponent from "../../../components/sw/SwComponent";

const mapStateToProps = state => ({
  hero: state.sw.data.hero,
  isFetching: state.sw.isFetching
});

const mapDispatchToProps = {
  getHero
};

export const SwContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwComponent);
