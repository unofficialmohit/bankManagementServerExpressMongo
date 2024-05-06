const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');
router.get('/getAllUsers',userController.getAllUsers);
router.post('/addNewUser',userController.addNewUser);
router.put('/updateUser/:accountAddress',userController.updateUser);
router.get('/getUserByAddress/:accountAddress',userController.getUserByAddress);
module.exports=router;