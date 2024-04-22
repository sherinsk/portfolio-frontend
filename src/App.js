
import './App.css';

import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './Component/Projects';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="backgroundcolor">

      <Router>
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
