<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          {{ name }}
        </v-card-title>
        <v-card-text>
          Générer un {{ name }}.
        </v-card-text>
        <v-card-actions>
          <v-text-field v-model="consultantName" label="Nom du consultant" />
          <v-text-field v-model="reference" label="Référence du document" />
          <v-btn color="primary" @click="submit">
            Valider
          </v-btn>
        </v-card-actions>
        <v-card-text>
        <v-overlay
          :absolute="true"
          opacity="0.5"
          :value="displayLink"
          z-index="5"
        >
          <p><a :href="link">{{ link }}</a></p>
          <v-btn
            color="primary"
            @click="displayLink = false"
          >
            Ok
          </v-btn>
        </v-overlay>
        </v-card-text>
      </v-card>

      <v-expansion-panels
        multiple
      >
        <v-expansion-panel v-for=" doc in documents" :key="doc._id.$oid">
          <v-expansion-panel-header>
            {{ doc.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p><a :href="doc.link">Ouvrir dans Google Drive</a></p>
            <p>Satut : {{ doc.status }}</p>
            <p>
              <v-btn
                @click="validateDocument(doc)"
                :disabled="!getUser.can_validate"
              >
                Valider le document
              </v-btn>
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ app, error }) {
    let type = 'rm'
    let data = await app.$api.get(`/apiv1/documents/${type}`)
    return {
      type,
      name: "Récapitulatif de mission",
      documents: data.data.data
    }
  },
  data() {
    return {
      consultantName: '',
      reference: '',
      link: '',
      displayLink: ''
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    submit() {
      this.$api.post('/apiv1/render/docx', {
        type: this.type,
        data: {
          consultant_name: this.consultantName
        },
        name: this.reference
      })
      .then(({data}) => {
        console.log(data)
        this.link = data.link
        this.displayLink = true
      })
      .catch(error => {
        console.log(error)
      })
    },
    validateDocument(doc) {
      console.log(doc._id.$oid);
      this.$api.put('/apiv1/documents/validate', {
        id: doc._id.$oid
      })
      .then(({data}) => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
