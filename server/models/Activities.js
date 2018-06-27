const { Model } = require('objection')
const Users = require('./Users')

class Activities extends Model {
  static get tableName() {
    return 'activities'
  }
}

Activities.relationMappings = {
  users: {
    relation: Model.ManyToManyRelation,
    modelClass: __dirname + '/Users',
    join: {
      from: 'activities.activity_id',
      through: {
        from: 'activity_log.activity_id',
        to: 'activity_log.user_id'
      },
      to: 'users.user_id'
    }
  }
}

module.exports = Activities
