export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getUserToken = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsCurrentUser = state => state.auth.isGetCurrentUser;
export const getError = state => state.auth.error;
export const getIsLoading = state => state.auth.isLoading;