import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import styles from '../../Styles/Styles.module.css'
import Image from 'react-bootstrap/Image'

function Profile() {
    return (
        <Container className={styles.container} >
            <h2 className={styles.title}>Hello</h2>
            <h3 className={styles.userName}> nombreusuario </h3>

            <h4 className={styles.text}> You are from :pais</h4>
            <Image
                className={styles.image}
                src=
                "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                roundedCircle
            />
            <Link to='/'>
                <Button variant="dark" size="lg" className={styles.button}>
                    Log out
                </Button>
            </Link>
        </Container >

    )
}

export default Profile