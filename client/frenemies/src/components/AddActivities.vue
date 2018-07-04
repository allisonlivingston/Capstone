<template lang="html">
  <v-container fluid>
     <v-layout row wrap align-center>
       <v-flex xs12 sm6>
         <v-select
           :items="activities"
           label="Select"
           multiple
           max-height="400"
           hint="Pick your favorite activities"
           persistent-hint
         ></v-select>
         <v-btn class="secondary" light medium @click="showMessage">Add</v-btn>
         <p>{{ this.confirmationMessage }}</p>
       </v-flex>
     </v-layout>
   </v-container>
</template>

<script>
export default {
   data () {
     return {
       activities: [
         'Bowling', 'Dance Dance Revolution', 'Office Olympics', 'Basketball', 'Mini Golf'
       ],
       confirmationMessage: ''
     }
   },
   methods: {
     showMessage(event) {
       this.confirmationMessage = 'Activities added!'
     }
   }
 }
</script>

<style lang="css">
</style>
