function errorHandler (err, req, res, next){
    if(err.name === 'SequelizeValidationError'){
        let errors = err.errors.map(el =>{
            return el.message
        })
        res.status(400).json(errors)
    }else if(err.name === 'SequelizeUniqueConstraintError'){
        let errors = err.errors.map(el =>{
            return el.message
        })
        res.status(400).json(errors)
    }else if(err.name === 'customError'){
        res.status(err.status).json(err.message)
    }else if(err.name === 'JsonWebTokenError'){
        res.status(400).json({message: 'Not Authenticate'})
    }
}

module.exports = errorHandler