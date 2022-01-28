import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../../components/Filter/Filter';
import { List } from '../../components/List/List';
import Section from '../../components/Section/Section';
// import news from '../../db/news.json'
import { getAllNews, getFilterNews } from '../../redux/news/news-slice';
import { getNews, getFilteredNews, getFilter } from '../../redux/news/news-selectors';

export const NewsPage = () => {
  const news = useSelector(getFilteredNews);
  const filteredNews = useSelector(getFilter);
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const findTitle =(e)=>{
    dispatch(getFilterNews(e.target.value));
  }

  return (
    <Section title="Новости">
      <Filter value={filteredNews} onFindName={findTitle}></Filter>
      <List news={news}></List>
    </Section>
  );
};
