import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, } from 'reactstrap'
import axios from 'axios'
import { API_URL } from '../api.js'


export default class suite extends Component {

    render() {
        return (

    <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Gestions_Scolarité</NavbarBrand>
    <NavbarToggler /*onClick={toggle}*/ />
    <Collapse /*isOpen={isOpen}*/ navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink><Link to="/">Accueil</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to="/students">Etudiants</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to="/teachers">Enseignants</Link></NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>

)}
}