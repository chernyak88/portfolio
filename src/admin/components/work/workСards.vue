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

<style lang="postcss" scoped>

@import "../../../styles/mixins.pcss";

.works-container {
  background: #fff;
  margin-bottom: 30px;
}
.works {
  display: flex;
  flex-wrap: wrap;
}
.works__item {
  width: 30%;
  margin-left: 30px;
  margin-bottom: 30px;
  min-height: 300px;
  background: #fff;

  @include tablets {
    width: 45%;
  }
  @include phones {
    width: 100%;
    margin-left: 0;
    min-height: 111px;
  }
  .card {
    padding: 0;
  }
}

.works__pic {
  position: relative;
}
.works__tag {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.works__data {
  padding: 40px 30px;
  @include phones {
    padding: 30px 20px;
  }
}
.works__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 25px;

  @include phones {
    margin-bottom: 17px;
  }
}

.works__text {
  opacity: 0.7;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 30px;

  @include phones {
    font-size: 14px;
    line-height: 24px;
  }
}

.works__link {
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;

  @include phones {
    font-size: 14px;
  }
}

.works__btns {
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
}

    
</style>