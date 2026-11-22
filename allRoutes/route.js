const express=require('express')
const userController=require('../controller/userController')

const route=new express.Router()

route.post('/add-user',userController.addUsersController)

//View All User
route.get('/view-user',userController.viewUserController)

//Edit User
route.put('/edit-user/:id',userController.editUserController)

//Delete User
route.delete('/delete-user/:id',userController.deleteUserController)


module.exports=route