import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./screens/Signin";
import { Signup } from "./screens/Signup";
import { Home } from "./screens/Home/Home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Store from "../src/redux/Store";

function App() {
  let persistor = persistStore(Store);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/signIn" element={<Signin />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
