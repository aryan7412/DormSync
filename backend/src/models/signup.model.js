import mongoose,{Schema} from "mongoose"
import bcrypt from 'bcrypt'
import jwt, { sign } from 'jsonwebtoken'
//aggregate paginate

const signupSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true //better optimization
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        age: {
            type: Number,
            required: true
        },
        mobileNumber: {
            type: Number,
            required: true,
            index: true
        },
        photo: {
            type: String,
            required: true
        },
        photoIdentityCard: {
            type: String,
            required: true,
            index: true
        },
        address: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: [true,'Password is required']
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

signupSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password = bcrypt.hash(this.password,10)
    next()
})

signupSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

signupSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            fullName: this.fullName,
            email: this.email,
            mobileNumber: this.mobileNumber,
            age: this.age,
            address: this.address
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
signupSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const Signup = mongoose.model("Signup",signupSchema)