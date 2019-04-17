<template lang="pug">
    ul.works 
        li.works__item
            button(
                type="button"
                @click="showFormAndTurnEditModeOff"
            ).btn-container 
              .btn__text
                .btn__circle
                .btn__title Добавить работу
        li.works__item(
            v-for="work in works"
            :key="work.id"
        )
            work-card(
                :work="work"
            )
            
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  components: {
    workCard: () => import("components/work/workCard.vue"),
  },
  computed: {
    ...mapState('works', {
      works: state => state.works
    })
  },
  methods: {
    ...mapActions('works', ['fetchWorks']),
    ...mapMutations('works', ['SHOW_FORM', 'TURN_EDIT_MODE_OFF']),
    showFormAndTurnEditModeOff() {
      this['SHOW_FORM']();
      this['TURN_EDIT_MODE_OFF']();
    }
  },
  async created() {
    try {
      this.fetchWorks();
    } catch (error) {
      alert(error.messsage);
    }
  }
  
}
</script>