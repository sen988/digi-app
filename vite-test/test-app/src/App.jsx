import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Digital Diary</h1>
      <nav className="space-x-4">
        <Link to="/entries" className="text-blue-500 hover:underline">Entries</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        <Link to="/settings" className="text-blue-500 hover:underline">Settings</Link>
      </nav>
    </div>
  );
};

export default Home;
