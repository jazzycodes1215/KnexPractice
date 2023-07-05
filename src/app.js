const express = require('express');

const app = express();
const PORT =  3000;
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

app.post('/', (req, res) => {
  res.send('POST request to homepage')

  knex('client')
    .insert({id: req.params.id, name: req.params.name})
    .then(data => console.log(data))

    console.log('done!')
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});