import { connect } from "react-redux";
import CounterComponent from "../../../components/counter/CounterComponent";
import {
  incrementCounter,
  decrementCounter,
  incrementCounterAsync,
  decrementCounterAsync
} from "../../../store/actions/counter";

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  incrementCounterAsync,
  decrementCounterAsync
};

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
