<template lang="pug">
  .root-wrapper-container
    .root-container
      app-header 
      tabs
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    appHeader: () => import("./components/header"),
    tabs: () => import("./components/tabs")
  }
};
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

@import "../styles/blocks/about.pcss";
@import "../styles/blocks/nav.pcss";
@import "../styles/admin/admin-base.pcss";
@import "../styles/admin/admin-header.pcss";
@import "../styles/admin/admin-about.pcss";
@import "../styles/admin/admin-works.pcss";
@import "../styles/admin/admin-reviews.pcss";
</style>