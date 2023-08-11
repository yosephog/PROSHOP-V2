import express from "express";
const router = express.Router()
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deletUser,
    getUserById,
    updateUser
} from '../controllers/userController.js'
import { getProductById } from "../controllers/productController.js";


router.route('/').post(registerUser).get(getUsers)
router.post('/logout', logoutUser)
router.post('/login', authUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').delete(deletUser).get(getUserById).put(updateUser)

export default router