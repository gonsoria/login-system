import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import styles from '../../Styles/Styles.module.css'

function Home() {
    return (
        <Container className={styles.container} >
            <h2 className={styles.title}>Wellcome</h2>
            <Link to='/login'>
                <Button variant="dark" size="lg" className={styles.button}>
                    Log in
                </Button>
            </Link>
            <Link to='/register'>
                <Button variant="dark" size="lg" className={styles.button}>
                    Create an account
                </Button>
            </Link>
        </Container>
    )
}

export default Home