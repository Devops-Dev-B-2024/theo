const express = require('express'),
    router = express.Router(),
    criticsUsersController = require('../controllers/criticsUsersController'),
    authMiddleware = require('../middlewares/authMiddleware')

router.get('/', criticsUsersController.getCriticsUsers) 
router.post('/', authMiddleware("gamer"), criticsUsersController.addCriticsUser) 
router.put('/', authMiddleware("gamer"), criticsUsersController.putCriticsUser) 
router.get('/:idUser/:idReview', criticsUsersController.getCriticsUserById) 
router.delete('/:idUser/:idReview', authMiddleware("gamer"), criticsUsersController.deleteCriticsUserById) 


module.exports = router
