import "./App.css";
import Feed from "./Components/Feed";
import Post from "./Components/Post";
import Sidebar from "./Components/Sidebar";
import Widgets from "./Components/Widgets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
