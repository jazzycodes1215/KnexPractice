const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json());

app.get('/', (request, response) => {
    response.send('app running!')
})

app.get('/clients', function(req, res) {
  knex('client')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});