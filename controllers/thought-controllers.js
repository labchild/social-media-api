const { User, Thought } = require('../models');

const thoughtController = {
    // get all Thoughts
    getAllThoughts(req, res) {
        // Thought.find({})
    },

    // get a single thought by id
    getThoughtById({ params }, res) {
        // Thought.findOne({ _id: params.id })
    },

    // create a new thought
    addThought({ params, body }, res) {
        // example data
        /* {
            "thoughtText": "Here's a cool thought...",
                "username": "lernantino",
                    "userId": "5edff358a0fcb779aa7b118b"
        } */

        // Thought.create(body)
        // then(({_id})) => { User.findoneAndUpdate }
        // $push
    },

    // update thought by id
    updateThought({ params, body }, res) {
        // Thought.findOneAndUpdate
    },

    // delete thought
    removeThought({ params }, res) {
        // Thought.findOneAndDelete({ _id: params.thoughtId })
            // .then User.findOneAndUpdate({ _id: params.userId }, $pull)
    },

    // react to a thought (add reaction)
    addReaction({ params, body }, res) {
        // Thought.findOneAndUpdate({ params}, $push: {reactions:body}, new: true, validators)
    },

    // delete reaction to thought
    removeReaction({ params }, res){
        // Thought.findOneAndUpdate
            // $pull
    }
}