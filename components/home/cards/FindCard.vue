<template>
  <v-hover>
    <v-card
      :min-width="width"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 8 : 2}`"

      class="card ma-0 rounded-card"
    >
      <v-layout row wrap>
        <v-flex xs12 md4>
          <v-img
            :src="image"
            height="75px"/>
        </v-flex>
        <v-flex xs12 md8 class="pa-0">
          <v-card-title primary-title class="pl-3">
            <div class="blue-grey--text text--darken-3">
              <!-- <div class="hidden-xs-only subheading font-weight-bold text-capitalize">{{ category }}</div> -->
              <div class="subheading font-weight-bold text-xs-center text-capitalize">{{ category }}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'FindCard',
  props: {
    category: {
      type: String,
      default: 'category',
    },
    image: {
      type: String,
      default: '/default_image.png',
    },

  },
  computed: {
    width() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        return '150px';
      }
      return '250px';
    },
  },
};
</script>

<style scoped lang="scss">
.rounded-card {
  border-radius: 3px;
  overflow: hidden;
}
// .card {
//   box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;
//   border: 1px solid lightgray;
// }
</style>
