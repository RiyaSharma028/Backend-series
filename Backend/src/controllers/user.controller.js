const registeruser = async(req , res) =>{
    try {
        res.status(200).json({
            message : "ok"
        })
    } catch (error) {
         res.status(500).son({
            message : error.message
         })
    }
}

export default registeruser;