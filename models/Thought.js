const { Schema, model, Types } = require('mongoose');

// replies to thoughts Schema
const ReactionSchema = new Schema(
    // field definitions
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
            trim: true
            // connect this to ref user?
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // add getter to format date
        }
    }
)

// thoughts schema
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // add a getter for date format
        },
        username: {
            type: String,
            required: true,
            trim: true
            // connect this to ref user?
        },
        reactions: [ReactionSchema]
    },
    // settings
    {
        toJSON: {
            virtuals: true,
            // getters: true
        },
        id: false
    }
);

// virtual return reply count
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;