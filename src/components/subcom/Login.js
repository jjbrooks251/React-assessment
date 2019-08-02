import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Login extends Component {

    getUser = (e) => {
        e.preventDefault();
        console.log('Hello')

        let username = e.target[0].value
        let password = e.target[1].value

        let url = "http://localhost:5000/user/name/" + username + "/" + password

        axios.get(url).then(res => {
            console.log(res);

        }).then(() => {
            document.getElementById("username").placeholder = "Enter Username"
            document.getElementById("password").placeholder = ""
            document.getElementById("loginwork").innerText = "Successfully Logged in"
        }).catch(res => {
            console.log(res)
            document.getElementById("loginfail").innerText = "Incorrect Username/Password"
        })

    }

    AlphaEntry = (e) => {
        const re = /[0-9a-zA-Z]+/g;
        if (!re.test(e.key)) {
            e.preventDefault();
            document.getElementById("userError").innerText = "Username cannot contain " + e.key
            console.log(e.key + ' is not valid')
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.getUser}>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="username">Username</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="text" id="username" name="Username" placeholder="Enter Username" onKeyPress={(e) => this.AlphaEntry(e)} required />
                        </Col>
                        <Col sm={3}>
                            <p id='userError' style={{ color: 'red' }}></p>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="Password">Password</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="password" id="password" name="Password" placeholder="Enter Password" required />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 2, offset: 2 }}>
                            <Button>Create Account</Button>
                        </Col>
                    </FormGroup>
                </Form>
                <br></br>
                <br></br>
                <p1 style={{ color: 'green' }} id='loginwork'></p1>
                <p1 style={{ color: 'red' }} id='loginfail'></p1>
            </div>
        )
    }
}