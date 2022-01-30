import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import { logOut } from '../../redux/auth/auth-slice';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import Icon from '../../images/icon.svg'
import './Navigation.scss'

export const Navigation = ({onClickEnterBtn}) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const setActiveClass = ({ isActive }) =>
  'navigation__link' + (isActive ? ' navigation__link--active' : '');

  const onClickExitBtn = () => {
    dispatch(logOut());
  };

  return (
    <nav className='navigation'>
      <NavLink to="/" className='navigation__link'>
        <img src={Icon} alt='logo'/>
      </NavLink>
      <NavLink to="/news" className={setActiveClass}>
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
