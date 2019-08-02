import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export class Register extends Component {

    addUser = (e) => {
        e.preventDefault();

        let account = {
            username: e.target[0].value, 
            email: e.target[1].value,
            password: e.target[2].value,
            password2: e.target[3].value
        }

        console.log(account)

        axios.post("http://localhost:5000/user/createUser", account).then(res => {
            console.log(res);
        }).then(() => {
            window.location.reload();
        }).catch(res => {
            console.log(res);
        })

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.addUser}>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="exampleEmail">Username</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="text" name="Username" placeholder="Enter Username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="exampleEmail">Email</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="email" name="email" placeholder="Enter Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="exampleEmail">Password</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="password" name="Password" placeholder="Enter Password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="exampleEmail">Password Confirmation</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="password" name="Password2" placeholder="Confirm Password" />
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