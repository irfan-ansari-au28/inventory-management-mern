import Home from "./pages/Home/Home";
import axios from "axios";

axios.defaults.withCredentials = true;
function App() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Home />;
}

export default App;
