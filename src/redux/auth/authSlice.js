import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, signUp } from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isFetching: false,
  isRememberedMe: false,
  error: null,
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isFetching = false;
};

const handlePending = (state, action) => {
  state.isFetching = true;
};

const handleRejected = (state, action) => {
  state.isFetching = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeRememberMe: (state, action) => {
      state.isRememberedMe = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.rejected, handleRejected);

    builder.addCase(signUp.fulfilled, handleFulfilled);

    builder.addCase(signUp.pending, handlePending);

    builder.addCase(logIn.fulfilled, handleFulfilled);
    builder.addCase(logIn.pending, handlePending);

    builder.addCase(logIn.rejected, handleRejected);

    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(fetchCurrentUser.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetching = false;
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      state.isFetching = false;
    });
  },
});
export const { changeRememberMe } = authSlice.actions;

export const authReducer = authSlice.reducer;
