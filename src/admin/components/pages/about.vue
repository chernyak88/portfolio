<template lang="pug">
    section.about
        .container.about-container
            .title.about-title
                h1.title.about-title-text Блок «Обо мне»
                button.add-btn(
                  @click="showAddingForm = true"
                  v-if="showAddingForm == false"
                ) Добавить группу

            .about__content
                ul.skill-list
                    li.skill-list__item(v-if="showAddingForm")
                      add-new-skills-group(
                        :showAddingForm="showAddingForm"
                         @closeNewSkillCard="showAddingForm = false"
                        )
                    li.skill-list__item(
                      v-for="category in categories"
                      :key="category.id"
                      )
                        skills-card(
                          :category="category"
                          :skills="filterSkillsByCategotyId(category.id)"
                        )
                           
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    components: {
        addNewSkillsGroup: () => import('components/skills/add-new-skills-group.vue'),
        skillsCard: () => import('components/skills/skills-card.vue')
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
      filterSkillsByCategotyId(categoryId) {
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

<style lang="postcss">
@import "../../../styles/mixins.pcss";

.about-title {
  display: flex;
  
  @include phones {
    flex-direction: column;
  }
}

.add-btn {
  margin-left: 93px;
  position: relative;
  background: transparent;
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  line-height: 33.89px;

  &::before {
    content: "+";
    position: absolute;
    color: #ffffff;
    left: -16%;
    top: 35%;
    z-index: 2;
    font-size: 15px;
    font-weight: 600;
    line-height: 15.19px;
    @include phones {
      left: 24%;
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    left: -20%;
    top: 28%;
    @include phones {
      left: 22.5%;
      top: 27%;
    }
  }
  @include phones {
    margin-left: -90px;
  }
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    @include phones {
        flex-wrap: wrap;
    }
    &__item {
        width: calc(50% - 30px);
        background: #fff;
        margin-left: 30px;
        margin-bottom: 30px;
        @include phones {
            width: 100%;
            margin-left: 0;
        }
    }
}


    
</style>