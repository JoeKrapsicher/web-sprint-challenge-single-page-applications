import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Form from './Form'
import "./App.css";
import logo from './Pizza.jpg'

export default function Header() {
    return(
        <div className="nav-links">
            <div className="nav-bar">
                <div className ="formLink">
                    <BrowserRouter>
                        <Link exact to="/Form">PIZZA</Link>
                    </BrowserRouter>
                </div>
            </div>
            <h1>LAMBDA EATS</h1>
                <BrowserRouter>
                    <Route path="/Form">
                        <Form/>
                    </Route>
                </BrowserRouter>
        </div>
    )
}