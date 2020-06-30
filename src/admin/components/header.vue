<template lang="pug">
    .container.header-container
        .header__info
            .user
                .user__pic
                    img(src="../../images/content/user.jpg").user__pic-avatar
                .user__name
                    span Игорь Черняк
            .header__title Панель администрирования
        a(@click="logout").exit-btn Выйти
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions("user", ["logout"])
    }
};
</script>

<style lang="postcss">
@import "../../styles/mixins.pcss";

.header {
    color: #fff;
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
    &-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
     &__info {
        display: flex;
        align-items: center;
        padding: 16px 0;
    }
    &__title {
        opacity: 0.5;
        font-size: 14px;
        font-weight: 400;
        line-height: 34px;
        @include phones {
            display: none;
        }
    }
}

.user {
  display: flex;
  align-items: center;
  margin-right: 28px;
  font-size: 18px;
  font-weight: 400;
  line-height: 34px;
}

.user__pic {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  overflow: hidden;
  &-avatar {
    border-radius: 50%;
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}

.user__name {
  font-size: 18px;
  font-weight: 700;
  @include phones {
    margin-top: -30px;
  }
}

.user__occ {
  opacity: 0.5;
  font-size: 16px;
  font-weight: 600;
}


</style>