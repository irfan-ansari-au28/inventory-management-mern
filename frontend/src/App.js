import Home from "./pages/Home/Home";
import axios from "axios";

axios.defaults.withCredentials = true;
function App() {
  return <Home />;
}

export default App;
