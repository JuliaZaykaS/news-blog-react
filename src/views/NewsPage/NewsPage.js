import React from 'react';
import { Filter } from '../../components/Filter/Filter';
import { List } from '../../components/List/List';
import Section from '../../components/Section/Section';
import news from '../../db/news.json'


export const NewsPage = () => {
  return <Section title='Новости'>
      <Filter></Filter>
<List news={news}></List>
  </Section>;
};
