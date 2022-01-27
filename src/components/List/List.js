import React from 'react';
import { ListItem } from '../ListItem/ListItem';

export const List = ({news}) => {
  return <ul>
      {news.map(el=><ListItem key={el.id} item={el}></ListItem>)

      }
  </ul>;
};
