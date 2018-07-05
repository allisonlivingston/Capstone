<template>
  <v-layout text-xs-center column justify-end>
    <v-container>
      <v-flex>
        <h1 class="frenemies">Frenemies</h1>
      </v-flex>
    </v-container>
    <v-container>
      <v-flex >
        <v-btn class="secondary" light large :to="{ name: 'Login' }">Log In</v-btn>
        <v-btn class="secondary" light large :to="{ name: 'Create' }">Sign Up</v-btn>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Sofia');
  .frenemies {
    display: flex;
    justify-content: center;
    margin-top: 18vh;
    font-family: 'Sofia', cursive!important;
    text-shadow: 1px 1px 5px pink;
    font-size: 18vw;
    letter-spacing: 1vw;
  }
</style>
