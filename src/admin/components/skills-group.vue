<template lang="pug">
  .skill-container
    .about-block__title
      .add-group
        h2 {{category.category}}
      .add-buttons
        button(type="button").admin-btn.apply__btn
        button(type="button" @click="removeExistedCategory").admin-btn.close__btn
    .about-block__content
      table.about-block__table
        skills-item(
          v-for="skill in skills"
          :key="skill.id"
          :skill="skill"
        )
    .about-block__edit
      input(type="text" v-model="skill.title" placeholder="Новый навык").admin-input.new-skill-input
      input(type="number" v-model="skill.percent" min="0" max="100" placeholder="%").admin-input.percent-input
      button(type="button" @click="addNewSkill").admin-add-btn
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    category: Object,
    skills: Array,
  },
  data() {
    return {
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      }
    }
  },
  components: {
    skillsItem: () => import('./skills-item')
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    ...mapActions('categories', ['removeCategories']),
    async removeExistedCategory() {
      try {
        await this.removeCategories(this.category.id);
      } catch (error) {
        alert('Произошла ошибка')
      }
    },
    async addNewSkill() {
      try {
        await this.addSkill(this.skill)
      } catch (error) {
        alert('Произошла ошибка при добавлении skill')
      }
    }
  }
}

</script>