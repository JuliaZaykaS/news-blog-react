import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-slice';
import { Button } from '../Button/Button';
import users from '../../db/users.json';

export const LoginForm = ({ closeFunction }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrong, setWrong] = useState(false);

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

    const findUser = users.find(
      el => el.login === email && el.password === password,
    );

    if (!findUser) setWrong(true);
    if (findUser) {
      const { type } = findUser;
      dispatch(logIn({ email, password, type }));
      setWrong(false);
      closeFunction();
    }
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={onSubmitLogin}>
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
      {wrong && <p>Неверный логин или пароль</p>}
    </form>
  );
};
