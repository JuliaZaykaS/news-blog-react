import { HomePage } from '../../views/HomePage/HomePage';
import { Navigation } from '../Navigation/Navigation';
import Modal from '../Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import { NewsPage } from '../../views/NewsPage/NewsPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <div className="App">
      <Navigation onClickEnterBtn={toggleModal}></Navigation>
      <Routes>
        <Route path="/" exact element={<HomePage></HomePage>} />
        <Route path="/news" exact element={<NewsPage></NewsPage>} />
      </Routes>
      {isOpen && (
        <Modal onClose={toggleModal}>
          <LoginForm closeFunction={toggleModal}></LoginForm>
        </Modal>
      )}
    </div>
  );
}

export default App;
