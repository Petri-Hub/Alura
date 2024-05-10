const stringConverter = require('../utils/stringConverter.helper.js')

class Controller {

   constructor(serviceInstance) {
      this.service = serviceInstance
   }

   async getAll(req, res) {
      try {

         const records = await this.service.getAllRecords()

         res.status(200).send(records)

      } catch (error) {

         res.status(500).send({
            error: error.message
         })

      }
   }

   async getByID(req, res) {
      try {

         const record = await this.service.getByID(Number(req.params.id))

         res.status(200).json(record)

      } catch (error) {

         res.status(500).send({
            error: error.message
         })

      }
   }

   async getBy(req, res) {
      try {

         const record = await this.service.getBy({ where: stringConverter(req.params) })

         res.status(200).json(record)

      } catch (error) {

         res.status(500).send({
            error: error.message
         })

      }
   }

   async getAndCount(req, res) {
      try {

         const records = await this.service.getAndCountRecords()

         res.status(200).send(records)

      } catch (error) {

         res.status(500).send({
            error: error.message
         })

      }
   }

   async create(req, res) {
      try {

         const body = req.body
         const newRecord = await this.service.create(body)

         res.status(200).json(newRecord)

      } catch (error) {

         res.status(500).send({
            error: error.message
         })

      }
   }

   async update(req, res) {
      try {

         const where = stringConverter(req.params)
         const wasUpdated = await this.service.update(req.body, where)

         if (!wasUpdated) {
            res.status(400).json({
               message: 'Registro não foi atualizado.'
            })
            return
         }


         res.status(200).json({
            message: 'Atualizado com sucesso!'
         })

      } catch (error) {

         res.status(500).send({
            error: error.message
         })

      }
   }

   async delete(req, res) {
      try {

         await this.service.delete(Number(req.params.id))

         res.status(200).json({
            message: 'Deletado com sucesso!',
         })

      } catch (error) {

         res.status(500).send({
            error: error.message
         })

      }
   }

}

module.exports = { Controller }