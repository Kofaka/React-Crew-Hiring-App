import {GET_USERS_INFO} from '../actions/actionTypes';

const usersMiddleware = (store) => next => action => {
    switch (action.type) {
        case GET_USERS_INFO.SUCCESS:
            next(action);
            break;

        default:
            next(action);
            break;
    }
};

export default usersMiddleware;