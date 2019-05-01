import {
    ADD_PHONE,
    DELETE_PHONE,
    GET_PHONE
} from "../actions/types.js";

export const addPhone = (data) => dispatch => {
    let phonedir = JSON.parse(localStorage['phonedir']);
    phonedir.push(data);
    localStorage.setItem('phonedir', JSON.stringify(phonedir));
    dispatch({
        type: ADD_PHONE,
        payload: data,
    });
}

export const deletePhone = (idx) => dispatch => {
    let phonedir = JSON.parse(localStorage['phonedir']);
    phonedir = phonedir.filter((el,index) => index !== idx)
    localStorage.setItem('phonedir', JSON.stringify(phonedir));
    dispatch({
        type: DELETE_PHONE,
        payload: idx,
    });
}

export const getPhoneDir = () => dispatch => {
    dispatch({
        type: GET_PHONE,
        payload: JSON.parse(localStorage.getItem('phonedir')),
    });
}