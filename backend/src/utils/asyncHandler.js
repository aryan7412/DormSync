const asyncHandler = (requestHandler) =>{
    return (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((e)=>{
            console.log("Error: ",e)
        })
    }
}

export {asyncHandler}