import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNews } from '../../redux/news/news-slice';
import { Button } from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';


export const AddNewsForm = ({closeFunction}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch()

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'title':
        return setTitle(value);
      case 'text':
        return setText(value);
      default:
        return;
    }
  };

  const onSubmitNews = e => {
    e.preventDefault();
    const dateNow = new Date()
    const createdAt = dateNow.toISOString().slice(0,10)


      dispatch(addNews({ id:uuidv4(),title, text, createdAt, approve:false}));
      closeFunction()

    setTitle('');
    setText('');
  };


  return (
    <form onSubmit={onSubmitNews}>
      <label>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          required
          value={title}
          onChange={onChangeInput}
        ></input>
      </label>
      <label>
        <input
          type="text"
          placeholder="Enter text"
          name="text"
          required
          value={text}
          onChange={onChangeInput}
        ></input>
      </label>
      <Button type={'submit'} title={'Добавить'}></Button>
    </form>
  );
};
