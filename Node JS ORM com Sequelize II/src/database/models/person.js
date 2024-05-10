'use strict'

const { isCPFValid } = require('../../utils/isCPFValid.helper.js')
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
   class Person extends Model {

      static associate(models) {
         Person.hasMany(models.Course, {
            foreignKey: 'owner_id'
         })
         Person.hasMany(models.Registration, {
            foreignKey: 'student_id',
            scope: { status: 'matriculado' },
            as: 'registrations'
         })
         Person.hasMany(models.Registration, {
            foreignKey: 'student_id',
            as: 'allRegistrations'
         })
      }

   }

   Person.init({
      nome: {
         type: DataTypes.STRING,
         validate: {
            len: {
               args: [3, 30],
               msg: 'O campo nome deve ter no mínimo 3 caracteres e no máximo 30.'
            }
         }
      },
      email: {
         type: DataTypes.STRING,
         validate: {
            isEmail: {
               args: true,
               msg: 'Email inválido.'
            }
         }
      },
      cpf: {
         type: DataTypes.STRING,
         validate: {
            isCPFValid: (cpf) => {
               if (!isCPFValid(cpf)) {
                  throw new Error('CPF inválido.')
               }
            }
         }
      },
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING
   }, {
      sequelize: sequelize,
      modelName: 'Person',
      tableName: 'people',
      paranoid: true,
      defaultScope: {
         where: {
            ativo: true
         }
      },
      scopes: {
         'unfiltred': {
            where: {}
         }
      }
   })

   return Person
}