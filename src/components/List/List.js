import React from 'react';
import { ListItem } from '../ListItem/ListItem';

export const List = ({ news, onBtnApproveClick, onBtnDeleteClick }) => {
  return (
    <ul>
      {news.map(el => (
        <ListItem
          key={el.id}
          item={el}
          onBtnApproveClick={onBtnApproveClick}
          onBtnDeleteClick={onBtnDeleteClick}
        ></ListItem>
      ))}
    </ul>
  );
};
