class Controller {

   constructor(serviceInstance) {
      this.service = serviceInstance
   }

   async getAll(req, res) {
      try {

         const records = await this.service.getAllRecords()

         res.status(200).send(records)

      } catch (error) {

         console.log(error)

      }
   }

   async getByID(req, res) {
      try {

         const record = await this.service.getByID(Number(req.params.id))

         res.status(200).json(record)

      } catch (error) {

         console.log(error)

      }
   }

   async create(req, res) {
      try {

         const body = req.body
         const newRecord = await this.service.create(body)

         res.status(200).json(newRecord)

      } catch (error) {

         console.log(error)

      }
   }

   async update(req, res) {
      try {

         const wasUpdated = await this.service.update(req.body, Number(req.params.id))

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

         console.log(error)

      }
   }

   async delete(req, res) {
      try {

         await this.service.delete(Number(req.params.id))

         res.status(200).json({
            message: 'Deletado com sucesso!',
         })

      } catch (error) {

         console.log(error)

      }
   }

}

module.exports = { Controller }