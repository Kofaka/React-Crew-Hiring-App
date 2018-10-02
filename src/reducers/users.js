import {GET_USERS_INFO} from '../actions/actionTypes';

const initialState = {
    usersInfo: [],
    pending: false,
};

function users(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_INFO.PENDING:
            return {
                ...state,
                pending: true,
            };

        case GET_USERS_INFO.SUCCESS:
            return {
                ...state,
                usersInfo: action.payload.results,
                pending: false,
            };

        case GET_USERS_INFO.FAILURE:
            return {
                ...state,
                pending: false,
            };

        default:
            return state;
    }

}

export default users;
