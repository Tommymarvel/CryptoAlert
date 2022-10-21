import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coinReducer from './details/details';

const store = configureStore({
  reducer: {
    details: coinReducer,
  },
}, applyMiddleware(thunk));

export default store;
