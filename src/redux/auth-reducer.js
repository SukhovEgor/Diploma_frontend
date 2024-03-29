import { authAPI } from "../api/api";

const SET_USER = 'SET_USER';
const SET_USERS = 'SET_USERS';

let initialState = {
    user: {
        name: localStorage.getItem('user'),
        token: localStorage.getItem('token'),
        id: localStorage.getItem('userId'),
        post: localStorage.getItem('post')
    },
    users: [{ name: null, login: null, post: null }]
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

export const setUser = (user) => (
    { type: SET_USER, user }
)

export const getUser = (values) => {
    return async (dispatch) => {
        let response = await authAPI.auth(values);
        if (response.status == 200 && response.data != null) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.name);
            localStorage.setItem("userId", response.data.id);
            localStorage.setItem("post", response.data.post);
            dispatch(setUser(response.data));
        }
        if (response.status == 400) {
            throw "Указаны неверные имя пользователя или пароль"
        }
    }
}

export const setUsers = (users) => (
    { type: SET_USERS, users }
)
export const getUsers = () => {
    return async (dispatch) => {
        let response = await authAPI.getUsers();
        dispatch(setUsers(response.data));
    }
}

export const createUser = (user) => {
    return async (dispatch) => {
        await authAPI.createUser(user);
        let response = await authAPI.getUsers();
        dispatch(setUsers(response.data));
    }
}

export const whoAmI = () => {
    return async (dispatch) => {
        let response = await authAPI.whoAmI();
        if (response.status == 200) {
            dispatch(setUser(response.data));
        }
    }
}

export const deleteUserById = (id) => {
    return async (dispatch) => {
        await authAPI.deleteUserById(id);
        let response = await authAPI.getUsers();
        dispatch(setUsers(response.data));
    }
}

export default authReducer;