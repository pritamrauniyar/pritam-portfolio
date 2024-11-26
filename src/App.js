import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project/Project";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { MyContextProvider } from "./components/MyContext/MyContext";
function App() {

  return (
    <MyContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MyContextProvider>
  );
}

export default App;
