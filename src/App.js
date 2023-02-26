
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './Components/Home/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import "./App.css";
import PhoneNav from './Components/Navbar/PhoneNav';

function App() {
  const isMobile = window.innerWidth < 880;




  return (

    <div className="App">

      <Router>
        {isMobile ? <PhoneNav /> : <Navbar />}
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/home" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />

        </Routes>
     
      </Router>


    </div>
  );
}

export default App;
