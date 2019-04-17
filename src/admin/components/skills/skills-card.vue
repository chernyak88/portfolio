<template lang="pug">
    .card
      .card__title(v-if="editModeCategory === false")
        .skills-card-title
          .skills-card-title__text {{category.category}}
          .skills-card-title__btn
            button(type="button" @click="editModeCategory = true").btn.is-pencil.grayscale
      .card__title(v-else)
        .skills-card-title(
          :class="{'error' : validation.firstError('editedCategory.category')}"
        )
          input(type="text" placeholder="Название новой группы" v-model="editedCategory.category").skills-card-title__text
          .skills-card-title-error
            error-tooltip(
              :errorText="validation.firstError('editedCategory.category')"
            )
          .skills-card-title__btn
            button(type="button" @click="editCurrSkillCard(editedCategory)").btn.is-tick
            button(type="button" @click.prevent="deletedSkillGroup").btn.is-cross
        
       
      .card__content
          .skill-list__table
              .skill-table-container
                  table.skills
                      skills-item(
                          v-for="skill in skills"
                          :key="skill.id"
                          :skill="skill"
                      )
      .add-new
          .add-new-container
              .add-new__inputs
                  .add-new__col
                      label.input(
                        :class="{'error' : validation.firstError('skill.title')}"
                      )
                        input.input__elem(placeholder="Новый навык" v-model="skill.title")
                        .skill__input-error
                          error-tooltip(
                            :errorText="validation.firstError('skill.title')"
                          )
                  .add-new__col.add-new__col-small
                      label.input(
                        :class="{'error' : validation.firstError('skill.percent')}"
                      )
                          input.input__elem(type="number" placeholder="   %" min="0" max="100" maxlength="3" v-model="skill.percent")
                          .skill__input-error
                            error-tooltip(
                              :errorText="validation.firstError('skill.percent')"
                            )
              button(type="button" @click="addNewSkill").add-new__button
</template>

<script>
import { mapActions, mapMutations  } from 'vuex';
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "editedCategory.category": value => {
      return Validator.value(value).required("Введите название группы");
    },
    "skill.title": value => {
      return Validator.value(value).required("Введите название навыка");
    },
    "skill.percent": value => {
      return Validator.value(value).required("Введите значение").digit("Тут должно быть число").between(0, 100, "Значение должно быть между 0 и 100");
    },
  },
    props: {
        category: Object,
        skills: Array
    },
    data() {
        return {
            editModeCategory: false,
            editedCategory: {...this.category},
            skill: {
                category: this.category.id,
                title: "",
                percent: ""
            }
        }
    },
    components: {
       skillsItem: () => import('components/skills/skills-item.vue'),
       errorTooltip: () => import("components/errorTooltip.vue")
    },
    methods: {
      ...mapActions('skills', ['addSkill', 'removeCategories']),
      ...mapActions('categories', ['removeCategories', 'editSkillGroup']),
      ...mapMutations('tooltip', ['SHOW_TOOLTIP']),

      async deletedSkillGroup(){
        try {
          await this.removeCategories(this.category.id)
          this['SHOW_TOOLTIP']({
            type: 'good',
            text: 'Группа удалена'
          });
        } catch (error) {
          alert('Проблема с удалением категории');
          this['SHOW_TOOLTIP']({
            type: 'error',
            text: 'Произошла ошибка'
          });
        }
      },
      async editCurrSkillCard(skillCard) {
        if ((await this.$validate("editedCategory.category")) === false) return;
        try {
          await this.editSkillGroup(skillCard);
          this['SHOW_TOOLTIP']({
            type: 'good',
            text: 'Группа обновлена'
          });
          this.editModeCategory = false;
        } catch (error) {
          alert(error.message);
          this['SHOW_TOOLTIP']({
            type: 'error',
            text: 'Произошла ошибка'
          });
        }
      },
      async addNewSkill() {
        if ((await this.$validate()) === false) return;
        try {
          await this.addSkill(this.skill);
          this['SHOW_TOOLTIP']({
            type: 'good',
            text: 'Навык добавлен'
          });
          } catch (error) {
            alert(error.message);
            this['SHOW_TOOLTIP']({
              type: 'error',
              text: 'Произошла ошибка'
            });
          }
      }
    },
};
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

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
    flex: 1;
  }
}

.skills-card-title {
    display: flex;
    justify-content: space-between;
    position: relative;

    &.error {
      .skills-card-title-error {
          display: block;
      }
    }
}


.skills-card-title-error {
  display: none;
  position: absolute;
  top: 100%;
  z-index: 100;
}

.skill-list {
  &__table {
    margin-bottom: 40px;
  }
}

.skills {
  width: 100%;
}

.skills-card-title__input {
  width: 100%;
}

.skills-card-title__buttons {
  display: flex;
}
.skills-card-title__btn {
  display: flex;
}


.add-new {
  padding-left: 18%;
  margin-top: auto;
  &-container {
    display: flex;
  }
  &__inputs {
    display: flex;
  }
  &__col {
    margin-right: 10px;
     
    &:last-child {
      margin-right: 0;
    }
    
  }
  &__button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    margin-left: 30px;
    position: relative;
    display: block;
    flex-shrink: 0;
    &::before {
      position: absolute;
      content: "+";
      display: block;
      top: 47%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      font-weight: 600;
      line-height: 30px;
    }
  }
}
.add-new-skills-group {
  height: 100%;
}

.add-new-container.blocked {
  opacity: .3;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}

</style>