const { Model } = require('objection')
const environment = process.env.NODE_ENV || 'development'
const knexConfig = require('./knexfile')[environment]
const knex = require('knex')(knexConfig)

Model.knex(knex)

module.exports = knex
