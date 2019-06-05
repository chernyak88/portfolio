<template lang="pug">
    .tooltips(
        v-if="show"
        :class="{'good': type === 'good', 'error': type === 'error'}"
    )
        .tooltips__text {{text}}
        button(
            type="button"
            @click="CLOSE_TOOLTIP"
        ).btn.btn--close-tooltips
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapState('tooltip', {
      show: state => state.show,
      type: state => state.type,
      text: state => state.text,
    })
  },
  methods: {
    ...mapMutations('tooltip', ['CLOSE_TOOLTIP']),
  },
  updated() {
    setTimeout(this['CLOSE_TOOLTIP'], 1500);
  }
}
</script>

<style lang="postcss" scoped>
.tooltips {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 30px;
  z-index: 1000;
  color: #fff;
  display: flex;
  align-items: center;
  &.good {
    background: rgba(green, .6);
  }
  &.error {
    background: rgba(red, .6);
  }
}
.tooltips__text {
  margin-right: 50px;
}
</style>