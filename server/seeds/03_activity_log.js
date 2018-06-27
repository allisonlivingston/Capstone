exports.seed = function(knex, Promise) {
  return knex('activity_log').del()
    .then(function () {
      return knex('activity_log').insert([
        {activity_id: 1, user_id: 1, game_name: 'Game 1', win: false},
        {activity_id: 2, user_id: 1, game_name: 'Game 1', win: false},
        {activity_id: 3, user_id: 1, game_name: 'Game 3', win: true},
        {activity_id: 2, user_id: 2, game_name: 'Game 1', win: true},
        {activity_id: 3, user_id: 2, game_name: 'Game 3', win: false},
        {activity_id: 3, user_id: 3, game_name: 'Game 3', win: false},
        {activity_id: 4, user_id: 3, game_name: 'Game 1', win: true},
        {activity_id: 3, user_id: 4, game_name: 'Game 3', win: false},
        {activity_id: 5, user_id: 4, game_name: 'Game 2', win: true},
        {activity_id: 1, user_id: 5, game_name: 'Game 1', win: true},
        {activity_id: 3, user_id: 5, game_name: 'Game 3', win: false}
      ])
    })
}
