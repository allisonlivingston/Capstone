exports.up = function(knex, Promise) {
  return knex.schema.createTable('activities', (table) => {
    table.increments('activity_id')
    table.text('activity_name')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('activities')
}
