const router= require('express').Router();


const {
    getAllUsers,
    getSingleUser,
    postNewUser, 
    UpdateUser,
    deleteUser,
}= require ('../../controllers/userController');

router.route('/').get(getAllUsers).post(postNewUser);

router.route('/:userId').get(getSingleUser).put(UpdateUser).delete(deleteUser);

router.route('/:userId/friends/:friendsId').post(postNewUser).delete(deleteUser);



module.exports= router;