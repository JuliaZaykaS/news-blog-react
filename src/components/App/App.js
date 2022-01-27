import { HomePage } from "../../views/HomePage/HomePage";
import { Navigation } from "../Navigation/Navigation";
import Modal from "../Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import { NewsPage } from "../../views/NewsPage/NewsPage";



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <HomePage></HomePage>
      <Modal>
      <LoginForm></LoginForm>
      </Modal>
      <NewsPage></NewsPage>

    </div>
  );
}

export default App;
