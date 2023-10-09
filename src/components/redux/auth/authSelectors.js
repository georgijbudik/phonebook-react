export const selectUserEmail = state => state.auth.user.email;

export const selectIsLoggedin = state => state.auth.isLoggedIn;

export const selectIsFetching = state => state.auth.isFetching;

export const selectError = state => state.auth.error;
