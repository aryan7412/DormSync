import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from '../utils/Cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req,res)=>{
    // get user details from frontend
    // validation - not empty
    // check if user already exists: email,mobileNumber
    // check for images, check for PhotoIdentityCard
    // upload them to cloudinary, PhotoIdentityCard
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

     // get user details from frontend
    const {fullName,email,age,mobileNumber,address,password} = req.body
    console.log("email:",email);

    // validation - not empty //remember validation in ITA class do that
    if([fullName,email,age,mobileNumber,address,password].some((field)=>field.trim()==='')){
        throw new ApiError(400,"All fields are required")
    }

    // check if user already exists: email,mobileNumber
    const existedUser = await User.findOne({
        $or:[{ email },{ mobileNumber }]
    })
    if(existedUser){
        throw new ApiError(409,"User with email or mobile Number Already Exists")
    }
    console.log(req.files)
    // check for profileImage, IdentityCard
    const profileImageLocalPath = req.files?.profileImage[0]?.path
    const photoIdentityCardLocalPath = req.files?.photoIdentityCard[0]?.path
    if(!profileImageLocalPath || !photoIdentityCardLocalPath){
        throw new ApiError(400,"Profile Photo and photoIdentityCard is required")
    }

    // upload them to cloudinary, PhotoIdentityCard
    const profileImage = await uploadOnCloudinary(profileImageLocalPath)
    const photoIdentityCard = await uploadOnCloudinary(photoIdentityCardLocalPath)
    if(!profileImage || !photoIdentityCard){
        throw new ApiError(400,"Profile Photo and photoIdentityCard is required")
    }

    // create user object - create entry in db
    const user = await User.create({
        fullName,
        email,
        age,
        mobileNumber,
        address,
        password,
        profileImage: profileImage.url,
        photoIdentityCard: photoIdentityCard.url
    })

    // remove password and refresh token field from response
    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    // check for user creation
    if(!createdUser){
        throw new ApiError(500,"Something Went wrong While registering the user")
    }

    // return response
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Successfully Registered")
    )
})


export { registerUser }