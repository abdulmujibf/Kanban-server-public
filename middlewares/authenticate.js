const {User} = require('../models/index')
const {verifyToken} = require('../helpers/jwt')

function authenticate(req, res, next){
    let access_token = req.headers.access_token
    try{
        let decoded = verifyToken(access_token)
        User.findOne({where: {id: decoded.id}})
        .then(user => {
            if(user) {
                req.decoded = decoded
                next()
            }else{
                throw {
                    name: 'customError',
                    status: 400,
                    message: 'Not Authenticate'
                }
            }
        })
        // .catch(err => {
        //     next(err)
        // })
    }
    catch(err){
        next(err)
    }
}

module.exports = authenticate