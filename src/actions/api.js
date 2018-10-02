import {API, GET_USERS_INFO} from './actionTypes';

/**
 *
 * @param payload {Object}
 */
export const callAPI = (payload) => ({
    type: API,
    payload
});

export const getUsersInfo = () => callAPI({
    url: 'https://randomuser.me/api/?nat=gb&results=5', //TODO: add parameters to request custom 'nat' and 'results'
    ...GET_USERS_INFO,
});
