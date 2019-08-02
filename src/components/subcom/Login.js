import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export class Login extends Component {

    getUser = (e) => {
        e.preventDefault();
        console.log('Hello')

        let data = {username: e.target[0].value, password: e.target[1].value}

        console.log(data);

        axios.get("http://localhost:5000/user/name", data).then(res => {
            console.log(res);
        }).then(()=> {
            window.location.reload()
        }).catch(res => {
            console.log(res)
        })

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
                            <Input type="text" name="Username" placeholder="Enter Username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label for="Password">Password</Label>
                        </Col>
                        <Col sm={3}>
                            <Input type="password" name="Password" placeholder="Enter Password" />
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