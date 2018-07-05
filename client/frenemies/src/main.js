import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import * as firebase from 'firebase'
import "./registerServiceWorker"
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#32DCBB',
    accent: '#6F88D1',
    error: colors.pink.darken1
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDQ2y0M7rU-ZsqaLlDYPSZppbd1SpcJnJ8',
      authDomain: 'frenemies-be744.firebaseapp.com',
      databaseURL: 'https://frenemies-be744.firebaseio.com',
      projectId: 'frenemies-be744',
      storageBucket: 'frenemies-be744.appspot.com'
    })
  },
  render: h => h(App)
}).$mount("#app")
