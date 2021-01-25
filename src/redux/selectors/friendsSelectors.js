export const usersSelector = (state) => {
    return state.usersPage.users
}
export const totalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}
export const usersCountSelector = (state) => {
    return state.usersPage.usersCount
}
export const currentPageSelector = (state) => {
    return state.usersPage.currentPage
}
export const isFetchingSelector = (state) => {
    return state.usersPage.isFetching
}
export const isFollowingSelector = (state) => {
    return state.usersPage.isFollowing
}