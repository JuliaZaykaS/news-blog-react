import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';

export const Navigation = () => {

    const onClickBtn=()=>{

    }
  return  <nav>
  <NavLink to="/">
   <span>Главная</span>
  </NavLink>
  <NavLink to="/news">
    <span>Новости</span>
  </NavLink>
  <Button type="button" title='Вход' onClick={onClickBtn}></Button>
  <Button type="button" title='Выход' onClick={onClickBtn}></Button>
  {/* <NavLink to="/login">
    <span>Войти</span>
  </NavLink> */}

</nav>
};
