<template>
  <v-toolbar class="navBar py-3">
    <v-toolbar-title>
      <nuxt-link to="/"><img :src="Logo" class="mr-5"/></nuxt-link>
    </v-toolbar-title>
    <v-toolbar-title>
      <!-- <SearchInput /> -->
    </v-toolbar-title>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
<!--
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn :ripple="false" depressed flat class="text-capitalize font-weight-bold">Sign Up</v-btn>
      <v-btn :ripple="false" flat class="text-capitalize font-weight-bold">Sign in</v-btn>
    </v-toolbar-items>
-->
  </v-toolbar>
</template>
<script>
import Logo from '@/assets/img/Logo.svg';

// import SearchInput from './SearchInput';

export default {
  data() {
    return {
      Logo,
      search: '',
    };
  },
  components: {
    // SearchInput,
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';

</style>
