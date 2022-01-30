import React from 'react';
import { ListItem } from '../ListItem/ListItem';
import './List.scss';

export const List = ({ news, onBtnApproveClick, onBtnDeleteClick }) => {
  return (
    <ul className='list'>
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
