const {User} = require('../models')
const {comparePass} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

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

    static googleLogin(req, res, next){
        let {idToken} = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let email = ''
        let googleUser
        client.verifyIdToken({
            idToken,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            const payload = ticket.getPayload()
            googleUser = payload
            email = payload.email
            return User.findOne({where: {email}}) 
        })
        .then(user => {
            if(user){
                const access_token = generateToken({id: user.id, email})
                res.status(200).json({id: user.id, fullName: user.fullName, email: user.email, access_token})
            }else{
                return User.create({fullName: googleUser.name, email, password: 'nobodyknows'})
            }
        })
        .then(newUser => {
            const access_token = generateToken({id: newUser.id, email})
            res.status(201).json({id: newUser.id, fullName: newUser.fullName, email: newUser.email, access_token})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ControllerUser