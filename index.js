const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');


// listen to "/api/movies --> returns an array containing all movies"
app.get('/api/movies', (req, res) => {

  // connection to the database, and selection of movies
  connection.query('SELECT * from movie', (err, results) => {

    if (err) {
    //   console.log(err);
      //  If an error has occurred, then the user is informed of the error
      res.status(500).send('Erreur lors de la récupération des employés');
    } else {

      // If everything went well, we send the result of the SQL query as JSON.
      res.json(results);
    }
  });
});

// listen to /api/movies/names --> returns an array containing only the names of the movies.
app.get('/api/movies/name', (req, res) => {

    // connection to the database, and selection of movies
    connection.query('SELECT name from movie', (err, results) => {
  
      if (err) {
      //   console.log(err);
        //  If an error has occurred, then the user is informed of the error
        res.status(500).send('Erreur lors de la récupération des employés');
      } else {
  
        // If everything went well, we send the result of the SQL query as JSON.
        res.json(results);
      }
    });
  });



app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
