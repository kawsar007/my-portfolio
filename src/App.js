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

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
        {/* <Router>
          <Switch/>
          <Banner/>
          <Navbar/>
          <Route path="/services" component={Services}/>
          <Route path="/services" component={About}/>
          <Route path="/services" component={Education}/>
          <Route path="/services" component={Project}/>
          <Route path="/services" component={Skills}/>
          <Route path="/services" component={Contact}/>
         <Footer/>
          
        </Router>  */}

      <Banner/>
      <Navbar/> 

      {/* <Services/> */}
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
