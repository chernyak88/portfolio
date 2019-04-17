<template lang="pug">
  .container
    .admin-block-title
      .container.container__admin-block-title
        .admin-block-name.admin-block-name--about Блок «Обо мне»
        button.admin-about-btn(
          @click="showAddingForm = true"
          v-if="showAddingForm === false"
        ) Добавить группу 
    .admin-block.admin-about
      .container
        ul.admin-about__list
          li.admin-about__item(v-if="showAddingForm")
            skills-add(
              :showAddingForm="showAddingForm"
                @closeNewSkillCard="showAddingForm = false"
            )
          li.admin-about__item(
            v-for="category in categories"
            :key="category.id"
          )
            skills-group(
              :category="category"
              :skills="filterSkillsByCategoryId(category.id)"
            )
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    components: {
        skillsAdd: () => import('components/skills-add.vue'),
        skillsGroup: () => import('components/skills-group.vue')
    },
    data() {
      return {
        showAddingForm: false
      }
    },
    computed: {
      ...mapState('categories', {
        categories: state => state.categories
      }),
       ...mapState('skills', {
        skills: state => state.skills
      })
    },
    methods: {
      ...mapActions('categories', ['fetchCategories']),
      ...mapActions('skills', ['fetchSkills']),
      filterSkillsByCategoryId(categoryId) {
        return this.skills.filter(skill => skill.category == categoryId);
      }
    },
    async created() {
      try {
       await this.fetchCategories();
      } catch (error) {
        alert('Произошла ошибка при загрузке категорий')
      }
       try {
        await this.fetchSkills();
      } catch (error) {
        alert('Произошла ошибка при загрузке скиллов')
      }
    },
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.admin-block-name--about {
  margin-right: 50px;

  @include phones {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

.admin-about-btn {
  background: transparent;
  color: #383bcf; 
  font-weight: 700;
  font-size: 16px;

  &::before {
    content: "+";
    display: inline-block;
    height: 20px;
    width: 20px;
    background: #3f35cb;
    border-radius: 50%;
    line-height: 20px;
    color: #fff;
    margin-right: 15px;
    text-align: center;
  }
}

.admin-about__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @include tablets {
    flex-direction: column;
    align-items: center;
  }
}

.admin-about__item {
  min-height: 415px;
  padding: 30px;
  width: calc(50% - 30px);
  margin-right: 30px;
  margin-bottom: 30px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include tablets {
    width: 70%;
    margin-right: 0;
    margin-bottom: 30px;
  }

  @include phones {
    width: 100%;
  }
}

.about-block__title {
  padding: 15px 0;
  border-bottom: 1px solid #dddedf;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-group {
  width: 60%;
}

.admin-input {
  padding: 10px 0;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.51;
  border: none;
  border-bottom: 1px solid #000;
}

.about-block__edit {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.new-skill-input {
  width: 50%;
  padding: 15px;
  margin-right: 10px;
}

.percent-input {
  width: 20%;
  padding: 15px;
  margin-right: 25px;
  font-size: 14px;
}

.admin-add-btn {
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  color: #fff; 
  font-weight: 700;
  font-size: 30px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: block; 
  position: relative;

  &::before {
    content: "+";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.about-block__table {
  color: #414c63;
  width: 100%;
}

.about-block__content {
  flex: 1;
}

.about-block-cell {
  padding-top: 15px;
  padding-bottom: 10px;
  padding-right: 10px;

  &:first-child {
    width: 60%;
  }

  &:nth-child(3) {
    padding-right: 50px;
  }
}

.add-group__title {
  color: #414c63;
  font-size: 18px;
  font-weight: 600;
}

.container__admin-block-title {
  display: flex;
  flex-direction: row;

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.admin-block {
  background: url('../../../images/bg/admin_bg.jpg') center center no-repeat;
}

.admin-block-title {
  display: flex;
  font-size: 21px;
  font-weight: 700;
  padding: 45px 0;
}

.admin-btn {
  width: 16px;
  height: 16px;
  background: transparent;
}

.apply__btn {
  background: url('../../../images/icons/tick.png') center center no-repeat;
  margin-right: 16px;

  &--nomargin {
    margin-right: 0;
  }
}

.close__btn {
  background: url('../../../images/icons/cross.png') center center no-repeat;
}

.edit__btn {
  background: url('../../../images/icons/pencil.png') center center no-repeat;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}

.remove__btn {
  background: url('../../../images/icons/trash.png') center center no-repeat;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}

input[placeholder]          {text-overflow:ellipsis;}
input::-moz-placeholder     {text-overflow:ellipsis;} 
input:-moz-placeholder      {text-overflow:ellipsis;} 
input:-ms-input-placeholder {text-overflow:ellipsis;}

:focus::-webkit-input-placeholder {color: transparent}
:focus::-moz-placeholder          {color: transparent}
:focus:-moz-placeholder           {color: transparent}
:focus:-ms-input-placeholder      {color: transparent}
</style>