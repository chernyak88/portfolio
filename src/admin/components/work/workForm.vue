<template lang="pug">
  .edit-form
      .card
          .card__title
              .card__title-text Редактирование работы
          .card__content
              .edit-form__container
                  .edit-form__col
                    label.edit-form__btn-file
                      .edit-form__img(
                        :class="{'filled' : this.renderedPhotoUrl.length, 'error' : validation.firstError('renderedPhotoUrl')}"
                        :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
                      )
                          .edit-form__img-text Перетащите или загрузите для загрузки изображения
                          label.edit-form__btn-file
                            input.btn-file-input(
                              type="file"
                              @change="appendFileAndRenderPhoto"
                              )
                            .btn-file-fake ЗАГРУЗИТЬ
                            .btn-file-input-error
                              error-tooltip(
                                :errorText="validation.firstError('renderedPhotoUrl')"
                              )
                  .edit-form__col
                      .edit-form__row
                          label.input(
                            for="title"
                            :class="{'error' : validation.firstError('work.title')}"
                          )
                              .input__title Название
                              input(
                                type="text" 
                                name="title" 
                                placeholder="Введите название работы" 
                                v-model="work.title"
                              ).input__elem#title
                              .edit-form-input-error
                                error-tooltip(
                                  :errorText="validation.firstError('work.title')"
                                )
                      .edit-form__row
                          label.input(
                            for="link"
                            :class="{'error' : validation.firstError('work.link')}"
                          )
                              .input__title Ссылка
                              input(
                                type="text" 
                                name="link" 
                                placeholder="Вставьте ссылку" 
                                v-model="work.link"
                              ).input__elem#link
                              .edit-form-input-error
                                error-tooltip(
                                  :errorText="validation.firstError('work.link')"
                                )
                      .edit-form__row
                          label.input(
                            for="description"
                            :class="{'error' : validation.firstError('work.description')}"
                          )
                              .input__title Описание
                              textarea(
                                name="description"
                                placeholder="Введите описание работы" 
                                v-model="work.description"
                              ).textarea__elem#description
                              .edit-form-input-error
                                error-tooltip(
                                  :errorText="validation.firstError('work.description')"
                                )
                      .edit-form__row
                        .add-tags
                          .add-tags__wrapper
                            label.input(
                              for="tags"
                              :class="{'error' : validation.firstError('editedTagsAsString')}"
                            )
                              .input__title Добавление тэга
                              input.input__elem#tags(
                                type="text"
                                name="tags"
                                placeholder="Добавьте теги"
                                v-model="work.techs"
                                @change="ADD_TAGS(work.techs)"
                              )
                              .edit-form-input-error
                                error-tooltip(
                                  :errorText="validation.firstError('editedTagsAsString')"
                                )
                          add-tags(v-if="workForm.editMode")    
                              
              .edit-form__buttons
                  .edit-form__buttons-item
                      button(
                        type="button"
                        @click="CLOSE_FORM"
                      ).btn__clear Отмена
                  .edit-form__buttons-item
                      button(
                        type="button"
                        @click="addNewWork"
                        v-if="!workForm.editMode"
                      ).btn__load Загрузить
                      button(
                        type="button"
                        v-if="workForm.editMode"
                        @click="saveEditedWork"
                      ).btn__load Сохранить
      
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    renderedPhotoUrl: value => {
      return Validator.value(value).required("Загрузите картинку");
    },
    "work.title": value => {
      return Validator.value(value).required("Введите название");
    },
    "work.link": value => {
      return Validator.value(value).required("Вставьте ссылку");
    },
    "work.description": value => {
      return Validator.value(value).required("Введите описание");
    },
    editedTagsAsString: value => {
      return Validator.value(value).required(
        "Работа должна содержать по крайней мере один тег"
      );
    }
  },
    components: {
    addTags: () => import("./addTags.vue"),
    errorTooltip: () => import("components/errorTooltip.vue")
    },
    data() {
      return {
        renderedPhotoUrl: "",
        work: {
          title: "",
          techs: "",
          photo: "",
          link: "",
          description: ""
        }
      };
    },
    computed: {
      ...mapState("works", {
        workForm: state => state.workForm,
        editedWork: state => state.editedWork,
        editedTags: state => state.editedTags
      }),
      remotePhotoPath() {
        return `https://webdev-api.loftschool.com/${this.work.photo}`;
      },
      editedTagsAsString() {
        return this.editedTags.join(',');
      }
    },
    methods: {
    ...mapActions("works", ["addWork", "editWork"]),
    ...mapMutations("works", ["CLOSE_FORM", 'ADD_TAGS']),
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
      appendFileAndRenderPhoto(e) {
        const file = e.target.files[0];
        this.work.photo = file;
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
      async addNewWork() {
        if ((await this.$validate()) === false) return;
        try {
          const workFormData = this.createWorkFormData();
          await this.addWork(workFormData);
          this["SHOW_TOOLTIP"]({
            type: "good",
            text: "Работа добавлена"
          });
          this["CLOSE_FORM"]();
        } catch (error) {
          alert(error.message);
          this["SHOW_TOOLTIP"]({
            type: "error",
            text: "Произошла ошибка"
          });
        }
      },
      createWorkFormData() {
      const formData = new FormData();
      formData.append("title", this.work.title);
      if (this.workForm.editMode) {
        formData.append("techs", this.editedTagsAsString);
      } else {
        formData.append("techs", this.work.techs);
      }
      formData.append("photo", this.work.photo);
      formData.append("link", this.work.link);
      formData.append("description", this.work.description);
      return formData;
      },
      setEditedWork() {
        this.work = { ...this.editedWork };
        this.renderedPhotoUrl = this.remotePhotoPath;
      },
      async saveEditedWork() {
        if ((await this.$validate()) === false) return;
        try {
          const workData = {
            id: this.work.id,
            data: this.createWorkFormData()
          };
          await this.editWork(workData);
          this['SHOW_TOOLTIP']({
            type: 'good',
            text: 'Работа обновлена'
          });
          this['CLOSE_FORM']();
        } catch (error) {
          alert(error.message);
          this['SHOW_TOOLTIP']({
            type: 'error',
            text: 'Произошла ошибка'
          });
        }
      },
    },
    created() {
      if (this.workForm.editMode) {
        this.setEditedWork();
        this.work.techs = "";
      }
    }

}
</script>


<style lang="postcss" scoped>

@import "../../../styles/mixins.pcss";

.edit-form__container {
  display: flex;
  @include tablets {
    flex-direction: column;
    padding: 0 106px;
  }
   @include phones {
     padding: 0;
   }
}

.edit-form__col {
  flex: 1;
  padding: 12px;
}

.edit-form__img {
  border: 1px dashed #a1a1a1;
  background-color: #dee4ed;
  background: center center no-repeat / cover;
  padding: 0 25%;
  text-align: center;
  width: 100%;
  cursor: pointer;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.filled {
    position: relative;
    .edit-form__img-text {
      display: none;
    }
    .edit-form__btn-file {
      position: absolute;
      bottom: 0;
      right: 0;
      opacity: .5;
    }
  }

  &.error {
    .btn-file-input-error {
      display: block;
    }
  }
   @include phones {
     padding: 0 5%;
   }

  &-text {
    opacity: 0.5;
    font-size: 16px;
    font-weight: 600;
    line-height: 33.89px;
    margin: 0 auto;
    margin-bottom: 27px;
  }
}

.edit-form__btn-file {
  margin: 0 auto;
  position: relative;
}

.edit-form__buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @include tablets {
    justify-content: center;
  }

  &-item {
    margin-right: 60px;
    &:last-child {
      margin-right: 0;
    }
     @include phones {
       margin-right: 20px;
     }
  }
}
.btn-file-input-error {
  display: none;
  position: absolute;
  top: 100%;
  z-index: 100;
  opacity: 0.9;
}

.card {
  padding: 30px;
  background: #fff;
  height: 100%;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
   @include phones {
     padding: 30px 0;
   }
  &__title {
    padding: 30px 2%;
    border-bottom: 1px solid rgba(31, 35, 45, 0.15);
    font-size: 18px;
    font-weight: 600;
    line-height: 34px;
    margin-bottom: 30px;
  }
}

.card {
  padding: 30px;
  background: #fff;
  height: 100%;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
   @include phones {
     padding: 30px 0;
   }
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
    
</style>