import {
    ADD_PHONE,
    DELETE_PHONE,
    GET_PHONE
} from "../actions/types.js";

const initialState = {
    phonedir: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case ADD_PHONE:
        return {
            ...state,
            phonedir: state.phonedir.concat(action.payload)
        }
        case DELETE_PHONE:
        return {
            ...state,
            phonedir: state.phonedir.filter((el,idx) => idx !== action.payload)
        }
        case GET_PHONE:
        return {
            ...state,
            phonedir: action.payload
        }
        default:
            return state;
    }
}

