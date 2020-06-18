<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          État du compte
        </v-card-title>
        <v-card-text>
          Autorisé à valider les documents: {{ canValidateLabel }}.
        </v-card-text>
        <v-card-actions>
          <v-btn @click="logout">
            Déconnexion
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  asyncData({ app, error }) {
    return app.$api.get('/auth/status')
    .then(({data}) => {
      return {
        canValidate: data.data.can_validate
      }
    })
    .catch(err => {
      return error({ statusCode: 400, message: 'Data not found' })
    })
  },
  computed: {
    canValidateLabel() {
      return this.canValidate == true ? 'oui' : 'non'
    }
  },
  methods: {
    logout() {
      this.$api.post('/auth/logout')
      .then(({data}) => {
        console.log(data);
        this.$api.setToken('')
      })
      .catch(error => {
        console.log(error);
        canValidate = null
      })
      .then(() => {
        this.$router.push('/auth/login')
      })
    }
  }
}
</script>
