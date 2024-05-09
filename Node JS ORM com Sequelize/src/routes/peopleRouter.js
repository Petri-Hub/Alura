const { Router } = require('express')
const { PersonController } = require('../controllers/PersonController.js') 

const personController = new PersonController()
const peopleRouter = Router()

peopleRouter.get('/people', personController.getAll.bind(personController))
peopleRouter.post('/people', personController.create.bind(personController))
peopleRouter.get('/people/:id', personController.getByID.bind(personController))
peopleRouter.put('/people/:id', personController.update.bind(personController))
peopleRouter.delete('/people/:id', personController.delete.bind(personController))

module.exports = { peopleRouter }