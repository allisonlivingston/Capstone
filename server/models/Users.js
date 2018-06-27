const { Model } = require('objection')
const Activities = require('./Activities')
const ActivityLog = require('./ActivityLog')

class Users extends Model {
  static get tableName() {
    return 'users'
  }
}

Users.relationMappings = {
  activities: {
    relation: Model.ManyToManyRelation,
    modelClass: __dirname + '/Activities',
    join: {
      from: 'users.user_id',
      through: {
        from: 'activity_log.user_id',
        to: 'activity_log.activity_id'
      },
      to: 'activities.activity_id'
    }
  },
  logs: {
    relation: Model.HasManyRelation,
    modelClass: __dirname + '/ActivityLog',
    join: {
      from: 'users.user_id',
      to: 'activity_log.user_id'
      // through: {
      //   from: 'activity_log.user_id',
      //   to: ''
      // }
    }
  }
}

module.exports = Users
