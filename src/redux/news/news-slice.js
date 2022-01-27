import { createSlice } from '@reduxjs/toolkit';
import { getAllNews, addNews, approveNews, deleteNews } from './news-operations';

const newsSlice = createSlice({
  name: 'news',

  initialState: {
    news: [],
    error: null,
    isLoading: false,

  },
  extraReducers: {
    [getAllNews.pending](state, action) {
      state.error = null;
      state.isLoading = true;
    },
    [getAllNews.fulfilled](state, action) {
      state.news = action.payload;
      state.isLoading = false;
    },
    [getAllNews.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [addNews.pending](state, action) {
        state.isLoading = true;
        state.error = null;
    },
    [addNews.fulfilled](state, action) {
        state.news = [...state, action.payload]
      state.isLoading = false;
    },
    [addNews.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [approveNews.pending](state, action) {
        state.error = null;
        state.isLoading = true;

    },
    [approveNews.fulfilled](state, action) {
        state.news =[action.payload, ...state.filter(({_id}) => _id!==action.payload._id)]
    },
    [approveNews.rejected](state, action) {
        state.error = action.payload;
        state.isLoading = false;
    },
    [deleteNews.pending](state, action) {
        state.error = null;
      state.isLoading = true;
    },
    [deleteNews.fulfilled](state, action) {
        state.news =  state.filter(contact => contact._id !== action.payload)

    },
    [deleteNews.rejected](state, action) {
        state.error = action.payload;
        state.isLoading = false;
    },
  },
});

export default newsSlice.reducer;