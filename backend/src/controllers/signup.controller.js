import { asyncHandler } from '../utils/asyncHandler.js'

const signupUser = asyncHandler(async (req,res)=>{
    // get user details from frontend
    // validation - not empty
    // check if user already exists: email,mobileNumber
    // check for images, check for IdentityCard
    // upload them to cloudinary, IdentityCard, image
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


})


export { signupUser }