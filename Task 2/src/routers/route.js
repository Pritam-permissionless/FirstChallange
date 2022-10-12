const express = require('express')
const router = express.Router()

const userDetails = require('../controller/userController')

router.post('/userRegister', userDetails.userDetails)


module.exports = router