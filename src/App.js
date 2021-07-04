import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import './App.css';

//here i am keepking the bootstrap file in seprate.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

//here we are keeping the created component in septat for clear code.
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/About" component={About}/>
     <Route exact path="/Services" component={Services}/>
     <Route exact path="/Contact" component={Contact}/>
     <Redirect to="/" />
    </Switch>
    <Footer/>   
    </>   
  );
}

export default App;
