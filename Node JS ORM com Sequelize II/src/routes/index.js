const express = require('express')
const { peopleRouter } = require('./peopleRouter.js')
const { courseRouter } = require('./coursesRouter.js')
const { registrationRouter } = require('./registrationsRouter.js')
const { categoryRouter } = require('./categoriesRouter.js')

module.exports = (app) => {
   app.use(
      express.json(), 
      peopleRouter,
      categoryRouter,
      courseRouter,
      registrationRouter
   ) 
} 