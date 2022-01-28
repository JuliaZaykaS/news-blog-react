import { createSlice } from '@reduxjs/toolkit';
import news from '../../db/news.json'

const newsSlice = createSlice({
  name: 'news',

  initialState: {
    news: [],
    filteredNews: '',
    error: null,
    isLoading: false,
  },
  reducers: {
    getAllNews(state, action) {
      state.news = [...news]
    },
    getFilterNews(state, action){
      state.filteredNews = action.payload
    },
    addNews(state,action){
      state.news.push(action.payload)
    },
    deleteNews(state,action){
      state.news = state.news.filter(el => el.id !== action.payload)

    }
  },

});

export default newsSlice.reducer;
export const { getAllNews, getFilterNews, addNews, deleteNews } = newsSlice.actions;
