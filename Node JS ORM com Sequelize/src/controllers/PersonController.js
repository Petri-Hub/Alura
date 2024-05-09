const { PersonService } = require('../services/PersonService.js')
const { Controller } = require('./Controller.js')

class PersonController extends Controller{
   constructor(){
      super(new PersonService())
   }
}

module.exports = { PersonController }