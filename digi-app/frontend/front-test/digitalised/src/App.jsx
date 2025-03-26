import { Routes, Route, Link } from "react-router-dom";

import Register from "./pages/Register";
import DiaryEntry from "./pages/DiaryEntry";


function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/register">Register</Link> | <Link to="/create-entry">Diary Entry</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-entry" element={<DiaryEntry />} />
      </Routes>
    </>
  );
}

export default App;
