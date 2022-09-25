const {thought, user, Thought}= require ('../models');
const { post } = require('../routes/api');

module.exports ={
    getAllThoughts(req, res) {
        Thought.find({})
            .select('-_v')
            .then((thought)=> res.json(thought))
            .catch((err)=> res.status(500).json(err));
    },
    getThoughtsId(req, res){
        Thought.findOne({_id: req.params.thoughtId})
        .select('-_v')
        .then((thought)=>
        !thought
        ? res.status(404).json({message: 'No Thought with that ID'})
        : res.json(thought)
        )
        .catch((err)=> res.status(500).json(err));
    },
    updateThought(req, res){
        Thought.findOneAndUpdate({
        _id: req.params.thoughtId
        }, req.body)
        .then((thought)=>
        !thought
        ? res.status(400).json ({ message: 'No Thought with that ID'})
        :res.json(thought)
        )
        .catch ((err)=> res.status (500).json(err));
    }, 

    deleteThought(req, res){
        Thought.findOneAndDelete({
            id: req.params.thoughtId
         }, req.body)
         .then((thought)=>
         !thought
         ? res.status(400).json ({ message: 'No Thought with that ID'})
         :res.json(thought)
         )
         .catch ((err)=> res.status (500).json(err));

    },


    // Create a new Thought
    postNewThought(req, res){
        Thought.create(req. body)
        .then((thought)=>
        !thought
        ?res
        .status(404)
        .json({message: 'Thought Created, but found no ID with that Thought'})
        :res.json('Created Thought')
        )
        .catch((err)=>{
            console.log(err);
            res.status(500).json(err);
        });
    },



};