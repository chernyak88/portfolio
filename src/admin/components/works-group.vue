<template lang="pug">
  .works-container(v-if="editmode === false")
    .admin-works__item-img
      img(:src="`https:/webdev-api.loftschool.com/${work.photo}`" alt="Аватар").admin-works__item-pic
    .admin-works__item-content
      .admin-works__item-title {{work.title}}
      .admin-works__item-desc {{work.description}}
      .admin-works__item-link 
        a(:href="work.link" target="_blank").works__item-link {{work.link}}
      ul.edit-work-form__list
        li.edit-work-form__item {{work.techs}}
    .admin-works__item-btns
      button(type="button" @click="editmode = true").admin-works__item-btn.admin-works__item-btn--edit Править
      button(type="button" @click="removeExistedWork").admin-works__item-btn.admin-works__item-btn--delete Удалить
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    work: Object
  },
  data() {
    return {
      editmode: false,
      editedWork: {...this.work}
    }
  },
  methods: {
    ...mapActions('works', ['removeWork', 'editWork']),
    async removeExistedWork() {
      try {
        await this.removeWork(this.work.id);
      } catch (error) {
        alert('Произошла ошибка')
      }
    },
    async save() {
      try {
        await this.editWork(this.editedWork);
        this.editmode = false;
      } catch (error) {
        alert('Произошла ошибка')
      }
    }
  }
}

</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.admin-works__item-link {
  margin-bottom: 10px;
}
</style>