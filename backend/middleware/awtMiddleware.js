import jwt from "jsonwebtoken";
import asyncHandler from "./asynchHandler.js";
import User from "../models/userModel.js";

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
    let token;
    // read the jwt from the cookie
    token = req.cookies.jwt
    if (token) {
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decode.userId).select('-password')
            next()

        } catch(error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    } else {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

// Admin middleware

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next()
    } else {
        res.status(401)
        throw new Error('Not authorized as admin')
    }
}

export { protect, admin}