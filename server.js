const express = require('express');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
app.listen(`${PORT}`, () => console.log(`server started on ${PORT}`))


const { Reaction } = require('./Reatction');
const { Thought } = require('./Thought');
const { User } = require('./User');
const Thoughts = require('./models/Thought');




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-users', async (req, res) => {
  try {
    // Using model in route
    const result = await User.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.get('/all-thoughts', async (req, res) => {
  try {
    // Using model in route
    const result = await Thoughts.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
