const {createUser, getUsers, getUserById, updateUserNameById, deleteUserById} = require("./user.controller");
const {checkToken} = require("../middleware/ValidateToken");
const userRouter = require('express').Router();

userRouter.post('/', checkToken,  createUser)
userRouter.get('/', checkToken,  getUsers)
userRouter.get('/:id', checkToken,  getUserById)
userRouter.patch('/:id', checkToken,  updateUserNameById)
userRouter.delete('/:id', checkToken,  deleteUserById)

module.exports = {userRouter};