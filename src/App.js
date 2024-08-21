
import './App.css';

import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './Component/Projects';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Contact from './Component/Contact';
import ProjectSinglePage from './Component/ProjectSinglePage';
import LoginPage from './Component/Login';
import Footer from './Component/Footer';
import ProjectList from './Component/adminPage';
import AddProjectForm from './Component/addProject';

function App() {
  return (
    <div className="backgroundcolor">

      <Router>
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectSinglePage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admin" element={<LoginPage/>}/>
          <Route path="/loggedinPage" element={<ProjectList/>}/>
          <Route path="/addproject" element={<AddProjectForm/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
