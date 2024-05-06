const express = require('express'),
    router = express.Router(),
    reviewsController = require('../controllers/reviewsController'),
    authMiddleware = require('../middlewares/authMiddleware')

router.get('/', reviewsController.getReviews)
router.post('/', authMiddleware("editor"), reviewsController.addReview)
router.put('/', authMiddleware("editor"), reviewsController.putReview)
router.get('/:id', reviewsController.getReviewById)
router.delete('/:id', authMiddleware("editor"), reviewsController.deleteReviewById)


module.exports = router
