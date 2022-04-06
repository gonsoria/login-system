const express = require('express')
const router = express()

const {
    getCountries
} = require('../controllers/countries.controller')

//Trae todos los paises de la db
router.get('/', getCountries)

module.exports = router;