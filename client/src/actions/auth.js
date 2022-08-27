import * as api from "../api";
import {
    AUTH,
    LOGOUT
} from "../constants/actionTypes";

export const signin = (formdata, navigate) => async (dispatch) => {
    try {
        
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formdata, navigate) => async (dispatch) => {
    try {
        
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};