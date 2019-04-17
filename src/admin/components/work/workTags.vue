<template lang="pug">
  ul.tags
    li.tags__item(
      v-for="(tag, index) in tags"
      :key="index"
      ) {{tag}}
</template>

<script>
export default {
  props: {
    tags: Array
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

</style>