<template lang="html">
  <v-container grid-list-md text-xs-left>
    <v-layout row wrap>
      <v-flex xs13>
        <v-card class="player-card">
          <div class="text-xs-center">
            <div>
              <h1>Welcome to Frenemies, Meredith!</h1>
              <img src="../meredith.jpg"/>
              <h3>You have 0 wins!</h3>
              <v-btn class="secondary" light medium :to="{name: 'AddActivities'}">Add Activities</v-btn>
            </div>
          </div>
        </v-card>
      </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .player-card {
    padding-top: 10px;
  }
</style>
