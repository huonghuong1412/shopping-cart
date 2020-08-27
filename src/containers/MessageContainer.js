import React from 'react'
import Message from '../components/Message'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class MessageContainer extends React.Component {
    render() {
        var { message } = this.props;
        return (
            <>
                <Message message={message} />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (message) => {
            dispatch(actions.changeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);