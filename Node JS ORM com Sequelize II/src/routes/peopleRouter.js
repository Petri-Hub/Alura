const { Router } = require('express')
const { PersonController } = require('../controllers/PersonController.js') 
const { RegistrationController } = require('../controllers/RegistrationController.js') 

const personController = new PersonController()
const registrationController = new RegistrationController()
const peopleRouter = Router()

peopleRouter.get('/people', personController.getAll.bind(personController))
peopleRouter.get('/people/all', personController.create.bind(personController))
peopleRouter.get('/people/registrations/full', registrationController.getAndCountFullRegistrations.bind(registrationController))
peopleRouter.post('/people', personController.create.bind(personController))
peopleRouter.get('/people/:id', personController.getByID.bind(personController))
peopleRouter.put('/people/:id', personController.update.bind(personController))
peopleRouter.delete('/people/:id', personController.delete.bind(personController))

peopleRouter.get('/people/:student_id/registrations', personController.getActiveRegistrations.bind(personController))
peopleRouter.get('/people/:student_id/registrations/all', personController.getAllRegistrations.bind(personController))
peopleRouter.get('/people/:student_id/registrations/confirmed', registrationController.getAndCount.bind(registrationController))
peopleRouter.get('/people/:student_id/registrations/:id', registrationController.getBy.bind(registrationController))
peopleRouter.post('/people/:student_id/registrations', registrationController.create.bind(registrationController))
peopleRouter.put('/people/:student_id/registrations/:id', registrationController.update.bind(registrationController))
peopleRouter.delete('/people/:student_id/registrations/:id', registrationController.delete.bind(registrationController))

module.exports = { peopleRouter }