import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; //routeur ne peut avoir qu’un seul élément ou composant enfant.
import "./App.css";
import Student from "./Components/Student.js";
import Teacher from "./Components/Teacher.js";

class Todos extends React.Component {
  render() {
    return (
      <div class="nav">
        <Link to="/teachers">
          <button class="boutonco" id="btnEnseignant">
            <span>Enseignant</span>
          </button>{" "}
        </Link>
        <Link to="/students">
          <button class="boutonco" id="btnEtudiant ">
            <span>Etudiant</span>
          </button>{" "}
        </Link>
      </div>
    );
  }
}
export default Todos;
