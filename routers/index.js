const express = require('express')
const router = express.Router()
const routerKanban = require('./kanban')
const routerUser = require('./user')

router.use('/users', routerUser)
router.use('/kanbans', routerKanban)


module.exports = router