import { createSelector } from '@reduxjs/toolkit';

export const getNews = state => state.news.news;
export const getFilter = state => state.news.filteredNews;

export const getFilteredNews = createSelector(
    [getNews, getFilter],
    (news, filteredNews) => {
      const normalizedFilteredTitle = filteredNews.toLowerCase();

      return news.filter(el =>{
        return el.title.toLowerCase().includes(normalizedFilteredTitle)
      });
    },
  );
export const getApprovedNews = createSelector(
    [getNews, getFilter],
    (news, filteredNews) => {
      const normalizedFilteredTitle = filteredNews.toLowerCase();

      return news.filter(el =>{
        return (el.title.toLowerCase().includes(normalizedFilteredTitle) && el.approved === true)
      });
    },
  );

