<template lang="pug">
  ul.tags
    li(
      v-for="(tag, index) in editedTags"
      :key="index"
    ).tags__item
      span {{tag}}
      a(@click="REMOVE_TAG(tag)").tags__remove.grayscale
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState('works', {
      editedTags: state => state.editedTags
    })
  },
  methods: {
    ...mapMutations('works', ['REMOVE_TAG'])
  }
}
</script>

<style lang="postcss" scoped>

@import "../../../styles/mixins.pcss";

.tags {
  display: flex;
  flex-wrap: wrap;
}
.tags__item {
  white-space: nowrap;
  padding: 6px 20px;
  border-radius: 50px;
  background: #f4f4f4;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 13px;

   @include phones {
     padding: 6px 15px;
     margin-bottom: 39px;
     &:last-child {
       margin-right: 0;
     }
   }
}

.tags__remove {
  width: 11px;
  height: 11px;
  background: svg-load('cross.svg', fill=$text-color) center center no-repeat / contain;
  margin-left: 9px;
  display: inline-block;
  
}

</style>