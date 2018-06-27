const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const ActivityLog = require('../models/ActivityLog')

router.get('/', (request, response) => {
  Users
    .query()
    .eager('[activities, logs]')
    .then(users => {
      console.log(users)
      users.map(person => {
        person.activities = person.activities.map(activity => {
          return activity.activity_name
        })

        person.wins = person.logs.filter(log => {
          return log.win
        }).length
        return person
      })
      response.json(users)
    })

})

// queries.read(request.params.id).then(routes => {
//     routes
//       ? response.json({routes})
//       : response.status(404).json({message: 'Not found'})
//   }).catch(next)
// })
//
// router.post("/", (request, response, next) => {
//   queries.create(request.body).then(routes => {
//     response.status(201).json({routes: routes})
//   }).catch(next)
// })
//
// router.delete("/:id", (request, response, next) => {
//   queries.delete(request.params.id).then(() => {
//     response.status(204).json({deleted: true})
//   }).catch(next)
// })
//
// router.put("/:id", (request, response, next) => {
//   queries.update(request.params.id, request.body).then(routes => {
//     response.json({routes: routes[0]})
//   }).catch(next)
// })

module.exports = router
