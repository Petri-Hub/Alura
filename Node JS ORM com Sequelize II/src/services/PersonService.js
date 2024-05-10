const dataSource = require('../database/models')
const { Services } = require('./Services.js')
const { RegistrationService } = require('../services/RegistrationService.js')

class PersonService extends Services{
   constructor(){
      super('Person')

      this.registrationService = new RegistrationService()
   }

   async getPeopleUnfiltred(){
      return await this.getAllByScope('unfiltred')
   }

   async getActiveRegistrations(id){
      const student = await this.getByID(id)
      const registrations = await student.getRegistrations()

      return registrations
   }

   async getAllRegistrations(id){
      const student = await this.getByID(id)
      const registrations = await student.getAllRegistrations()

      return registrations
   }

   async cancelUserAndRegistrations(id){
      return dataSource.sequelize.transaction(async (transaction) => {

         await this.update({ ativo: false }, { id }, transaction)
         await this.registrationService.update({ status: 'cancelado'}, { student_id: id }, transaction)

      })
   }
}

module.exports = { PersonService }