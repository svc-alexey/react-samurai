import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {"API-KEY": "f7e606a6-243a-4fbb-b19e-43028ca08e1f"}
    }
);

export const userApi = {
    getUsers(currentPage = 1, usersCount = 5) {
        return instance.get(`users?page=${currentPage}&count=${usersCount}`).then(response => {
            return response.data
        });
    },

    getFollowId(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        })
    },

    getUnfollowId(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    },
}

export const profileApi = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data;
        })
    },
    getUserProfileStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => {
            return response.data;
        })
    },
    updateUserProfileStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
            return response.data;
        })
    },
    logout(email, password, rememberMe = false) {
        return instance.delete(`auth/login`);
    }
}
