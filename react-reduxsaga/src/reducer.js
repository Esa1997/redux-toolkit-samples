import { GET_USERS_SUCCESS } from "./actions";

export const increaseCount = () => ({
    type: 'INCREASE_COUNT'
});

export const userReducer = (state = { users: []}, action) => {
    switch(action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state, users: action.users
            }
        default:
            return state;
    };
};

const myFirstReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREASE_COUNT':
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    };
};

export default myFirstReducer;