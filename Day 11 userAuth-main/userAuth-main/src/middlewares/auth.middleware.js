import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/asyncHandler.js";
import { asyncHandler } from '../utils/asuncHandler.js';

export const verifyJWT = asyncHandler(async (req, res, next) => {
    const token = 
        req.cookie?.accessToken || 
        req.header("Authorization")?.replace("Bearer ", "");

    if(!token){
        throw new ApiError(401, "Unauthorized request")
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const user = await User.findById(decodedToken?._id).select("password -refreshToken")

    if(!user){
        throw new ApiError(401, "Invalid Access Token")
    }

    req.user = user;
}) 