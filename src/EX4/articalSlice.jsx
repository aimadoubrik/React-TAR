import { createSlice } from '@reduxjs/toolkit';
import computer from '../assets/computer.jpg';
import OIP from '../assets/OIP.jpg';

const initialState = {
  articles: [
{ id: 10, designation: 'article1', famille: 'informatique', image: computer },
    { id: 11, designation: 'article2', famille: 'bureau', image: OIP },
  ],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    deleteArticle: (state, action) => {
      state.articles = state.articles.filter(article => article.id !== action.payload);
    },
    editArticle: (state, action) => {
      const index = state.articles.findIndex(article => article.id === action.payload.id);
      if (index !== -1) {
        state.articles[index] = action.payload;
      }
    },
  },
});

export const { addArticle, deleteArticle, editArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
