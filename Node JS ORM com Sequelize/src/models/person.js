'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
   class Person extends Model {

      static associate(models) {
         Person.hasMany(models.Course, {
            foreignKey: 'owner_id'
         })
         Person.hasMany(models.Registration, {
            foreignKey: 'student_id'
         })
      }

   }
   Person.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING
   }, {
      sequelize: sequelize,
      modelName: 'Person',
      tableName: 'people'
   })

   return Person
}