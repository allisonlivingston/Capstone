<template lang="html">
  <v-layout column>
    <h1>Stats say:</h1>
    <h2>{{this.message}}</h2>
    <h3>{{ stats.username }} has {{ (stats.wins) + 30 }} wins</h3>
  </v-layout>
</template>

<script>

import API from "@/Library/API"

export default {
  data() {
    return {
      stats: {},
      message: ''
    }
  },
  mounted() {
    const { id } = this.$route.params
    this.load(id)
  },
  methods: {
    load(id) {
      API.getPlayers(id)
      .then((stats) => {
        this.stats = stats[id-1]

        if(this.stats.username === "Jim Halpert" || this.stats.username === "Pam Beesly") {
          return this.message = `You're worse than ${this.stats.username}`
        } else {
          return this.message = `You're better than ${this.stats.username}`
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
