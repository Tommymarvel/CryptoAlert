/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import axios from 'axios';

const baseUrl = 'https://api.coincap.io/v2/assets';

export const pullData = createAsyncThunk(
  'details/getDetails',
  async (id) => {
    try {
      const response = axios(`${baseUrl}/${id}`);
      return response;
    } catch (error) {
      return error;
    }
  },
);

export const showData = createAsyncThunk('details/getData', async () => {
  try {
    const response = axios(`${baseUrl}`);
    return response;
  } catch (error) {
    return error;
  }
});

const initialState = {
  details: [],
  data: [],
  loading: 'idle',
};

export const homeSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(pullData.fulfilled, (state, action) => {
      state.details = action.payload.data.data;
      state.loading = 'fulfiled';
    });
    builder.addCase(showData.fulfilled, (state, action) => {
      state.data = action.payload.data.data;
      state.loading = 'fulfiled';
    });
  },
});

export default homeSlice.reducer;
