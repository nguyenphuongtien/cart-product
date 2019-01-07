import * as Messages from './../contants/Messages';
import * as types from './../contants/ActionTypes';



var initialState = Messages.MSG_WELLCOME;
const message = (state = initialState, action ) => {
    switch (action.type) {
        case types.CHANGE_MSG :
            return action.message;
        default :
            return [...state];
    }
};


export default message;