const router = ('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controllers');

// at /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(addThought);

// at /api/thoughts/:id
router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// reaction routes
// at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// at /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;