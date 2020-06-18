<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          Inscription
        </v-card-title>
        <v-card-text>
          Créer votre compte.
        </v-card-text>
        <v-card-actions>
          <v-text-field v-model="email" label="Email"></v-text-field>
          <v-text-field v-model="password" label="Mot de passe" :type="'password'"></v-text-field>
          <v-btn color="primary" @click="submit">
            Valider
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['setUser']),
    submit() {
      this.$api.post('/auth/register', {
        email: this.email,
        password: this.password
      })
      .then(({data}) => {
        console.log(data);
        this.$api.setToken(data.auth_token, 'Bearer')
        this.$router.push('/auth/status')
        this.setUser(data.user)
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>
