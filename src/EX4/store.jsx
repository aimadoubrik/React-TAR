import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articalSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export default store;

