const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then(users => {
                // if (!users) {
                //     res.json({ message: 'No users yet!' });
                //     return;
                // }
                res.json(users);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: err.message })
            });
    },

    // get user by id with user's thoughts and friend list
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate([
                {
                    path: 'friends',
                    select: '-__v'
                },
                {
                    path: 'thoughts',
                    select: '-__v'
                }
            ])
            .select('-__v')
            .then(user => {
                if (!user) {
                    res.status(404).json({ message: 'No user with this id' });
                    return;
                }
                res.json(user);
            })
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // post a new user
    addUser({ body }, res) {
        User.create(body)
            .then(user => res.json(user))
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // update a user
    updateUser({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
            .then(user => {
                if (!user) {
                    res.status(404).json({ message: 'No user with this id' });
                    return;
                }
                res.json(user);
            })
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // delete a user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id }, {new: true })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with this id' });
                }
                return Thought.deleteMany({ username: user.username });
            })
            .then(thoughts => res.json({ message: 'User and associated thoughts deleted!' }))
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // friend controllers
    // add friend to user
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: { _id: params.friendId } } },
            { new: true }
        )
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'No user with this id' });
                }
                res.json(user);
            })
            .catch(err => res.status(500).json({ message: err.message }));
    },

    // remove friend from user
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'No user with this id' });
            }
            res.json(user);
        })
        .catch(err => res.status(500).json({ message: err.message }));
    }
};

module.exports = userController;