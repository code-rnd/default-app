import {connect} from 'react-redux'
import DefaultComponent from "../../components/DefaultComponent";
import {changeText} from '../../store/actions'

const mapStateToProps = state => ({
    currentText: state.content.text
})

const mapDispatchToProps = dispatch => ({
    handleChangeText: text => dispatch(changeText(text))
})

export const DefaultContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultComponent)