'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
   class Registration extends Model {

      static associate({ Person, Course }) {
         Registration.belongsTo(Person, {
            foreignKey: 'student_id'
         })

         Registration.belongsTo(Course, {
            foreignKey: 'course_id'
         })
      }

   }
   Registration.init({
      status: DataTypes.STRING
   }, {
      sequelize,
      modelName: 'Registration',
      tableName: 'registrations',
      paranoid: true,
   })
   
   return Registration
}