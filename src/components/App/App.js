import { HomePage } from "../../views/HomePage/HomePage";
import { Navigation } from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import { NewsPage } from "../../views/NewsPage/NewsPage";
import { Route, Routes, Navigate } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' exact element={
          <HomePage></HomePage>

        }/>
        <Route path='/news' exact element={
          <NewsPage></NewsPage>}
          />
      </Routes>
      <Modal>
      <LoginForm></LoginForm>
      </Modal>

    </div>
  );
}

export default App;
