<template lang="pug">
  .root-wrapper-container
    .root-container 
      header.header
        app-header(v-if="userIsLogged")
      section.switches
        tabs(v-if="userIsLogged")
      main.content
        router-view
    tooltips

</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: "app",
  components: {
    appHeader: () => import("./components/header"),
    tabs: () => import("./components/tabs"),
    tooltips: () => import("./components/tooltips")
  },
  computed: {
    ...mapGetters('user', ['userIsLogged'])
  }
};
</script>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/admin/base-admin.pcss";
@import "../styles/layout/base.pcss";


@import "../styles/admin/root-container.pcss";
@import "../styles/admin/btn.pcss";
@import "../styles/admin/content.pcss";
</style>
