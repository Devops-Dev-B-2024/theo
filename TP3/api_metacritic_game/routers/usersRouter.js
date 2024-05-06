const express = require('express'),
    router = express.Router(),
    usersController = require('../controllers/usersController'),
    authMiddleware = require('../middlewares/authMiddleware')


router.get('/', authMiddleware("admin"), usersController.getUsers)
router.put('/:id', authMiddleware("gamer"), usersController.putUser)
router.get('/:id', authMiddleware("gamer"), usersController.getUserById)
router.delete('/:id', authMiddleware("gamer"), usersController.deleteUserById)
router.put('/role/:id', authMiddleware("admin"), usersController.updateRoleByUserId)

module.exports = router
