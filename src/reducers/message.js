import * as Message from '../constants/Message'
import * as types from '../constants/ActionTypes'
let defaultState = Message.MSG_WELCOME;

const message = (state = defaultState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default:
            return state
    }
}

export default message;