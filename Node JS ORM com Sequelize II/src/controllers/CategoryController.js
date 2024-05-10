const { CategoryService } = require('../services/CategoryService.js')
const { Controller } = require('./Controller.js')

class CategoryController extends Controller{
   constructor(){
      super(new CategoryService())
   }
}

module.exports = { CategoryController }