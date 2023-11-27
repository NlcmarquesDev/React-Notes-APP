import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import Home from "./routes/Home.jsx";
import NavBarPrimary from "./partials/NavBarPrimary";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <>
      <NavBarPrimary />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
