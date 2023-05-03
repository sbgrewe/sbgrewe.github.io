import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Blog from "./components/Blog Public";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route, HashRouter } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes> 
        <Route path='/' element = {<Home/>} />
        <Route path='/Projects' element = {<Projects/>} />
        <Route path='/Blog' element = {<Blog/>} />
        <Route path='/About' element = {<About/>} />
        <Route path='/Contact' element = {<Contact/>} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
