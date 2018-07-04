const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const ActivityLog = require('../models/ActivityLog')
const queries = require('../queries')


router.get('/', (request, response, next) => {
  Users.query().eager('[activities, activity_logs]')
    .then(users => {
      users.map(person => {
        person.activities = person.activities.map(activity => {
          return activity.activity_name
        })

        person.wins = person.activity_logs.filter(log => {
          return log.win
        }).length
        return person
      })
      response.json(users)
    })
})

router.get('/:user_id', (request, response, next) => {
  Users.query().eager('[activities, activity_logs]').select().where('user_id', request.params.user_id).skipUndefined()
  .then(users => {
    users.map(person => {
      person.activities = person.activities.map(activity => {
        return activity.activity_name
      })

      person.wins = person.activity_logs.filter(log => {
        return log.win
      }).length
      return person
    })
    response.json(users)
  })
})

module.exports = router
