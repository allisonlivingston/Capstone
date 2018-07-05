<template>
  <v-app id="inspire" dark>
  <v-navigation-drawer width="190" v-model="drawer" clipped fixed app>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon medium>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="drawer-font">
            <router-link tag="span" style="cursor: pointer" :to="{ name: 'Home'}">Home</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon medium color="">person</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="drawer-font">
            <router-link tag="span" style="cursor: pointer" :to="{ name: 'DemoUser' }">User Profile</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon medium color="">group</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="drawer-font">
            <router-link tag="span" style="cursor: pointer" :to="{ name: 'Friends' }">Friends</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar class="accent" dark app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

  </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
      <v-layout>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </v-content>
  <v-footer app fixed>
    <span class="copy">&copy; 2018</span>
  </v-footer>
</v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        drawer: false
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Didact+Gothic|Jura');

h1, h2, h3, p, a, div  {
  font-family: 'Didact Gothic', sans-serif!important;
}

div {
  color: white;
}

.drawer-font {
  font-size: 5vw;
}

.title {
  font-family: 'Didact Gothic', sans-serif!important;
}

.copy {
  font-size: 4vw;
  margin-left: 4vw;
}
</style>
