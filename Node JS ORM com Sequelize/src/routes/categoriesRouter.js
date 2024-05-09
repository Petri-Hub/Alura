const { Router } = require('express')
const { CategoryController } = require('../controllers/CategoryController.js') 

const categoryController = new CategoryController()
const categoryRouter = Router()

categoryRouter.get('/category', categoryController.getAll.bind(categoryController))
categoryRouter.post('/category', categoryController.create.bind(categoryController))
categoryRouter.get('/category/:id', categoryController.getByID.bind(categoryController))
categoryRouter.put('/category/:id', categoryController.update.bind(categoryController))
categoryRouter.delete('/category/:id', categoryController.delete.bind(categoryController))

module.exports = { categoryRouter }