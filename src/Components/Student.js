import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, } from 'reactstrap'
import axios from 'axios'
//import { API_URL } from '../api.js'

export class Student extends Component {
    state = {
        students: [],
        students1cp: [],
        students2cp: [],
        students1cs: [],
        students2cs: [],
        students3cs: [],
        newStudentData: {
            nom: '',
            prenom: '',
            annee: ''
        },
        newStudentModal: false
    }

    componentWillMount() {
        axios.get('http://localhost:8000/Students/all/1cp').then((response) => {
            this.setState({
                students1cp: response.data,
            })
        })
        axios.get('http://localhost:8000/Students/all/2cp').then((response) => {
            this.setState({
                students2cp: response.data,
            })
        })
        axios.get('http://localhost:8000/Students/all/1cs').then((response) => {
            this.setState({
                students1cs: response.data,
            })
        })
        axios.get('http://localhost:8000/Students/all/2cs').then((response) => {
            this.setState({
                students2cs: response.data,
            })
        })
        axios.get('http://localhost:8000/Students/all/3cs').then((response) => {
            this.setState({
                students3cs: response.data,
            })
        })
    }

    toggleNewStudentModal() {
        this.setState({
            newStudentModal: !this.state.newStudentModal
        })
    }

    updateAnnee(e) {
        var { newStudentData } = this.state
        newStudentData.annee = e.target.value
        console.log(e.target.value);
        this.setState({
            newStudentData
        })
    }

    addStudent(event) {
        event.preventDefault();
        var student = this.state.newStudentData;
        console.log(student);
        console.log(student.annee)
        axios
            .post('http://localhost:8000/Students/add', { student })
            .then((response) => {
                console.log(response.data)
                switch (student.annee) {
                    case '1CP':
                        let { students1cp } = this.state
                        students1cp
                            .push(response.data);
                        this.setState({ students1cp, newStudentModal: false, newStudentData: "" })
                    break;
                    case '2CP':
                        let { students2cp } = this.state
                        students2cp
                            .push(response.data);
                        this.setState({ students2cp, newStudentModal: false, newStudentData: "" })
                    break;
                    case '1CS':
                        let { students1cs } = this.state
                        students1cs
                            .push(response.data);
                        this.setState({ students1cs, newStudentModal: false, newStudentData: "" })
                    break;
                    case '2CS':
                        let { students2cs } = this.state
                        students2cs
                            .push(response.data);
                        this.setState({ students2cs, newStudentModal: false, newStudentData: "" })
                    break;
                    case '3CS':
                        let { students3cs } = this.state
                        students3cs
                            .push(response.data);
                        this.setState({ students3cs, newStudentModal: false, newStudentData: "" })
                    break;
                }
            })

    }


    render() {
        let students1cp = this.state.students1cp.map((student) => {
            return (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.nom}</td>
                    <td>{student.prenom}</td>
                    <td>{student.annee}</td>
                </tr>
            );
        })

        let students2cp = this.state.students2cp.map((student) => {
            return (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.nom}</td>
                    <td>{student.prenom}</td>
                    <td>{student.annee}</td>
                </tr>
            );
        })

        let students1cs = this.state.students1cs.map((student) => {
            return (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.nom}</td>
                    <td>{student.prenom}</td>
                    <td>{student.annee}</td>
                </tr>
            );
        })

        let students2cs = this.state.students2cs.map((student) => {
            return (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.nom}</td>
                    <td>{student.prenom}</td>
                    <td>{student.annee}</td>
                </tr>
            );
        })

        let students3cs = this.state.students3cs.map((student) => {
            return (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.nom}</td>
                    <td>{student.prenom}</td>
                    <td>{student.annee}</td>
                </tr>
            );
        })

        return (
            <div>
                <Button color="primary" onClick={this.toggleNewStudentModal.bind(this)}>Ajouter Etudiant</Button>
                <Modal isOpen={this.state.newStudentModal} toggle={this.toggleNewStudentModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewStudentModal.bind(this)}>Ajouter un(e) Etudiant(e)</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="nom">Nom</Label>
                            <Input name="nom" id="nom" value={this.state.newStudentData.nom} placeholder="Nom de l'étudiant" onChange={(e) => {
                                var { newStudentData } = this.state
                                newStudentData.nom = e.target.value
                                this.setState({ newStudentData })
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="prenom">Prenom</Label>
                            <Input name="prenom" id="prenom" value={this.state.newStudentData.prenom} placeholder="Prénom de l'étudiant" onChange={(e) => {
                                var { newStudentData } = this.state
                                newStudentData.prenom = e.target.value
                                this.setState({ newStudentData })
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="annee">Année</Label>
                            <Input type="select" name="annee" value={this.state.newStudentData.annee || ""} id="annee" onChange={this.updateAnnee.bind(this)}  >              }} >
                                <option>1CP</option>
                                <option>2CP</option>
                                <option>1CS</option>
                                <option>2CS</option>
                                <option>3CS</option>
                            </Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addStudent.bind(this)}>Ajouter !</Button>{' '}
                        <Button color="secondary" onClick={this.toggleNewStudentModal.bind(this)}>Annuler</Button>
                    </ModalFooter>
                </Modal>

                <br /><br />

                <br />
                <h1>1CP</h1>
                <br />


                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Année</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students1cp}
                    </tbody>
                    <br />
                    <h1>2CP</h1>
                    <br />
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Année</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students2cp}
                    </tbody>
                    <br />
                    <h1>1CS</h1>
                    <br />
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Année</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students1cs}
                    </tbody>
                    <br />
                    <h1>2CS</h1>
                    <br />
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Année</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students2cs}
                    </tbody>
                    <br />
                    <h1>3CS</h1>
                    <br />
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Année</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students3cs}
                    </tbody>
                </Table>
                <br /><br /><br />
            </div>
        )
    }
}

export default Student
