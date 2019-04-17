<template lang="pug">
    .card
        .works-wrapper
            .works__pic
                img(:src="remotePhotoPath" alt="Превью работы").works__image
                .works__tag
                    work-tags(
                        :tags="tagsArray"
                    )
                    
            .works__data
                .works__title {{work.title}}
                .works__text
                    p {{work.description}}
                    a(:href="work.link").works__link {{work.link}}
                .works__btns
                    button(
                        type="button" 
                        data-text="Править"
                        @click="showFormAndTurnEditModeOn"
                        ).btn.is-pencil
                    button(
                        type="button" 
                        data-text="Удалить"
                        @click="removeCurrentWork"
                        ).btn.is-cross
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    workTags: () => import("./workTags.vue")
  },
  props: {
    work: Object
  },
  data() {
    return {
      
    }
  },
  computed: {
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.work.photo}`;
    },
    tagsArray() {
      return this.work.techs.split(',');
    }
  },
  methods: {
    ...mapActions("works", ['removeWork']),
    ...mapMutations("works", ['SHOW_FORM', 'TURN_EDIT_MODE_ON', 'SET_EDITED_WORK']),
    async removeCurrentWork() {
      try {
        await this.removeWork(this.work.id);
      } catch (error) {
        alert(error.message);
      }
    },
    showFormAndTurnEditModeOn() {
      this['TURN_EDIT_MODE_ON'](this.work);
      this['SHOW_FORM']();
    },
  }
}
</script>