import "./App.css";
import ProfileContainer from "./PortfolioContainer/ProfileContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <ProfileContainer />
    </div>
  );
}

export default App;
