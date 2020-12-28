import "./App.css";

import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Services from "./Components/Services";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      
         
      <Banner/>
      <Navbar/>
      <Services/>
      <About/>
      <Education/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
