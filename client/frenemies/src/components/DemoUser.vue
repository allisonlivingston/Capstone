<template lang="html">
  <v-container grid-list-md text-xs-left>
    <v-layout row wrap>
      <v-flex xs13>
        <v-card class="player-card">
          <div class="text-xs-center">
            <div>
              <h1 class="welcome">Welcome back, Toby!</h1>
              <img src="../toby.jpg"/>
              <h3 class="mere-wins">You have 33 wins!</h3>
              <v-btn class="secondary" light large :to="{ name: 'MyStats' }">Check Out Your Stats</v-btn>
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
