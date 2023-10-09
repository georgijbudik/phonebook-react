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
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.error = action.payload;
      console.log(state.error);
    });

    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
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

export const authReducer = authSlice.reducer;
