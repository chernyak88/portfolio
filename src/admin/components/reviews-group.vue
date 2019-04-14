<template lang="pug">
  .reviews-container(v-if="editmode === false")
    .admin-review__item-author
      .admin-review__item-author-img
        img(:src="`https:/webdev-api.loftschool.com/${review.photo}`" alt="Аватар").admin-review__item-pic
      .admin-review__item-author-desc
        .admin-review__item-author-name {{review.author}}
        .admin-review__item-author-job {{review.occ}}
    .admin-review__item-desc {{review.text}}
    .admin-review__item-btns
      button(type="button" @click="editmode = true").admin-review__item-btn.admin-review__item-btn--edit Править
      button(type="button" @click="removeExistedReview").admin-review__item-btn.admin-review__item-btn--delete Удалить
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    review: Object
  },
  data() {
    return {
      editmode: false,
      editedReview: {...this.review}
    }
  },
  methods: {
    ...mapActions('reviews', ['removeReview', 'editReview']),
    async removeExistedReview() {
      try {
        await this.removeReview(this.review.id);
      } catch (error) {
        alert('Произошла ошибка')
      }
    },
    async save() {
      try {
        await this.editReview(this.editedReview);
        this.editmode = false;
      } catch (error) {
        alert('Произошла ошибка')
      }
    }
  }
}

</script>