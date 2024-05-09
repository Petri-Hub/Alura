const dataSource = require('../models')

class Services {
   constructor(modelName) {
      this.model = modelName
   }

   async getAllRecords() {
      return dataSource[this.model].findAll()
   }

   async getByID(id){
      return dataSource[this.model].findByPk(id)
   }

   async create(data){
      return dataSource[this.model].create(data)
   }

   async delete(id){
      return dataSource[this.model].destroy({ where: { id }})
   }

   async update(data, id) {
      const updatedRows = await dataSource[this.model].update(data, { where: { id } })
      const wasUpdated = updatedRows[0] > 0

      return wasUpdated
   }
}

module.exports = { Services }