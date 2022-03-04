const { User, Thought } = require('../models');

const thoughtController = {
    // get all Thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(thoughts => res.json(thoughts))
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // get a single thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .select('-__v')
            .then(thought => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought with this id' });
                }
                res.json(thought);
            })
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // create a new thought
    addThought({ body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                // null check for thought creation
                if (!_id) {
                    return res.status(400).json({ message: 'Something went wrong posting your thought.' });
                }

                // add thought to corresponding user
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with this id' });
                }
                res.json(user);
            })
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // update thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            body,
            { new: true, runValidators: true }
        )
            .then(thought => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought with this id' });
                }
                res.json(thought);
            })
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // delete thought
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
            .then(thought => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought with this id' });
                }

                // update User document, removing this thought from thoughts arr
                return User.findOneAndUpdate(
                    { username: thought.username },
                    { $pull: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'Something went wrong...' });
                }
                res.json({
                    message: 'Thought deleted',
                    user
                });
            })
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // react to a thought (add reaction)
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
            .then(thought => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought with this id' });
                }
                res.json(thought);
            })
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // delete reaction to thought
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then(thought => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought with this id' });
                }
                res.json({
                    message: 'Reaction deleted',
                    thought
                })
            })
            .catch(err => res.status(500).json({ message: err.message }));
    }
};

module.exports = thoughtController;