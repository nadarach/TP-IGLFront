import React, { Component } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import axios from "axios";
import { API_URL } from "../api.js";

export class Teacher extends Component {
  state = {
    teachers: [],
    newTeacherData: {
      nom: "",
      prenom: ""
    },
    newTeacherModal: false
  };

  componentWillMount() {
    axios.get("http://localhost:8000/teachers/all").then(response => {
      this.setState({
        teachers: response.data
      });
    });
  }

  toggleNewTeacherModal() {
    this.setState({
      newTeacherModal: !this.state.newTeacherModal
    });
  }

  addTeacher(event) {
    event.preventDefault();
    var teacher = this.state.newTeacherData;
    console.log(teacher);
    axios
      .post("http://localhost:8000/teachers/add", { teacher })
      .then(response => {
        console.log(response.data);
        let { teachers } = this.state;
        teachers.push(response.data);
        this.setState({ teachers, newTeacherModal: false, newTeacherData: "" });
      });
  }

  render() {
    let teachers = this.state.teachers.map(teacher => {
      return (
        <tr key={teacher.id}>
          <td>{teacher.id}</td>
          <td>{teacher.nom}</td>
          <td>{teacher.prenom}</td>
        </tr>
      );
    });

    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggleNewTeacherModal.bind(this)}
          id="ajoutEnseignant"
        >
          Ajouter Enseignant
        </Button>
        <Modal
          isOpen={this.state.newTeacherModal}
          toggle={this.toggleNewTeacherModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleNewTeacherModal.bind(this)}>
            Ajouter un(e) Enseignant(e)
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="nom">Nom</Label>
              <Input
                name="nom"
                id="nom"
                value={this.state.newTeacherData.nom}
                placeholder="Nom de l'enseignant"
                onChange={e => {
                  var { newTeacherData } = this.state;
                  newTeacherData.nom = e.target.value;
                  this.setState({ newTeacherData });
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="prenom">Prenom</Label>
              <Input
                name="prenom"
                id="prenom"
                value={this.state.newTeacherData.prenom}
                placeholder="Prénom de l'enseignant"
                onChange={e => {
                  var { newTeacherData } = this.state;
                  newTeacherData.prenom = e.target.value;
                  this.setState({ newTeacherData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              id="ajouter"
              onClick={this.addTeacher.bind(this)}
            >
              Ajouter !
            </Button>{" "}
            <Button
              color="secondary"
              onClick={this.toggleNewTeacherModal.bind(this)}
            >
              Annuler
            </Button>
          </ModalFooter>
        </Modal>

        <br />
        <br />

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
            </tr>
          </thead>
          <tbody>{teachers}</tbody>
        </Table>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Teacher;
