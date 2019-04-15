<template lang="pug">
  .admin-edit-work(v-if="showAddingForm")
    .edit-work__title Редактирование работы
    .edit-work__page
      label.edit-work__load
        input(
          type="file"
          @change="appendFileAndRenderPhoto"
          ).edit-work__load-input
        .edit-work__load-photo(
              :class="{'filled' : this.rendedPhotoUrl.length}"
              :style="{'backgroundImage' : `url(${this.rendedPhotoUrl})`}"
            )
        .edit-work__load-desc
          .edit-work__load-text Перетащите или загрузите для загрузки изображения
          .edit-work__btn.edit-work__btn--load Загрузить
      button.edit-work__btn.edit-work__btn--tablet Изменить превью
      .edit-work__desc
        form(action="").edit-work-form
          .edit-work-form__row
            label.edit-work-form__block
              .edit-work-form__text Название
              input(type="text" v-model="work.title").edit-work-form__input
          .edit-work-form__row
            label.edit-work-form__block
              .edit-work-form__text Ссылка
              input(type="text" v-model="work.link").edit-work-form__input
          .edit-work-form__row
            label.edit-work-form__block
              .edit-work-form__text.edit-work-form__text--margin Описание
              textarea(v-model="work.description").edit-work-form__textarea
          .edit-work-form__row
            label.edit-work-form__block
              .edit-work-form__text Добавление тэга
              input(type="text" v-model="work.techs").edit-work-form__input
          .edit-work-form__row
            ul.edit-work-form__list
              li.edit-work-form__item {{work.techs}}
          .edit-work-form__row.edit-work-form__row--btns
            button(type="button" @click="showAddingForm = false").edit-work__btn.edit-work__btn--cancel Отмена
            button(type="button" @click="addWorkGroup").edit-work__btn Сохранить
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      showAddingForm: true,
      rendedPhotoUrl: "",
      work: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: ""
      }
    }
  },
  methods: {
    ...mapActions('works', ['addNewWorkGroup']),
    async addWorkGroup() {
      try {
        await this.addNewWorkGroup(this.work);
      } catch (error) {
        alert(error.message)
      }
    },
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;

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

.edit-work__load-photo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &.filled {
    background: center center no-repeat / cover;
    z-index: 50;
  }
}

.edit-work__load-input {
  display: none;
}

.edit-work__btn--load {
  margin: 0 auto;
  text-align: center;
  line-height: 46px;
}

.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>