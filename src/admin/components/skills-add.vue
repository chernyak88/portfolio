<template lang="pug">
  .skill-container
    .about-block__title
      .add-group
        input(type="text" v-model="skillTitle" placeholder="Название новой группы").admin-input
      .add-buttons
        button(type="button" @click="addSkillGroup").admin-btn.apply__btn
        button(type="button").admin-btn.close__btn
    .about-block__content
    .about-block__edit.blocked
      input(type="text" placeholder="Новый навык").admin-input.new-skill-input
      input(type="number" min="0" max="100" placeholder="%").admin-input.percent-input
      button.admin-add-btn
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      skillTitle: ""
    }
  },
  methods: {
    ...mapActions('categories', ['addNewSkillGroup']),
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.skillTitle);
        this.skillTitle = "";
      } catch (error) {
        alert(error.message)
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>