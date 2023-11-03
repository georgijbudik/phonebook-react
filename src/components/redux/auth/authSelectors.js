export const selectUserName = state => state.auth.user.name;

export const selectIsLoggedin = state => state.auth.isLoggedIn;

export const selectIsFetching = state => state.auth.isFetching;

export const selectError = state => state.auth.error;

export const selectIsRememberedMe = state => state.auth.isRememberedMe;
