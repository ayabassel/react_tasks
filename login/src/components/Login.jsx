import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
export function Login() {

    let [formValues, setFormValues] = useState({
        studentname: 'inital studentname',
        age: 18
    })

    let [errors, setErrors] = useState({
        studentname: null,
        age: null
    })

    let [tableRows, setTableRows] = useState([]);

    let loginFun = (e) => {
        e.preventDefault();
        if (errors.studentname || errors.age) {
            return;
        }
        console.log("Add");
        console.log(formValues);
        setTableRows([...tableRows, formValues]);
    }

    let formValidation = (e) => {

        if (e.target.name == 'studentname') {
            if (e.target.value.length >= 5) {
                setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value
                })
                setErrors({
                    ...errors,
                    studentname: null
                })

            }
            else {
                setErrors({
                    ...errors,
                    studentname: "Studentname Length must be greater than or equal 5"
                })
            }
        }
        if (e.target.name === 'age') {
            if (e.target.value >= 18) {
                setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value
                })
                setErrors({
                    ...errors,
                    age: null
                })

            }
            else {
                setErrors({
                    ...errors,
                    age: "Age must be greater than or equal 18"
                })
            }
        }
    }
    return (
        <div>
            <p className='bg-dark text-light text-center p-3 fs-3'>Login Form</p>
            <Form className='container mt-5 alert alert-secondary  w-25 p-3' onSubmit={loginFun}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control onChange={formValidation} type="text" name='studentname' placeholder="Enter Student Name" autoComplete='off' required />
                    <Form.Text className="text-danger">
                        {errors.studentname}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control onChange={formValidation} type="number" name='age' placeholder="Enter Your Age" autoComplete='off' required />
                    <Form.Text className="text-danger">
                        {errors.age}
                    </Form.Text>
                </Form.Group>
                <div className='text-center'>
                    <Button className='w-25' variant="dark" type="submit">
                        Add
                    </Button>
                </div>

            </Form>
            <Table className='container mt-5 table table-bordered w-50 p-3'>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map((row) => (
                        <tr key={row.id}>
                            <td>{row.studentname}</td>
                            <td>{row.age}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}  
