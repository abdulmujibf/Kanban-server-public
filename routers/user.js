const express = require('express')
const router = express.Router()
const ControllerUser = require('../controllers/controllerUser')

router.post("/register", ControllerUser.register)
router.post("/login", ControllerUser.login)
router.post('/googleLogin', ControllerUser.googleLogin)

module.exports = router