const { Schema, Types } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
     createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    // reactions:{
    //   reaction: [Reaction]
    // }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
