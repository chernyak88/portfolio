<template lang="pug">
  .reviews-container
    .admin-review__item-author
      .admin-review__item-author-img
        img(src="").admin-review__item-pic
      .admin-review__item-author-desc
        .admin-review__item-author-name
        .admin-review__item-author-job
    .admin-review__item-desc
    .admin-review__item-btns
      button.admin-review__item-btn.admin-review__item-btn--edit Править
      button.admin-review__item-btn.admin-review__item-btn--delete Удалить
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    review: Array
  }
}

</script>