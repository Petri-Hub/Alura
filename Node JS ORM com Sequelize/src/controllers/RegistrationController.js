const { RegistrationService } = require('../services/RegistrationService.js')
const { Controller } = require('./Controller.js')

class RegistrationController extends Controller{
   constructor(){
      super(new RegistrationService())
   }
}

module.exports = { RegistrationController }