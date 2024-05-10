const { PersonService } = require('../services/PersonService.js')
const { Controller } = require('./Controller.js')

class PersonController extends Controller {
   constructor() {
      super(new PersonService())
   }

   async getAllPeopleUnfiltred(req, res) {
      try {

         const allPeople = await this.service.getAllByScope('unfiltred')

         res.status(200).json(allPeople)

      } catch (error) {

         res
            .status(500)
            .send({ message: 'Error interno do servidor' })

      }
   }

   async getActiveRegistrations(req, res) {
      try {

         const registrations = await this.service.getActiveRegistrations(req.params.student_id)

         res.status(200).json(registrations)

      } catch (error) {

         res
            .status(500)
            .send({ message: 'Error interno do servidor' })

      }
   }

   async getAllRegistrations(req, res) {
      try {

         const registrations = await this.service.getAllRegistrations(req.params.student_id)

         res.status(200).json(registrations)

      } catch (error) {

         res
            .status(500)
            .send({ message: 'Error interno do servidor' })

      }
   }

   async cancelUserRecord(req, res){
      try{

         const { student_id } = req.params

         await this.service.cancelUserAndRegistrations(Number(student_id))

         res.status(200).send({ message: 'Usuário cancelador com sucesso!' })

      } catch(error){

         res.status(500).send({ message: error })

      }
   }
}

module.exports = { PersonController }