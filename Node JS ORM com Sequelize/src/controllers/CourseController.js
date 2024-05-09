const { CourseService } = require('../services/CourseService.js')
const { Controller } = require('./Controller.js')

class CourseController extends Controller{
   constructor(){
      super(new CourseService())
   }
}

module.exports = { CourseController }