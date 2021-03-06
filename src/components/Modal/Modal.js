import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modal = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  });

  const onEscClick = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={onBackdropClick} className='popup'>
      <div className='popup__content'>{children}</div>
    </div>,
    modal,
  );
}