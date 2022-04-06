import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import styles from '../../Styles/Styles.module.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <Container className={styles.container}>
            <h2 className={styles.text}>Login</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link to='/profile'>
                    <Button variant="dark" size="lg" className={styles.button}>
                        Continue
                    </Button>
                </Link>
                <Link to='/'>
                    <Button variant="dark" size="lg" className={styles.button}>
                        Go Back
                    </Button>
                </Link>
            </Form>
        </Container>)
}

export default Login