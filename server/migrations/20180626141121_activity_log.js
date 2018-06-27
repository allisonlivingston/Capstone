exports.up = function(knex, Promise) {
  return knex.schema.createTable('activity_log', (table) => {
    table.increments('game_id')
    table.integer('activity_id')
    table.integer('user_id')
    table.text('game_name')
    table.boolean('win')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('activity_log')
}
