import * as firebase from 'firebase'

const API_URL = 'http://localhost:3000/'

export default {
  setUser (state, payload) {
    state.user = payload
  },
  getPlayers() {
  return fetch(API_URL)
    .then(response => response.json())
  },
  getStats(id) {
    return fetch(API_URL)
      .then(response => response.json())
  },
  createUser({commit}, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            activities: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
  },
  login(username) {
    return fetch(API_URL, username)
      .then(response => response.json())
  },
  user(state) {
    return state.user
  }
}
