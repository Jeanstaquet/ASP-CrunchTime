import React, { useContext, useState } from 'react'
import './account.css'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserCtx } from '../Context/user'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const AccountCreation = () => {
    const [newUser, setNewUser] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const { user, setUser } = useContext(UserCtx)

    const signUp = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3001/signUp', {
                name: name,
                password: password,
            })
            .then((res) => {
                setUser(res.data)
                if (res === 'Account already created') {
                    setErrorMessage('Account already created')
                    setTimeout(() => {
                        setErrorMessage('')
                    }, 2000)
                } else {
                    setErrorMessage('Account created...')
                    setTimeout(() => {
                        setErrorMessage('')
                    }, 2000)
                }
            })
        setName('')
        setPassword('')
        setConfirmPassword('')
    }

    const signIn = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:3001/signIn', {
                name: name,
                password: password,
            })
            .then((res) => {
                setUser(res.data)
                setErrorMessage('Connecting...')
                setTimeout(() => {
                    setErrorMessage('')
                }, 2000)
            })
            .catch(() => {
                setErrorMessage('An error occured...')
                setTimeout(() => {
                    setErrorMessage('')
                }, 2000)
            })
        setName('')
        setPassword('')
    }

    return (
        // Code from inspired https://getbootstrap.com/docs/4.0/components/forms/
        <div className="container_Account">
            <div className="pageName_Account">
                <FontAwesomeIcon icon={faArrowLeftLong} />
                <div>Create account</div>
            </div>
            <div className="title_Account">Crunch Time</div>
            {user?.name}
            {errorMessage && <h1>{errorMessage}</h1>}
            <Form>
                {newUser && (
                    <>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </Form.Group>
                    </>
                )}
                {!newUser && (
                    <>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                        ></Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        ></Form.Group>
                    </>
                )}
                {newUser ? (
                    <button
                        className="btn_Account"
                        disabled={password.length === 0}
                        onClick={(e) => signUp(e)}
                    >
                        Register
                    </button>
                ) : (
                    <button
                        className="btn_Account"
                        disabled={password.length === 0}
                        onClick={(e) => signIn(e)}
                    >
                        SignIn
                    </button>
                )}

                <button
                    className="btn_Account"
                    onClick={(e) => {
                        e.preventDefault()
                        setNewUser(!newUser)
                    }}
                >
                    {newUser ? 'Sign in' : 'Create an account'}
                </button>
            </Form>
        </div>
    )
}

export default AccountCreation
