import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persitor } from "./redux/Store";
import SocketContext from "./components/shared/context/SocketContext";

function App() {
  return (
    <BrowserRouter>
      <PersistGate persistor={persitor}>
        <SocketContext>
          <Layout />
        </SocketContext>
      </PersistGate>
    </BrowserRouter>
  );
}

export default App;
