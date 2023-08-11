import asyncHandler from "../middleware/asynchHandler.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler( async(req, res) => {
    res.send('auth User')
})

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler( async(req, res) => {
    res.send('register User')
})

// @desc log out user
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler( async(req, res) => {
    res.send('logout User')
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler( async(req, res) => {
    res.send('get User profile')
})

// @desc Get user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler( async(req, res) => {
    res.send('get User profile')
})

// @desc Get users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler( async(req, res) => {
    res.send('get Users')
})

// @desc Get user by id
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler( async(req, res) => {
    res.send('get User by id')
})

// @desc Delete users
// @route DELETE /api/users/:id
// @access Private/Admin
const deletUser = asyncHandler( async(req, res) => {
    res.send('delete Users')
})

// @desc update users
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler( async(req, res) => {
    res.send('update Users')
})
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deletUser,
    getUserById,
    updateUser
}







