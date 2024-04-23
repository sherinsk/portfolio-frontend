import React  from 'react';

import About from './About';
import Spotlight from './Spotlight';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';



function Home() {
  return (
    <>
    <Spotlight/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    </>
  );
}

export default Home;


