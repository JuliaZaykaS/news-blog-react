import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../../components/Filter/Filter';
import { List } from '../../components/List/List';
import Section from '../../components/Section/Section';
import {
  getAllNews,
  getFilterNews,
  deleteNews,
  approveNews,
} from '../../redux/news/news-slice';
import {
  getFilteredNews,
  getFilter,
  getApprovedNews,
} from '../../redux/news/news-selectors';
import { getUserType } from '../../redux/auth/auth-selectors';
import { Button } from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { AddNewsForm } from '../../components/AddNewsForm/AddNewsForm';

export const NewsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const allNews = useSelector(getFilteredNews);
  const approvedNews = useSelector(getApprovedNews);
  const filteredNews = useSelector(getFilter);
  const isUser = useSelector(getUserType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const findTitle = e => {
    dispatch(getFilterNews(e.target.value));
  };
  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const onBtnAddClick = () => {
    setIsOpen(true);
  };

  const onBtnApproveClick = id => {
    const findNews = allNews.find(el => el.id === id);
    const editedNews = { ...findNews, approved: true };
    dispatch(approveNews(editedNews));
  };

  const onBtnDeleteClick = id => {
    dispatch(deleteNews(id));
  };

  return (
    <Section title="Новости">
      {isUser === 'user' && (
        <Button
          type={'button'}
          title={'Добавить новость'}
          onClick={onBtnAddClick}
        >
          Добавить новость
        </Button>
      )}
      {isOpen && (
        <Modal onClose={toggleModal}>
          <AddNewsForm closeFunction={toggleModal}></AddNewsForm>
        </Modal>
      )}
      <Filter value={filteredNews} onFindName={findTitle}></Filter>
      <List
        news={isUser === 'admin' ? allNews : approvedNews}
        onBtnDeleteClick={onBtnDeleteClick}
        onBtnApproveClick={onBtnApproveClick}
      ></List>
    </Section>
  );
};
