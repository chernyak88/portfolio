<template lang="pug">
  .admin-edit-work
    .edit-work__title Редактирование работы
    .edit-work__page
      .edit-work__load
        .edit-work__load-desc
          .edit-work__load-text Перетащите или загрузите для загрузки изображения
          button.edit-work__btn.edit-work__btn--load Загрузить
      button.edit-work__btn.edit-work__btn--tablet Изменить превью
      .edit-work__desc
        form(action="").edit-work-form
          .edit-work-form__row
            label.edit-work-form__block
              .edit-work-form__text Название
              input(type="text" v-model="workTitle").edit-work-form__input
          .edit-work-form__row
            label.edit-work-form__block
              .edit-work-form__text Ссылка
              input(type="text").edit-work-form__input
          .edit-work-form__row
            label.edit-work-form__block
              .edit-work-form__text.edit-work-form__text--margin Описание
              textarea.edit-work-form__textarea
          .edit-work-form__row
            label.edit-work-form__block
              .edit-work-form__text Добавление тэга
              input(type="text").edit-work-form__input
          .edit-work-form__row
            ul.edit-work-form__list
              li.edit-work-form__item HTML
              li.edit-work-form__item CSS
              li.edit-work-form__item Javascript
          .edit-work-form__row.edit-work-form__row--btns
            button(type="button").edit-work__btn.edit-work__btn--cancel Отмена
            button(type="button" @click="addWorkGroup").edit-work__btn Сохранить
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      workTitle: ""
    }
  },
  methods: {
    ...mapActions('works', ['addNewWorkGroup']),
    async addWorkGroup() {
      try {
        await this.addNewWorkGroup(this.workTitle);
        this.workTitle = "";
      } catch (error) {
        alert(error.message)
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.edit-work__load {
  width: calc(50% - 30px);
  height: 276px;
  margin-right: 30px;
  border: 1px dashed #a1a1a1;
  background-color: #dee4ed;
  position: relative;
  cursor: pointer;

  @include tablets {
    width: 70%;
    margin-right: 0;
    margin-bottom: 20px;
    background-image: url('../../images/admin-works/1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  @include phones {
    width: 100%;
  }  
}

.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>