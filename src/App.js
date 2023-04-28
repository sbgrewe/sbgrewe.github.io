
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/projects' element = {<Projects/>} />
        <Route path='/blog' element = {<Blog/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
