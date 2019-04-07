<template lang="pug">
  .header-container
    header.header
      .container
        .header__info
          .admin-user
            .admin-user__avatar
              img.admin-user__avatar-pic(src="../../images/content/user.jpg")
            .admin-user__name Игорь Черняк
          .header__title Панель администрирования
        a.exit-btn Выйти
</template>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.header-container {
  background: linear-gradient(90deg,#3e3e59,#454573);
  padding: 17px 0;
}

.header {
  color: #fff;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.header__info {
  display: flex;
  align-items: center;
}
  
.admin-user {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.admin-user__avatar {
  margin-right: 20px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
}

.admin-user__avatar-pic {
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.admin-user__name {
  font-weight: 700;
  font-size: 18px;
}

.header__title {
  color: hsla(0,0%,100%,.5);

  @include phones {
    display: none;
  }
}

.exit-btn {
  font-size: 14px;
  opacity: .7;
  text-decoration: underline;
}

.admin-header__menu {
  padding: 30px 25px;
}
</style>