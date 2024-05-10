const { RegistrationService } = require('../services/RegistrationService.js')
const { Controller } = require('./Controller.js')
const Sequelize = require('sequelize')

class RegistrationController extends Controller{
   constructor(){
      super(new RegistrationService())
   }

   async getAndCountRegistrations(req, res){
      try{

         return await this.service.getAndCountRegistrations({
            where: {
               student_id: Number(req.params.student_id),
               status: 'matriculado'
            }
         })

      } catch(error){

         res.status(500).send({ message: error })

      }
   }

   async getAndCountFullRegistrations(req, res){
      try{

         return await this.service.getAndCountRegistrations({
            where: { status: 'matriculado' },
            attributes: ['course_id'],
            group: ['course_id'],
            having: Sequelize.literal(`count(course_id) >= ${2}`)
         })

      } catch(error){

         res.status(500).send({ message: error })

      }
   }
}

module.exports = { RegistrationController }