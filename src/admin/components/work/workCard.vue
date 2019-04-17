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