const { Router } = require('express')
const { RegistrationController } = require('../controllers/RegistrationController.js') 

const registrationController = new RegistrationController()
const registrationRouter = Router()

registrationRouter.get('/registration', registrationController.getAll.bind(registrationController))
registrationRouter.post('/registration', registrationController.create.bind(registrationController))
registrationRouter.get('/registration/:id', registrationController.getByID.bind(registrationController))
registrationRouter.put('/registration/:id', registrationController.update.bind(registrationController))
registrationRouter.delete('/registration/:id', registrationController.delete.bind(registrationController))

module.exports = { registrationRouter }