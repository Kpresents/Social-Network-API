const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema({

    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },

    userName: {
        type: String,
        required: true

    },

    dateCreated: {
        timestamp: {
            type: Date,
            default: Date.now,
        },
    },

});

const thoughtSchema= new Schema ({

    thoughtText:{
        type: String, 
        required: true, 
        minLength:1, 
        maxLength: 280
    },

    userName: {
        type: String,
        required: true, 
    },
    dateCreated:{
        timestamp: {
        type: Date,
        default: Date.now, 
    },
    },

    reactions: [reactionSchema]
},
{
    timestamp: true, 
    toJSON:{
        getters:true,
    },

});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;