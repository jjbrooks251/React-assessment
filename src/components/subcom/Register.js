import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

export class Register extends Component {

    addUser = (e) => {
        e.preventDefault();

        let account = {
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            password2: e.target[3].value
        }

        if (account.email.indexOf(".") === -1) {
            document.getElementById("emailError").innerText = "Email requires a '.'"
        } else {
            if (account.password === account.password2) {
                axios.post("http://localhost:5000/user/createUser", account).then(res => {
                    console.log(res);
                }).then(() => {
                    window.location.reload();
                }).catch(res => {
                    console.log(res);
                })
            } else {
                document.getElementById("passMAtch").innerText = "Passwords do not match"
            }
        }

    }

    AlphaEntry = (e) => {
        const re = /[0-9a-zA-Z]+/g;
        if (!re.test(e.key)) {
            e.preventDefault();
            document.getElementById("userError").innerText = "Username cannot contain " + e.key
            console.log(e.key + ' is not valid')
        }
    }

    // formValid = () => {
    //     'use strict';
    //     window.addEventListener('load', function () {
    //         // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //         var forms = document.getElementsByClassName('register-form');
    //         // Loop over them and prevent submission
    //         var validation = Array.prototype.filter.call(forms, function (form) {
    //             form.addEventListener('submit', function (event) {
    //                 if (form.checkValidity() === false) {
    //                     event.preventDefault();
    //                     event.stopPropagation();
    //                 }
    //                 form.classList.add('was-validated');
    //             }, false);
    //         });
    //     }, false);
    // };

    render() {
        return (
            <div>
                <Form onSubmit={this.addUser} className="register-form">
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="Username">Username</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="text" name="Username" placeholder="Enter Username" onKeyPress={(e) => this.AlphaEntry(e)} required />
                        </Col>
                        <Col sm={3}>
                            <p id='userError' style={{ color: 'red' }}></p>
                        </Col>

                    </FormGroup>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="Email">Email</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="email" name="email" placeholder="Enter Email" required />
                        </Col>
                        <Col sm={3}>
                            <p id='emailError' style={{ color: 'red' }}></p>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="Password">Password</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="password" id="Password" placeholder="Enter Password" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="Password2">Password Confirmation</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="password" id="Password2" placeholder="Confirm Password" required />
                        </Col>
                        <Col sm={3}>
                            <p id='passMAtch' style={{ color: 'red' }}></p>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 2, offset: 2 }}>
                            <Button>Create Account</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}