<template lang="pug">
  tr(v-if="editmode === false").about-block-row
    td.about-block-cell {{skill.title}}
    td.about-block-cell {{skill.percent}}
    td.about-block-cell %
    td.about-block-cell
      button(type="button").admin-btn.edit__btn
    td.about-block-cell
      button(type="button" @click="removeExistedSkill").admin-btn.remove__btn
  tr(v-else).about-block-row
    td.about-block-cell
      input(type="text" v-model="editedSkill.title") 
    td.about-block-cell
      input(type="text" v-model="editedSkill.percent") 
    td.about-block-cell %
    td.about-block-cell
      button.admin-btn.apply__btn
    td.about-block-cell
      button.admin-btn.close__btn
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editmode: false,
      editedSkill: {}
    }
  },
  methods: {
    ...mapActions('skills', ['removeSkill']),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch (error) {
        
      }
    }
  }
}
</script>
