import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom'
export function Login() {
    // let [username, setUsername] = useState();
    // let usernamechange = (e) => {
    //     setUsername(e.target.value)
    // }

    return (
        <div className="loginContainer drk">
            <Form className="loginForm text-light" >
                <h1 className="m-2 p-3 ">Log In</h1>
                <Form.Group className="mb-3 inputdata" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Username" autocomplete="off" />
                </Form.Group>

                <Form.Group className="mb-3 inputdata" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 inputdata" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <NavLink className="btn btn-success inputdata m-5" to="/home">Login</NavLink>
                {/* state={{ username: username }} */}
            </Form>

        </div>

        );
}
