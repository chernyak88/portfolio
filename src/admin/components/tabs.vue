<template lang="pug">
  .container.tabs-container
    .tabs__content
      .admin-header__menu
        nav.admin__nav
          ul.nav__list
            - var menu = [{name: 'Обо мне', link: 'http://localhost:8080/admin#/'}, {name: 'Работы', link: 'http://localhost:8080/admin#/works'}, {name: 'Отзывы', link: 'http://localhost:8080/admin#/reviews'}];
            each item in menu
              li.nav__item
                a(href=item.link).nav__link #{item.name}
</template>

<style lang="postcss" scoped>
  @import "../../styles/mixins.pcss";

  .admin__nav {
  .nav__link {
    font-weight: 600;

    &:hover {
    color: #383bce;
    transition: .3s;
  }

  &:hover:after {
    content: '';
    position: absolute;
    top: 200%;
    left: -30%;
    right: -30%;
    border-bottom: 3px solid #383bce;
    transition: .3s;
    }
  }
}
</style>