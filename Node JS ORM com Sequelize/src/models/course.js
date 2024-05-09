'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
   class Course extends Model {

      static associate(models) {
         Course.belongsTo(models.Category, {
            foreignKey: 'category_id'
         })
         Course.belongsTo(models.Person, {
            foreignKey: 'owner_id'
         })
      }

   }
   Course.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      created: DataTypes.DATEONLY
   }, {
      sequelize,
      modelName: 'Course',
      tableName: 'courses',
   })
   
   return Course
}