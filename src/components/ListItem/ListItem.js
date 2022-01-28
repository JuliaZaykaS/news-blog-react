import React from 'react';
import { Button } from '../Button/Button';
import { getUserType } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const ListItem = ({ item, onBtnApproveClick, onBtnDeleteClick }) => {
  const isAdmin = useSelector(getUserType);
  return (
    <li>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <p>{item.createdAt}</p>
      {isAdmin === 'admin' && (
        <>
          <Button
            type={'button'}
            title={'Одобрить'}
            onClick={() => onBtnApproveClick(item.id)}
          ></Button>
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
