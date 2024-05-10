const dataSource = require('../database/models')

class Services {
   constructor(modelName) {
      this.model = modelName
   }

   async getAllRecords(where = {}) {
      return dataSource[this.model].findAll({ where })
   }

   async getAllByScope(scopeName) {
      return dataSource[this.model].scope(scopeName).findAll()
   }

   async getAndCountRecords(options){
      return dataSource[this.model].findAndCountAll(options)
   }

   async getByID(id) {
      return dataSource[this.model].findByPk(id)
   }

   async getBy(where) {
      return dataSource[this.model].findOne({ where })
   }

   async create(data) {
      return dataSource[this.model].create(data)
   }

   async delete(id) {
      return dataSource[this.model].destroy({ where: { id } })
   }

   async update(data, where, transaction = {}) {
      const updatedRows = await dataSource[this.model].update(data, { where, transaction })
      const wasUpdated = updatedRows[0] > 0

      return wasUpdated
   }
}

module.exports = { Services }