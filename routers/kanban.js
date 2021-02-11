const express = require('express')
const router = express.Router()
const ControllerKanban = require('../controllers/controllerKanban')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')

router.use(authenticate)
router.get('/', ControllerKanban.getAll)
router.post('/', ControllerKanban.addKanban)

router.get('/:id', authorize, ControllerKanban.getById)
router.put('/:id', authorize, ControllerKanban.editKanban)
router.patch('/:id', authorize, ControllerKanban.UpdateKanban)
router.delete('/:id', authorize, ControllerKanban.deleteKanban)

module.exports = router