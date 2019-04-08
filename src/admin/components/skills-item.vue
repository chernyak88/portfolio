<template lang="pug">
  tr.about-block-row
    td.about-block-cell {{skill.title}}
    td.about-block-cell {{skill.percent}}
    td.about-block-cell %
    td.about-block-cell
      button(type="button").admin-btn.edit__btn
    td.about-block-cell
      button(type="button" @click="removeExistedSkill").admin-btn.remove__btn
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: Object
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
