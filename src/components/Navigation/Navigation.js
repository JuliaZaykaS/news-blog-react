import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import { logOut } from '../../redux/auth/auth-slice';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export const Navigation = ({onClickEnterBtn}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const onClickExitBtn = () => {
    dispatch(logOut());
  };

  return (
    <nav>
      <NavLink to="/">
        <span>Главная</span>
      </NavLink>
      <NavLink to="/news">
        <span>Новости</span>
      </NavLink>
      {isLoggedIn ? (
        <Button type="button" title="Выход" onClick={onClickExitBtn}></Button>
      ) : (
        <Button type="button" title="Вход" onClick={onClickEnterBtn}></Button>
      )}
    </nav>
  );
};
