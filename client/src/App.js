import Home from "./pages/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/login" /> : <Register />}
        />
      </Routes>
    </>
  );
}

export default App;
