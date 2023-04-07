import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Tech } from "./components/Tech";
import Projects from "./components/Projects";
import  Contact  from "./components/Contact";
import  Footer  from "./components/Footer";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div className="component-wrapper"><Projects/></div>
      <AboutMe/>
      <Tech/>
      <Contact />
      <Footer />
    </div>
  );
}
    
    export default App;