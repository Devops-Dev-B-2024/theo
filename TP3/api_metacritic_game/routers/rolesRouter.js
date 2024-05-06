const express = require('express'),
    router = express.Router(),
    rolesController = require('../controllers/rolesController')
    authMiddleware = require('../middlewares/authMiddleware')


router.get('/', authMiddleware("admin"),  rolesController.getRoles)
router.get('/:id', authMiddleware("admin"),  rolesController.getRoleById)

module.exports = router
