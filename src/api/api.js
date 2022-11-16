import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '0b29589f-8109-4348-9a6d-bb3bdfa01b66'},
});

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },
}

export const unfollowAPI = {
    unfollow(u) {
        return instance.delete(`follow/${u.id}`)
            .then(response => {
                return response.data
            })
    },
}

export const followAPI = {
    follow(u) {
        return instance.post(`follow/${u.id}`, {},)
            .then(response => {
                return response.data
            })
    },
}

export const authMeAPI = {
    getAuthMe() {
        return instance.get(`auth/me`,)
            .then(response => {
                return response.data
            })
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
}

// export const getPage = (pageNumber,pageSize) => {
//     return (
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
//             {withCredentials: true})
//     )
// }

