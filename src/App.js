import React from "react";
// import { Route, Link } from 'react-router-dom' 
import Header from "./Header"
// import '../Assets/Pizza.jpg';
// import Form from "./Form.js";
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Form from './Form'
import "./App.css";
import logo from './Pizza.jpg'


// function About(props) {
//   return <h1>About Component</h1>
// }

const App = () => {
  return (
    <div className="pizza-app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Form">Form</Link>


        <Route exact path="/Form" component={Form}/>
      </nav>
      <h1>LAMBDA EATS</h1>
      <img src={logo}/>

    </div>
  );
};
export default App;
