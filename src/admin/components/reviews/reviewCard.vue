<template lang="pug">
    .card
        .card__title
            .card__title-text
            .user
                .user__pic
                    .user__pic-avatar(
                        :style="{'backgroundImage' : `url(${this.remotePhotoPath})`}"
                    )
                .user__desc
                    .user__name {{review.author}}
                    .user__occ {{review.occ}}
        .card__content
            .reviews__content
                .reviews__content-text
                    p {{review.text}}
                .reviews__btns
                    button(type="button" @click="editReview" data-text="Править").btn.is-pencil
                    button(type="button" @click="removeReview(review.id)" data-text="Удалить").btn.is-cross
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
export default {
  props: {
    review: Object
  },
  computed: {
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.review.photo}`;
    },
  },
  methods: {
    ...mapActions('reviews', ['removeReview']),
    ...mapMutations('reviews', ['SHOW_FORM', 'TURN_EDIT_MODE_ON', 'SET_EDITED_REVIEW']),
    ...mapMutations('tooltip', ['SHOW_TOOLTIP']),
    showFormAndTurnEditModeOn() {
      this['TURN_EDIT_MODE_ON']();
      this['SHOW_FORM']();
    },
    setEditedReview() {
      this['SET_EDITED_REVIEW'](this.review);
    },
    editReview() {
      this.setEditedReview();
      this.showFormAndTurnEditModeOn();
    }
  }
};
</script>