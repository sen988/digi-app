import { Routes, Route, Link } from "react-router-dom";

import Register from "./pages/Register";
import DiaryEntry from "./pages/DiaryEntry";
import Login from "./pages/Login";

import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const logoutUser = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; //redirect to login page
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link> | <Link to="/create-entry">Diary Entry</Link> | <button onClick={logoutUser}>Logout</button>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route for Diary Entry */}
        <Route
          path="/create-entry"
          element={
            <ProtectedRoutes>
              <DiaryEntry />
            </ProtectedRoutes>
          }
        />

      </Routes>
    </>
  );
}

export default App;
