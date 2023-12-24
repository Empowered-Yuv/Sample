import express from 'express';
import {getUserListings, test, updateUser, deleteUser, getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const userRouter = express.Router();

userRouter.get('/test',test);
userRouter.post('/update/:id', verifyToken, updateUser);
userRouter.delete('/delete/:id', verifyToken, deleteUser);
userRouter.get('/listings/:id', verifyToken, getUserListings);
userRouter.get('/:id', verifyToken, getUser);
export default userRouter;