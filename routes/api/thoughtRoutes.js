const { get } = require('http');
const { route } = require('.');

const router = require('express').Router();



// get, Get by ID, Post, PUT, Delete 

const {
    getAllThoughts,
    getThoughtsId,
    postNewThought, 
    updateThought, 
    deleteThought,
} = require ('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(postNewThought);

router.route('/:thoughtId').get(getThoughtsId).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(postNewThought).delete(deleteThought);

module.exports= router;