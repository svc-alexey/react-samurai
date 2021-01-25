export const authorizedIdSelector = (state) => {
    return state.auth.authorizedId
}
export const loginSelector = (state) => {
    return state.auth.login
}
export const isAuthorizedSelector = (state) => {
    return state.auth.isAuthorized
}
