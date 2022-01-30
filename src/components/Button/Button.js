import React from 'react';
import './Button.scss'

export const Button = ({ type, title, onClick, className }) => {
  return (
    <button type={type} onClick={onClick} className={['button', className].join(' ')}>
      {title}
    </button>
  );
};
