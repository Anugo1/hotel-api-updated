const jwt = require("jsonwebtoken");
const User = require("../models/user.model")

const auth = async (req, res, next)=> {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.SECRET_SIGNATURE);
        const user = await User.findOne({_id: decoded._id,  "tokens.token": token})
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
       next();
    } catch (error) {
        res.status(401).send({success: false, error: "Please authenticate"});
    }
   
}

module.exports = auth