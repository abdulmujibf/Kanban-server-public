const {Kanban, User} = require('../models/index')

class ControllerKanban {
    static getAll(req, res, next){
        Kanban.findAll({
            order: [["updatedAt", 'ASC']],
            include: [User]
        })
        .then(kanbans => {
            res.status(200).json(kanbans)
        })
        .catch(err => {
            next(err)
        })
    }
    
    static addKanban(req, res, next){
        let UserId = req.decoded.id
        let title = req.body.title || ''
        let description = req.body.description || ''
        let category = req.body.category || "backlog"
        Kanban.create({title, description, category, UserId})
        .then(kanban => {
            res.status(201).json(kanban)
        })
        .catch(err => {
            next(err)
        })
    }

    static getById(req, res, next){
        let id = +req.params.id
        Kanban.findOne({where: {id}})
        .then(kanban =>{
            res.status(200).json(kanban)
        })
        .catch(err => {
            next(err)
        })
    }

    static editKanban(req, res, next){
        let id = +req.params.id
        let title = req.body.title || ''
        let description = req.body.description || ''
        let category = req.body.category || ''
        Kanban.update({title, description, category}, {where: {id}, returning: true})
        .then(kanban => {
            res.status(200).json(kanban[1])
        })
        .catch(err => {
            next(err)
        })
    }

    static UpdateKanban(req, res, next){
        let id = +req.params.id
        let category = req.body.category || ''
        Kanban.update({category}, {where: {id}, returning: true})
        .then(kanban => {
            res.status(200).json(kanban[1])
        })
        .catch(err => {
            next(err)
        })
    }

    static deleteKanban(req, res, next){
        let id = +req.params.id
        Kanban.destroy({where: {id}})
        .then(() => {
            res.status(200).json({message: 'Delete Kanban Success'})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ControllerKanban