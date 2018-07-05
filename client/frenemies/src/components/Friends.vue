<template lang="html">
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 v-for="players in players">
        <v-card class="player-card">
          <v-avatar size="75">
            <img :src="players.profile_img"/>
          </v-avatar>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ players.username }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn light class="secondary" :to="{ name: 'Stats', params: { id: players.user_id } }">Compare Stats</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import API from "@/Library/API"

export default {
  data() {
    return {
      players: [],
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      API.getPlayers()
      .then(players => {
        this.players = players
      })
    }
  }
}
</script>

<style lang="css">
  .player-card {
    /* margin-top: 10px; */
  }
</style>
