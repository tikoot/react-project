import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="App">
      <div className="flex flex-col h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
