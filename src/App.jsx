import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persitor } from "./redux/Store";
import SocketProvider from "./utils/SocketProvider";

function App() {
  return (
    <BrowserRouter>
      <PersistGate persistor={persitor}>
        <SocketProvider>
          <Layout />
        </SocketProvider>
      </PersistGate>
    </BrowserRouter>
  );
}

export default App;
