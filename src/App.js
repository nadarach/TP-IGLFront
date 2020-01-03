import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  student from './Components/Student.js';
import  teacher from './Components/Teacher.js';
import home from './home';

export class App extends Component {
  render() {
    return (
        <Router> 
          <div className="App">
          <Switch>
          <Route path="/teachers" component={teacher} />
          <Route path="/students" component={student} />          
          <Route path ="/" component={home} />

          </Switch>
          </div>
        </Router>
     

    )
  }
}

export default App
