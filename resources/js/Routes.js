import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Dashboard from './components/Dashboard';


export default class  Routes extends Component {
      
    render (){
        return(
                    <Router >
                        <Dashboard />    
                    </Router>
        );
    };
}