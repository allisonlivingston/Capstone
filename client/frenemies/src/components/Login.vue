<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs14 sm6 offset-sm3>
        <v-card>
        <v-card-text>
          <v-container>
            <v-form>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    type="email"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit"  :to="{ name: 'DemoUser' }">Log In</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import API from '@/Library/API'

export default {
  data(players) {
    return {
      valid: true,
      user: {
        username: '',
        password: ''
      }
    }
  },
    methods: {
      
    }
  }

</script>

<style lang="css">
</style>
