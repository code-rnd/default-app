import { connect } from "react-redux";
import DefaultComponent from "../../../components/default/DefaultComponent";
import { changeText } from "../../../store/actions/default";

const mapStateToProps = state => ({
  currentText: state.content.text
});

const mapDispatchToProps = {
  changeText
};

// const mapDispatchToProps = dispatch => ({
//   handleChangeText: text => dispatch(changeText(text))
// });

export const DefaultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultComponent);
