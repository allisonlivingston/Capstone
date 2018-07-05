<template lang="html">
  <v-layout column d-block>
    <v-container text-xs-center>
      <h1 class="header">Stats Say...</h1>
    </v-container>
    <v-container text-xs-center>
      <v-layout>
        <v-flex class="message">
          <h2>You're <span class="better-worse">{{this.message}}</span> than {{this.stats.username}}!</h2>
          <h3 class="friend-stats">{{ stats.username }} has  <span class="friend-wins">{{ (stats.wins) + 30 }}</span> wins</h3>
        </v-flex>
      </v-layout>
    </v-container>
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
          return this.message = 'worse'
        } else {
          return this.message = 'better'
        }
      })
    }
  }
}
</script>

<style lang="css">

  h1 {
    font-size: 14vw;
  }

  h2 {
    font-size: 10vw;
    border: solid #32DCBB;
  }

  .friend-stats {
    font-size: 8vw;
  }
  .message {
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .better-worse {
    color: #32DCBB;
  }
  .friend-wins {
    font-size: 10vw;
    color: #32DCBB;
  }
</style>
