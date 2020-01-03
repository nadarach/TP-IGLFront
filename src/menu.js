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
import {Student} from './Components/Student.js'

export class menu extends Component {
    /*const[isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);*/

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Gestions_Scolarité</NavbarBrand>
                    <NavbarToggler /*onClick={toggle}*/ />
                    <Collapse /*isOpen={isOpen}*/ navbar>
                        <Nav className="mr-auto" navbar>
                            <Router>

                                <NavItem>
                                    <NavLink><Link to="/">Accueil</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/students">Etudiants</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/teachers">Enseignants</Link></NavLink>
                                </NavItem>
                                <Switch>
                                    <Route path="/teachers">

                                    </Route>
                                    <Route path="/students">
                                        <Student />
                                    </Route>
                                    <Route path="/">

                                    </Route>
                                </Switch>
                            </Router>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        )
    }
}

export default menu
