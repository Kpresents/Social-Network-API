const apiRoutes= require ('./api');
const router = require ('express').Router();


router.use('/api', apiRoutes);
router.use(async(req, res) => {
    res.status(404).send('Incorrect Route: 404 Error')});

module.exports= router;