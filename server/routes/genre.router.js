const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM genres ORDER BY id ASC`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on select genre query ${error}`);
            res.sendStatus(500);
        });
});


router.post('/', (req,res)=>{
    const queryText = `INSERT INTO "movie_genre" ("genre_id", "movie_id") VALUES ($1, $2)`;
    console.log(req.body);
    const queryValues=[req.body.genreId, req.body.movieId];
    pool.query(queryText,queryValues)
        .then( () => {
            res.sendStatus(200);
        })
        .catch( (error) => {
            console.log(`Error on insert movie_genre query ${error}`);
            res.sendStatus(500);
        });

});

module.exports = router;