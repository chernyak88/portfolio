<template lang="pug">
  .reviews__form
    .edit-form
      .card
        .card__title
          .card__title-text {{formTitle}}
        .card__content
          .reviews__form-content
            .reviews__form-user__pic
              label.reviews__form-load(
                :class="{'error' : validation.firstError('renderedPhotoUrl')}"
              )
                input(
                  type="file"
                  @change="appendFileAndRenderPhoto"
                ).reviews__form-file_input
                .reviews__form-load-error
                  error-tooltip(
                    :errorText="validation.firstError('renderedPhotoUrl')"
                  )
                .reviews__form-pic
                  .reviews__form-avatar(
                    :class="{'filled' : this.renderedPhotoUrl.length}"
                    :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
                  )
                .reviews__form-add Добавить фото
            .reviews__form-col
              .reviews__form-row
                .reviews__form-block
                  label.input(
                    for="name"
                    :class="{'error' : validation.firstError('review.author')}"
                    )
                    .input__title Имя автора
                    input#name(
                      name="name" 
                      v-model="review.author" 
                      type="name"
                      placeholder="" 
                      required
                      ).input__elem
                    .reviews__form-block-error
                      error-tooltip(
                        :errorText="validation.firstError('review.author')"
                      )
                .reviews__form-block
                  label.input(
                    for="titul"
                    :class="{'error' : validation.firstError('review.occ')}"
                  )
                    .input__title Титул автора
                    input#titul(
                      name="text" 
                      v-model="review.occ" 
                      type="text" 
                      placeholder="" 
                      required).input__elem
                    .reviews__form-block-error
                      error-tooltip(
                        :errorText="validation.firstError('review.occ')"
                      )
              .reviews__form-row
                  .reviews__form-block
                      label.textarea(
                        for="review"
                        :class="{'error' : validation.firstError('review.text')}"
                      )
                          .input__title Отзыв
                          textarea#review(
                            name="review" 
                            placeholder="Введите отзыв" 
                            v-model="review.text" 
                            required
                            ).textarea__elem
                          .reviews__form-block-error
                            error-tooltip(
                              :errorText="validation.firstError('review.text')"
                            )
          .edit-form__buttons
              .edit-form__buttons-item
                  button(@click="CLOSE_FORM").btn__clear Отмена
              .edit-form__buttons-item
                  button(
                    @click="addNewReview"
                    v-if="!reviewForm.editMode"
                    ).btn__load Загрузить
                  button(
                    v-if="reviewForm.editMode"
                    @click="saveEditedReview"
                    ).btn__load Сохранить
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import { Validator } from "simple-vue-validator";
export default { 
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "renderedPhotoUrl": value => {
      return Validator.value(value).required("Загрузите картинку");
    },
    "review.author": value => {
      return Validator.value(value).required("Введите имя");
    },
    "review.occ": value => {
      return Validator.value(value).required("Введите титул");
    },
    "review.text": value => {
      return Validator.value(value).required("Введите отзыв");
    }
  },
  components: {
    errorTooltip: () => import("components/errorTooltip.vue")
  },
  data() {
    return {
      renderedPhotoUrl: "",
      review: {
        photo: "",
        author: "",
        occ: "",
        text: ""
      }
    };
  },
  computed: {
    ...mapState("reviews", {
      reviewForm: state => state.reviewForm,
      editedReview: state => state.editedReview
    }),
    formTitle() {
      switch (this.reviewForm.editMode) {
        case true:
          return "Редактирование отзыва";
          break;
        case false:
          return "Новый отзыв";
          break;
      }
    },
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.review.photo}`;
    }
  },
  methods: {
    ...mapMutations('reviews', ['CLOSE_FORM']),
    ...mapActions('reviews', ['addReview', 'editReview']),
    ...mapMutations('tooltip', ['SHOW_TOOLTIP']),
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhotoUrl = reader.result;
        };
      } catch (error) {
        alert(error.message);
      }
    },
    createReviewFormData() {
      const formData = new FormData();
      formData.append("author", this.review.author);
      formData.append("occ", this.review.occ);
      formData.append("text", this.review.text);
      formData.append("photo", this.review.photo);
      return formData;
    },
    async addNewReview() {
      if ((await this.$validate()) === false) return;
      try {
        const reviewFormData = this.createReviewFormData();
        await this.addReview(reviewFormData);
        this['SHOW_TOOLTIP']({
          type: 'good',
          text: 'Отзыв добавлен'
        });
        this['CLOSE_FORM']();
      } catch (error) {
        alertr(error.message);
        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
      }
    },
    setEditedReview() {
      this.review = { ...this.editedReview };
      this.renderedPhotoUrl = this.remotePhotoPath;
    },
    async saveEditedReview() {
      if ((await this.$validate()) === false) return;
      try {
        const reviewData = {
          id: this.review.id,
          data: this.createReviewFormData()
        };
        await this.editReview(reviewData);
        this['SHOW_TOOLTIP']({
          type: 'good',
          text: 'Отзыв обновлен'
        });
        this['CLOSE_FORM']();
      } catch (error) {
        alert(error.message);
        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
      }
    }
  },
  created() {
    if (this.reviewForm.editMode) {
      this.setEditedReview();
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.card {
  padding: 30px;
  background: #fff;
  height: 100%;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
   
  &__title {
    padding: 30px 2%;
    border-bottom: 1px solid rgba(31, 35, 45, 0.15);
    font-size: 18px;
    font-weight: 600;
    line-height: 34px;
    margin-bottom: 30px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}

.reviews__content {
  width: 100%;
}

.reviews__form-avatar {
  width: 200px;
  height: 200px;
  background-color: #dee4ed;
  border-radius: 50%;
  position: relative;
  &.filled {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
      &::before {
        display: none;
      }
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    background-image: svg-load("filled-user.svg", fill=#ffffff);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 153px;
  
  }
}

.reviews__form-block {
  margin-right: 30px;
  flex: 1;

  @include phones {
    margin-right: 0;
  }
}
.reviews__form-load {
  &.error {
    .reviews__form-load-error {
      display: block;
    }
  }
}
.reviews__form-load-error {
  display: none;
  position: absolute;
  top: 43%;
  z-index: 100;
  opacity: 0.9;
}
</style>