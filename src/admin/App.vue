<template lang="pug">
.wrapper.admin-wrapper
  .maincontent
    .root-wrapper-container
      .root-container
        .header-container
          header.header
           .container
            .header__info
              .admin-user
                .admin-user__avatar
                  img.admin-user__avatar-pic(src="../images/content/user.jpg")
                .admin-user__name Игорь Черняк
              .header__title Панель администрирования
            a.exit-btn Выйти 
        .tabs-container
          .tabs__content
            .admin-header__menu
              nav.nav
                ul.nav__list
                  - var menu = [{name: 'Обо мне'}, {name: 'Работы'}, {name: 'Отзывы'}];
                  each item in menu
                    li.nav__item
                      a.nav__link #{item.name}
      .tooltips-container
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

@import "../styles/blocks/about.pcss";
@import "../styles/blocks/nav.pcss";
@import "../styles/admin/admin-base.pcss";
@import "../styles/admin/admin-header.pcss";
</style>