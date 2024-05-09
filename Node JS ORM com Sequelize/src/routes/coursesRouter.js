const { Router } = require('express')
const { CourseController } = require('../controllers/CourseController.js') 

const courseController = new CourseController()
const courseRouter = Router()

courseRouter.get('/courses', courseController.getAll.bind(courseController))
courseRouter.post('/courses', courseController.create.bind(courseController))
courseRouter.get('/courses/:id', courseController.getByID.bind(courseController))
courseRouter.put('/courses/:id', courseController.update.bind(courseController))
courseRouter.delete('/courses/:id', courseController.delete.bind(courseController))

module.exports = { courseRouter }