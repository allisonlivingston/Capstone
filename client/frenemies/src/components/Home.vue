<template>
  <v-layout text-xs-center column justify-end>
    <v-container>
      <v-flex>
        <h1>Frenemies</h1>
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
  h1 {
    display: flex;
    justify-content: center;
    margin-top: 20vh;
    font-size: 16vw;
    letter-spacing: 1vw;
  }
</style>
