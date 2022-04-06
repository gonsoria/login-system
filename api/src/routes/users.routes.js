const express = require('express')
const router = express()

const { getUsers, createUser, getUserById, loginUser } = require('../controllers/users.controller')

//Trae todos los usuarios registrados.
router.get('/', getUsers)

//Trae informacion de un usuario en particular.
router.get('/:id', getUserById)

//Crea un nuevo usuario si este no existe.
router.post('/register', createUser)

//Login de usuario
router.post('/login', loginUser)


module.exports = router;