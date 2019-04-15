<template lang="pug">
  .admin-edit-review(v-if="showAddingForm")
    .edit-review__title Новый отзыв
    .edit-review__page
      label.edit-review__load
        input(
          type="file"
          @change="appendFileAndRenderPhoto"
          ).edit-review__load-input
        .edit-review__load-desc
          .edit-review__load-photo(
            :class="{'filled' : this.rendedPhotoUrl.length}"
            :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
          )
        .edit-review__btn.edit-review__btn--load Добавить фото
      .edit-review__desc
        form(action="").edit-review-form
          .edit-review-form__row
            label.edit-review-form__block
              .edit-review-form__text Имя автора
              input(type="text" v-model="review.author").edit-review-form__input
            label.edit-review-form__block
              .edit-review-form__text Титул автора
              input(type="text" v-model="review.occ").edit-review-form__input
          .edit-review-form__row
            label.edit-review-form__block
              .edit-review-form__text.edit-review-form__text--margin Отзыв
              textarea(v-model="review.text").edit-review-form__textarea
          .edit-review-form__row.edit-review-form__row--btns
            button(type="button" @click="showAddingForm = false").edit-review__btn.edit-review__btn--cancel Отмена
            button(type="button" @click="addReviewGroup").edit-review__btn.edit-review__btn--save Сохранить
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      showAddingForm: true,
      rendedPhotoUrl: "",
      review: {
        photo: "",
        author: "",
        occ: "",
        text: ""
      }
    }
  },
  methods: {
    ...mapActions('reviews', ['addNewReviewGroup']),
    async addReviewGroup() {
      try {
        await this.addNewReviewGroup(this.review);
        this.review.photo = '';
        this.review.author = '';
        this.review.occ = '';
        this.review.text = '';
      } catch (error) {
        alert(error.message)
      }
    },
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.rendedPhotoUrl = reader.result
        }
      } catch (error) {
        alert('sh*t happens :(')
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.edit-review__load {
  cursor: pointer;
}

.edit-review__btn--load {
  margin: 0 auto;
  text-align: center;
}

.edit-review__load-input{
  display: none;
}

.edit-review__load-photo {
  width: 200px;
  height: 200px;
  background: #dee4ed;
  border-radius: 50%;
  position: relative;
  margin-bottom: 20px;

  &.filled {
    background: center center no-repeat / cover;
    &:after {
      display: none;
    }
  }

  @include tablets {
    width: 150px;
    height: 150px;
  }

  &::after {
    content: url('../../images/icons/man-user.png');
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>