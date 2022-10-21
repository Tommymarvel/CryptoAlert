/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.coincap.io/v2/assets';

export const pullData = createAsyncThunk(
  'details/getDetails',
  async () => {
    try {
      const response = axios.get(baseUrl);
      return response;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  details: [],
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
  },
});

export default homeSlice.reducer;

// const READ = 'READ';
// // const URL = 'https://api.coincap.io/v2/assets';

// const read = (id) => ({
//   type: READ,
//   payload: id,
// });

// const coinReducer = (state = [], action) => {
//   switch (action.type) {
//     case READ:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const pullData = () => async (dispatch) => {
//   await fetch('https://api.coincap.io/v2/assets')
//     .then((res) => res.json())
//     .then((coins) => {
//       const coinData = [];
//       Object.keys(coins).map((key) => {
//         coinData.push({
//           coinId: key.id,
//           coinName: key.name,
//           coinRank: key.rank,
//           coinSymbol: key.symbol,
//           coinSupply: key.supply,
//           coinMaxSupply: key.maxSupply,
//           coinMarketCapUsd: key.marketCapUsd,
//           coinVolumeUsd24Hr: key.volumeUsd24Hr,
//           coinPriceUsd: key.priceUsd,
//           coinChangePercent24Hr: key.changePercent24Hr,
//           coinVwap24Hr: key.vwap24Hr,
//           coinExplorer: key.explorer,
//         });
//         return coinData;
//       });
//       dispatch(read(coinData));
//     });
// };

// export default coinReducer;
