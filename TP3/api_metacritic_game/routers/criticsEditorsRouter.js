const express = require('express'),
    router = express.Router(),
    criticsEditorsController = require('../controllers/criticsEditorsController'),
    authMiddleware = require('../middlewares/authMiddleware')


router.get('/', criticsEditorsController.getCriticsEditors)
router.post('/', authMiddleware("editor"), criticsEditorsController.addCriticsEditor)
router.put('/', authMiddleware("editor"), criticsEditorsController.putCriticsEditor)
router.get('/:id', criticsEditorsController.getCriticsEditorById)
router.delete('/:id', authMiddleware("editor"), criticsEditorsController.deleteCriticsEditorById)


module.exports = router
