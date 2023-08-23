import asyncHandler from "../middleware/asynchHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler( async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email: email})
    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id)
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin

        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
    res.send('auth User')
})

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler( async(req, res) => {
    const {name, email, password} = req.body
    const userExist = await User.findOne({email})

    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

// @desc log out user
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler( async(req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({'message': 'Logged out successfully'})
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler( async(req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(400)
        throw new Error('No user profile found')
    }
})

// @desc Get user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler( async(req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password) {
            user.password = req.body.password
        }
        const updateUser = await user.save()
        res.status(200).json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin
        })
    } else {
        res.status(400)
        throw new Error('User not found')
    }
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







