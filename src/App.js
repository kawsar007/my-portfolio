import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <Banner/>
      <Navbar/>
      <Services/>
      <About/>
    </div>
  );
}

export default App;
