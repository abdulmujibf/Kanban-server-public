const jwt = require('jsonwebtoken')

function generateToken(payload){
    return jwt.sign(payload, process.env.SECRET)
}

function verifyToken(accessToken){
    return jwt.verify(accessToken, process.env.SECRET)
}

module.exports = {
    generateToken,
    verifyToken
}