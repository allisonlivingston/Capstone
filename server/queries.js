const database = require("./database-connection")
const express = require('express')
const router = express.Router()

module.exports = {
  list(){
     return database("routes").select();
  },
  read(id){
    return database("routes").select().where("id", id).first();
  },
  create(routes){
    return database("routes")
    .insert(routes)
    .returning('*')
    .then(record => record[0]);
  },
  update(id, routes){
    return database("routes")
    .update(routes)
    .returning('*')
    .then(record => record[id]);
  },
  delete(id){
    return database("routes")
    .delete()
    .where('id', id)
  }
}
