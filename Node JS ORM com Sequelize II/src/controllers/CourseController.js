const { Op } = require('sequelize')
const { CourseService } = require('../services/CourseService.js')
const { Controller } = require('./Controller.js')

class CourseController extends Controller{
   constructor(){
      super(new CourseService())
   }

   async getCoursesByTimeInterval(req, res){
      try{

         const { initalDate, finalDate } = req.query  

         const where = {}

         if(initalDate || finalDate) where.created = {}
         if(initalDate) where.created[Op.gte] = initalDate
         if(finalDate) where.created[Op.lte] = finalDate

         this.service.getAllRecords(where)

      } catch(error){

         res.status(500).send({ message: 'Erro interno do servidor.'})

      }
   }
}

module.exports = { CourseController }