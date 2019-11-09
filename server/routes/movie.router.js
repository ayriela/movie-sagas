const express = require('express');
const router = express.Router();
const  axios= require('axios');
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM movies ORDER BY id ASC`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;