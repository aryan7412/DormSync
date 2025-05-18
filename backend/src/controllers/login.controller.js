import { asyncHandler } from '../utils/asyncHandler.js'

const foundUser = asyncHandler(async (req,res)=>{
    res.send(200).json({
        message: 'ok'
    })
})


export { foundUser }