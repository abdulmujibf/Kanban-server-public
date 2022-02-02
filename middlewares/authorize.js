const {Kanban} = require('..//models/index')

function authorize(req, res, next){
    let id = +req.params.id
    let UserId = req.decoded.id
    Kanban.findOne({where: {id}})
    .then(kanban => {
        if(kanban){
            if(kanban.UserId === UserId){
                next()
            }else{
                throw {
                    name: 'customError',
                    status: 401,
                    message: 'Not Authorize'
                }
            }
        }else{
            throw {
                name: 'customError',
                status: 404,
                message: 'Not Found'
            }
        }
    })
    .catch(err => {
        next(err)
    })
}

module.exports = authorize