import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Form from './Form'
import "./App.css";
import logo from './Pizza.jpg'

export default function Header() {
    return(
        <div className="nav-links">
            <h1>LAMBDA EATS</h1>

                    <Route path="/Form">
                        <Link exact to="/Form">PIZZA</Link>
                        <Form/>
                    </Route>

            <div className="nav-bar">
                <div className ="formLink">

                </div>
            </div>
        </div>
    )
}