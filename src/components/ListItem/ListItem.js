import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { getUserType } from '../../redux/auth/auth-selectors';

export const ListItem = ({ item, onBtnApproveClick, onBtnDeleteClick }) => {
  const isAdmin = useSelector(getUserType);
  return (
    <li>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <p>{item.createdAt}</p>
      {isAdmin === 'admin' && (
        <>
          {!item.approved && (
            <Button
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
