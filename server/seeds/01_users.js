exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {username:'Michael Scott'},
        {username:'Dwight Schrute'},
        {username:'Jim Halpert'},
        {username:'Pam Beesly'},
        {username:'Kevin Malone'}
      ])
    })
}
