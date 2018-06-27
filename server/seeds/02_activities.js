exports.seed = function(knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return knex('activities').insert([
        {activity_name:'Bowling'},
        {activity_name:'Dance Dance Revolution'},
        {activity_name:'Office Olympics'},
        {activity_name:'Basketball'},
        {activity_name:'Mini Golf'}
      ])
    })
}
