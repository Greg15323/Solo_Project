import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = () => {FormData, history} async (dispatch) => {
    try {
        // log in the user..

        history.pushState('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = () => {FormData, history} async (dispatch) => {
    try {
        // sign up the user..

        history.pushState('/');
    } catch (error) {
        console.log(error);
    }
};