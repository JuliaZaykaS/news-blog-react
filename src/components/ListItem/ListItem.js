import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { getUserType } from '../../redux/auth/auth-selectors';
import './ListItem.scss'

export const ListItem = ({ item, onBtnApproveClick, onBtnDeleteClick }) => {
  const isAdmin = useSelector(getUserType);
  return (
    <li className='list-item'>
      <h3 className='list-item__title'>{item.title}</h3>
      <p className='list-item__text'>{item.text}</p>
      <p className='list-item__date'>{item.createdAt}</p>
      {isAdmin === 'admin' && (
        <>
          {!item.approved && (
            <Button
            className = 'list-item__btn'
              type={'button'}
              title={'Одобрить'}
              onClick={() => onBtnApproveClick(item.id)}
            ></Button>
          )}
          <Button
            type={'button'}
            title={'Удалить'}
            onClick={() => onBtnDeleteClick(item.id)}
          ></Button>
        </>
      )}
    </li>
  );
};
