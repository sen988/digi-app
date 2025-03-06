import { Routes, Route, Link } from "react-router-dom";

import Register from "./pages/Register";


function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
