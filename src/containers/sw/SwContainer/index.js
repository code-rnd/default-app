import { connect } from "react-redux";
import {
  getPeople,
  getPlanets,
  getStarships
} from "../../../store/actions/sw/async";
import SwComponent from "../../../components/sw/SwComponent";

const mapStateToProps = state => ({
  people: state.sw.data.people,
  planets: state.sw.data.planets,
  starships: state.sw.data.starships,
  isFetching: state.sw.isFetching
});

const mapDispatchToProps = {
  getPeople,
  getPlanets,
  getStarships
};

export const SwContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SwComponent);
