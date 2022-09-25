const router = require ('express').Router();
//User and Thought Routes
const userRoutes = require('./userRoutes');
const thoughtRoutes= require('./thoughtRoutes');


router.use('/users', userRoutes )
router.use('/thoughts', thoughtRoutes)

module.exports= router;