import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import { Button } from '../Button/Button';

export const LoginForm = () => {
    const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onSubmitLogin = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return <form onSubmit={onSubmitLogin}>
      <label>
          <input
          type="email"
          placeholder="Enter email"
          name="email"
          required
          value={email}
          onChange={onChangeInput}
          ></input>
      </label>
      <label>
          <input
          type="password"
          placeholder="Enter password"
          name="password"
          required
          value={password}
          onChange={onChangeInput}
          ></input>
      </label>
      <Button type={'submit'} title={'Войти'}></Button>
  </form>;
};
