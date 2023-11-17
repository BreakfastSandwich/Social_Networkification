const { Schema, model } = require('mongoose');
const Thoughts = require('./Thought');


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      // unique
      // valid
    },

    thoughts: {
      thoughts: [Thoughts]
    },

    friends: {
      thoughts: [userSchema]

    },
    
  },

  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const User = model('user', userSchema);
// ?? ----------------------------------
friendcount
  .virtual('fullName')
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  
  // Setter to set the first and last name
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

// ----------------------------------------



module.exports = User;
