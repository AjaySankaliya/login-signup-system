const jwt=require('jsonwebtoken')
require('dotenv').config()
const secret=process.env.SECRET_KEY

const setUser=(user)=>{
    return(jwt.sign({
        _id:user._id,
        email:user.email,
    },secret,{expiresIn: '1m'}))
}

const getUser=(token)=>{
    if(!token) return null;
    try {
        return jwt.verify(token,secret)
    } catch (error) {
        return null
    }
}

module.exports={setUser,getUser}