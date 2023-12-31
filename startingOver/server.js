const express = require('express');
const app = express();
const db = require('./config/connection');
const cwd = process.cwd();

const routes = require('./routes');
app.use(routes);

const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


db.on('error', (error) => console.error(error))

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  