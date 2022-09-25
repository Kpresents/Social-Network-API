const { User, Thought } = require('../models')
//does thought model belong here too?


module.exports = {
    //get All users 
    getAllUsers(req, res) {
        User.find()
            .populate({ path: 'thoughts', select: '-_v' })
            .populate({ path: 'friends', select: '-_v' })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
//GET Single User
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-_v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No User with that ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));

    },


    UpdateUser (req, res){
        User.findOneAndUpdate({
            _id: req.params.userId
        },req.body)

        .then((user)=>
        !user
        ? res.status(400).json({message: 'No User with that ID'})
       :res.json(user)
       )
       .catch((err)=> res.status (500).json(err));
    }, 
//Delete a User
    deleteUser (req, res){
        User.findOneAndDelete({
            _id: req.params.userId
        }, req.body)
        .then((user)=>
        !user
        ? res.status(400).json({ message: 'No User with that ID'})
        :res.json (user)
        )
        .catch((err)=> res.status (500).json(err));

    },
    

//Create a User 
    postNewUser(req, res) {
        User.create(req. body)
        .then((user)=>
        !user
        ?res
        .status (404)
        .json({message: 'No ID associated with User'})
        :res.json('Created User')
        )
        .catch ((err)=>{
            console.log(err);
            res.status(500).json(err);
        });
    },
};