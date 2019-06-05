<template lang="pug">
    ul.reviews
        li.reviews__item
          button(
            type="button"
            @click="showFormAndTurnEditModeOff"
            ).btn-container
              .btn__text
                  .btn__circle
                  button(type="button").btn__title Добавить отзыв
        li.reviews__item(
          v-for="review in reviews"
          :key="review.id"
          )
          review-card(
          :review="review"
          )
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
  components: {
    reviewCard: () => import("components/reviews/reviewCard.vue")
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    })
  },
  methods: {
    ...mapMutations('reviews', ['SHOW_FORM', 'TURN_EDIT_MODE_OFF']),
    ...mapActions('reviews', ['fetchReviews']),
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    showFormAndTurnEditModeOff() {
      this['TURN_EDIT_MODE_OFF']();
      this['SHOW_FORM']();
    }
  },
  async created() {
    try {
      await this.fetchReviews();
      this["SHOW_TOOLTIP"]({
        type: "success",
        text: "Отзывы загружены"
      });
    } catch (error) {
      alert(error.message);
      this["SHOW_TOOLTIP"]({
        type: "error",
        text: "Произошла ошибка"
      });
    }
  }
  
};
</script>