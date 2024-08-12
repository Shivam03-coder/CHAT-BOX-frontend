import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import SocketContext from "./components/shared/context/SocketContext";

function App() {
  return (
    <BrowserRouter>
      <SocketContext>
        <Layout />
      </SocketContext>
    </BrowserRouter>
  );
}

export default App;
