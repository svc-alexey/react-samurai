import {userApi} from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    totalUsersCount: 0,
    usersCount: 5,
    currentPage: 1,
    isFetching: false,
    isFollowing: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowing: action.isFollowing ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id != action.userId),
            }
        default:
            return state;
    }
}

export const setFollow = (userId) => ({type: FOLLOW, userId});
export const setUnfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const setPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const followingInProgress = (isFollowing, userId) => ({type: FOLLOWING_IN_PROGRESS, isFollowing, userId});


export const getUsers = (currentPage, usersCount) => (dispatch) => {
    dispatch(setIsFetching(true));
    userApi.getUsers(currentPage, usersCount).then(data => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    });
}


export const setCurrentPage = (page, usersCount) => (dispatch) => {
    dispatch(setPage(page));
    dispatch(setIsFetching(true));
    userApi.getUsers(page, usersCount).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setIsFetching(false));
    });
}

export const follow = (id) => (dispatch) => {
    dispatch(followingInProgress(true, id));
    userApi.getFollowId(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(setFollow(id));
        }
        dispatch(followingInProgress(false, id));
    });
}

export const unfollow = (id) => (dispatch) => {
    dispatch(followingInProgress(true, id));
    userApi.getUnfollowId(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(setUnfollow(id));
        }
        dispatch(followingInProgress(false, id));
    });
}

export default userReducer;