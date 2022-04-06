const { Router } = require("express")
const router = Router()

const users = require('./users.routes')
const countries = require('./countries.routes')


//USER C.R.U.D
router.use('/user', users)

//COUNTRIES
router.use('/countries', countries)


module.exports = router;