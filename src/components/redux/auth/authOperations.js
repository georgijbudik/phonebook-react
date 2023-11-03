import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      window.localStorage.setItem('token', JSON.stringify(data.token));
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { getState, rejectWithValue }) => {
    const state = getState();
    const isRememberedMe = state.auth.isRememberedMe;

    try {
      const { data } = await axios.post('/users/login', credentials);
      if (isRememberedMe) {
        window.localStorage.setItem('token', JSON.stringify(data.token));
      }
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      window.localStorage.removeItem('token');
      const { data } = await axios.post('/users/logout');
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    // const state = getState();
    // const persistedToken = state.auth.token;
    const persistedToken = window.localStorage.getItem('token');
    const result = persistedToken.slice(1, -1);
    if (persistedToken === null) {
      return rejectWithValue();
    }
    token.set(result);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
