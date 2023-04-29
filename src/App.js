import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Blog from "./components/Blog Public";
import About from "./components/About";
import Contact from "./components/Contact";
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
