import * as ActionTypes from './ActionTypes';

export const addUser = (userId, name, email, password) => ({
    type: ActionTypes.ADD_USER,
    payload: {
        userId: userId, 
        name:name, 
        email: email, 
        password:password
    }
});