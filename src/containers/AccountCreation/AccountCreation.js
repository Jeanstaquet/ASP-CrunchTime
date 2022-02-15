import React from 'react'
import './account.css'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const AccountCreation = () => {
    return (
        <div className="container_Account">
            <div className="pageName_Account">
                <FontAwesomeIcon icon={faArrowLeftLong} />
                <div>Create account</div>
            </div>
            <div className="title_Account">Crunch Time</div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="text" placeholder="Confirm Password" />
                </Form.Group>
                <button className="btn_Account">Register</button>
            </Form>
        </div>
    )
}

export default AccountCreation
