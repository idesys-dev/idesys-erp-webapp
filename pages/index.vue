<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          ERP IdéSYS
        </v-card-title>
        <v-card-text>
          On peut gérer les BV, RM et les propale
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/documents/bv">
            BV
          </v-btn>
          <v-btn color="primary" nuxt to="/documents/rm">
            RM
          </v-btn>
          <v-btn color="primary" nuxt to="/documents/pp">
            Propal
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {}
</script>
