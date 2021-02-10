const {User} = require('../models')
const {comparePass} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')

class ControllerUser {
    static register(req, res, next){
        let fullName = req.body.fullName || ''
        let email = req.body.email || ''
        let password = req.body.password || ''
        User.create({fullName, email, password})
        .then(data => {
            res.status(201).json({id: data.id, fullName, email})
        })
        .catch(err => { 
            next(err)
        })
    }

    static login(req, res, next){
        let email = req.body.email || ''
        let password = req.body.password || ''
        User.findOne({where: {email}})
        .then(user => {
            if(user){
                let compare = comparePass(password, user.password)
                if(compare){
                    let access_token = generateToken({id: user.id, email})
                    res.status(200).json({id: user.id, fullName: user.fullName, email, access_token})
                }else{
                    throw {
                        name: 'customError',
                        status: 400,
                        message: 'Email / Password is Invalid'
                    }
                }
            }else{
                throw {
                    name: 'customError',
                    status: 400,
                    message: 'Email / Password is Invalid'
                }
            }
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ControllerUser