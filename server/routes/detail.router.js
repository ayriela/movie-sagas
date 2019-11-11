const express = require('express');
const router = express.Router();
const  axios= require('axios');
const pool = require('../modules/pool');

/* router.get('/:id', (req, res) => {
    const queryText = `select m.id, m.title, m.poster, m.description, 
    array_to_string(array(
        select g."name" FROM genres g 
        JOIN movie_genre mg ON (mg.genre_id=g.id) 
        JOIN movies m ON (mg.movie_id=m.id) 
        WHERE m.id=$1), 
        ', ') AS genres 
    from movies m 
    WHERE m.id=$1`;
    const queryValues=[req.params.id]
    pool.query(queryText, queryValues)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on get detail query ${error}`);
            res.sendStatus(500);
        });
}); */

router.get('/:id', (req, res) => {
    const queryText = `select m.id, m.title, m.poster, m.description, 
  array(
        select g."name" FROM genres g 
        JOIN movie_genre mg ON (mg.genre_id=g.id) 
        JOIN movies m ON (mg.movie_id=m.id) 
        WHERE m.id=$1) AS genres 
    from movies m 
    WHERE m.id=$1`;
    const queryValues=[req.params.id]
    pool.query(queryText, queryValues)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on get detail query ${error}`);
            res.sendStatus(500);
        });
});


router.put('/', (req, res) => {
    const queryText = `UPDATE movies SET title=$2, description=$3
    WHERE id=$1`;
    const queryValues=[req.body.movieId, req.body.title, req.body.description];
    pool.query(queryText, queryValues)
        .then( (result) => {
            res.sendStatus(200);
        })
        .catch( (error) => {
            console.log(`Error on update details query ${error}`);
            res.sendStatus(500);
        });
});


module.exports = router;