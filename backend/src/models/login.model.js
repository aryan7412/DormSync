import mongoose,{Schema} from 'mongoose'
import bcrypt from 'bcryt'

const loginSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        password: {
            type: String,
            required: [true,'Password is required']
        },
        mobileNumber: {
            type: Number,
            required: true,
            index: true
        },
    },
    {
        timestamps: true
    }
)

loginSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password = bcrypt.hash(this.password,10)
    next()
})

loginSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

export const Login = mongoose.model("Login",loginSchema)