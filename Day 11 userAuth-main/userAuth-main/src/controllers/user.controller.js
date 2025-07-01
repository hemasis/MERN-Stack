import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshToken = async(userId) => {

}
const registerUser = asyncHandler(async (req, res) => {
  // res.status(201).json({ message: "Everything is okay" })

  // get user details ✅
  // validate data ✅
  // check if user is already exist or not? email, useername ✅
  // check for image and coverImage ✅
  // upload them to cloudinary ✅
  // craete user object ✅
  // remove password, refresh token
  // check user creation
  // return res

  const { username, fullName, email, password } = req.body
  console.log(username);

  // if(username === "") {
  //     throw new ApiError(400, "username is required")
  // }

  if (
    [username, fullName, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All field is required");
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(
      400,
      "User with this email or username is already exist"
    );
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required!!!");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar is required!!!");
  }

  const user = await User.create({
    username,
    fullName,
    email,
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url || null,
  });

  const createdUser = User.findById(user._id).select("-password -refreshToken");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong, while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user registered successfully!!!"));
});


const loginUser = asyncHandler(async (req, res) => {
  // req body -> data
  // username or email validate
  // find the user
  // password
  // /access and refresh token
  // send cookies

  
  const {email, username, password} = req.body
  console.log("email", email);

  if(!username && !email){
    throw new ApiError(400, "Username or email is required")
  }

  const user = await User.findOne({
    $or: [{email}, {username}]
  })

  if(!user){
    throw new ApiError(404, "User not found with this email or username")
  }

  res.status(200).json({ message: "Login User" });
})


const loggedInUser = User.findById(user._id).select("-password -refreshToken")

const options = {
  httpOnly: true,
  secure: true
}

return res
.status(200)
.cookie("accessToken", accessToken, options)
.cookie("refreshToken", refreshToken, options)
.json(
  new ApiResponse(200, {user: loggedInUser, accessToken, refreshToken}, "User logged in successfully")
)

export { registerUser, loginUser };