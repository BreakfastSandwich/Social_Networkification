const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
// const Thoughts = require('./Thought');


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      // trim: true,
    },

    email: {
      type: String,
      required: true,
      // unique
      // valid
    },

    // thoughts: {
    //   thoughts: [Thoughts]
    // },

    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Student',
    //   },
    // ],
  },

  // {
  //   toJSON: {
  //     getters: true,
  //     virtuals: true,
  //   },
  // }
);



// friendcount
//   .virtual('friends')
//   .get(function () {
//     return `${this.friends.length} `;
//   })



const User = model('user', userSchema);

module.exports = User;
