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
        .container.tabs-container
          .tabs__content
            .admin-header__menu
              nav.admin__nav
                ul.nav__list
                  - var menu = [{name: 'Обо мне'}, {name: 'Работы'}, {name: 'Отзывы'}];
                  each item in menu
                    li.nav__item
                      a.nav__link #{item.name}
        .admin-block-title
          .container.container__admin-block-title
            .admin-block-name.admin-block-name--about Блок «Обо мне»
            button.admin-about-btn Добавить группу 
        .admin-block.admin-about
          .container
            ul.admin-about__list
              li.admin-about__item
                .about-block__title
                  .add-group
                    input(type="text" placeholder="Название новой группы").admin-input
                  .add-buttons
                    button.admin-btn.apply__btn
                    button.admin-btn.close__btn
                .about-block__content
                .about-block__edit
                  input(type="text" placeholder="Новый навык").admin-input.new-skill-input
                  input(type="number" maxlength="3" placeholder="%").admin-input.percent-input
                  button.admin-add-btn
              li.admin-about__item
                .about-block__title
                  .add-group
                    input(type="text" value="Workflow").admin-input
                  .add-buttons
                    button.admin-btn.apply__btn
                    button.admin-btn.close__btn
                .about-block__content
                  table.about-block__table
                    tr.about-block-row
                      td.about-block-cell Git
                      td.about-block-cell 100
                      td.about-block-cell %
                      td.about-block-cell
                        button.admin-btn.edit__btn
                      td.about-block-cell
                        button.admin-btn.remove__btn
                    tr.about-block-row
                      td.about-block-cell Terminal
                      td.about-block-cell 90
                      td.about-block-cell %
                      td.about-block-cell
                        button.admin-btn.edit__btn
                      td.about-block-cell
                        button.admin-btn.remove__btn
                    tr.about-block-row
                      td.about-block-cell Gulp
                      td.about-block-cell 80
                      td.about-block-cell %
                      td.about-block-cell
                        button.admin-btn.edit__btn
                      td.about-block-cell
                        button.admin-btn.remove__btn
                    tr.about-block-row
                      td.about-block-cell Webpack
                      td.about-block-cell 85
                      td.about-block-cell %
                      td.about-block-cell
                        button.admin-btn.edit__btn
                      td.about-block-cell
                        button.admin-btn.remove__btn
                .about-block__edit
                  input(type="text" placeholder="Новый навык").admin-input.new-skill-input
                  input(type="number" maxlength="3" placeholder="%").admin-input.percent-input
                  button.admin-add-btn
              li.admin-about__item
                .about-block__title
                  .add-group
                    .add-group__title Frontend
                  .add-buttons
                    button.admin-btn.edit__btn
                .about-block__content
                  table.about-block__table
                    tr.about-block-row
                      td.about-block-cell Html5
                      td.about-block-cell 100
                      td.about-block-cell %
                      td.about-block-cell
                        button.admin-btn.edit__btn
                      td.about-block-cell
                        button.admin-btn.remove__btn
                    tr.about-block-row
                      td.about-block-cell CSS3
                      td.about-block-cell 90
                      td.about-block-cell %
                      td.about-block-cell
                        button.admin-btn.apply__btn.apply__btn--nomargin
                      td.about-block-cell
                        button.admin-btn.close__btn
                    tr.about-block-row
                      td.about-block-cell JavaScript
                      td.about-block-cell 80
                      td.about-block-cell %
                      td.about-block-cell
                        button.admin-btn.edit__btn
                      td.about-block-cell
                        button.admin-btn.remove__btn
                    tr.about-block-row
                      td.about-block-cell Jquery и Vue.js
                      td.about-block-cell 85
                      td.about-block-cell %
                      td.about-block-cell
                        button.admin-btn.edit__btn
                      td.about-block-cell
                        button.admin-btn.remove__btn
                .about-block__edit
                  input(type="text" placeholder="Новый навык").admin-input.new-skill-input
                  input(type="number" maxlength="3" placeholder="%").admin-input.percent-input
                  button.admin-add-btn
        
        .admin-block-title
          .container.container__admin-block-title
            .admin-block-name Блок «Работы»
        .admin-block.admin-works
          .container.admin-works__container
            .admin-edit-work
              .edit-work__title Редактирование работы
              .edit-work__page
                .edit-work__load
                  .edit-work__load-desc
                    .edit-work__load-text Перетащите или загрузите для загрузки изображения
                    button.edit-work__btn.edit-work__btn--load Загрузить
                .edit-work__desc
                  form(action="").edit-work-form
                    .edit-work-form__row
                      label.edit-work-form__block
                        .edit-work-form__text Название
                        input(type="text", value="Дизайн сайта для авто салона Porsche").edit-work-form__input
                    .edit-work-form__row
                      label.edit-work-form__block
                        .edit-work-form__text Ссылка
                        input(type="text", value="https://www.porsche-pulkovo.ru").edit-work-form__input
                    .edit-work-form__row
                      label.edit-work-form__block
                        .edit-work-form__text.edit-work-form__text--margin Описание
                        textarea(placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей").edit-work-form__textarea
                    .edit-work-form__row
                      label.edit-work-form__block
                        .edit-work-form__text Добавление тэга
                        input(type="text", value="Jquery, Vue.js, HTML5").edit-work-form__input
                    .edit-work-form__row
                      ul.edit-work-form__list
                        li.edit-work-form__item HTML
                        li.edit-work-form__item CSS
                        li.edit-work-form__item Javascript
                    .edit-work-form__row.edit-work-form__row--btns
                      button.edit-work__btn.edit-work__btn--cancel Отмена
                      button.edit-work__btn Сохранить
            ul.admin-works
              li.admin-works__item.admin-works__item--add
                .admin-works__item--add__btn
              li.admin-works__item
                .admin-works__item-img
                  img(src="../images/admin-works/1.jpg").admin-works__item-pic
                .admin-works__item-content
                  .admin-works__item-title Сайт школы образования
                  .admin-works__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .admin-works__item-link
                    a(href="http://loftschool.ru" target="_blank").works__item-link http://loftschool.ru
                .admin-works__item-btns
                  button.admin-works__item-btn.admin-works__item-btn--edit Править
                  button.admin-works__item-btn.admin-works__item-btn--delete Удалить
              li.admin-works__item
                .admin-works__item-img
                  img(src="../images/admin-works/2.jpg").admin-works__item-pic
                .admin-works__item-content
                  .admin-works__item-title Сайт школы образования
                  .admin-works__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .admin-works__item-link
                    a(href="http://loftschool.ru" target="_blank").works__item-link http://loftschool.ru
                .admin-works__item-btns
                  button.admin-works__item-btn.admin-works__item-btn--edit Править
                  button.admin-works__item-btn.admin-works__item-btn--delete Удалить
              li.admin-works__item
                .admin-works__item-img
                  img(src="../images/admin-works/3.jpg").admin-works__item-pic
                .admin-works__item-content
                  .admin-works__item-title Сайт школы образования
                  .admin-works__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .admin-works__item-link
                    a(href="http://loftschool.ru" target="_blank").works__item-link http://loftschool.ru
                .admin-works__item-btns
                  button.admin-works__item-btn.admin-works__item-btn--edit Править
                  button.admin-works__item-btn.admin-works__item-btn--delete Удалить
              li.admin-works__item
                .admin-works__item-img
                  img(src="../images/admin-works/4.jpg").admin-works__item-pic
                .admin-works__item-content
                  .admin-works__item-title Сайт школы образования
                  .admin-works__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .admin-works__item-link
                    a(href="http://loftschool.ru" target="_blank").works__item-link http://loftschool.ru
                .admin-works__item-btns
                  button.admin-works__item-btn.admin-works__item-btn--edit Править
                  button.admin-works__item-btn.admin-works__item-btn--delete Удалить
        .admin-block-title
          .container.container__admin-block-title
            .admin-block-name Блок «Отзывы»
        .admin-block.admin-reviews
          .container.admin-reviews__container
            .admin-edit-review
              .edit-review__title Новый отзыв
              .edit-review__page
                .edit-review__load
                  .edit-review__load-desc
                    .edit-review__load-photo
                    button.edit-review__btn.edit-review__btn--load Добавить фото
                .edit-review__desc
                  form(action="").edit-review-form
                    .edit-review-form__row
                      label.edit-review-form__block
                        .edit-review-form__text Имя автора
                        input(type="text", value="Ковальчук Дмитрий").edit-review-form__input
                      label.edit-review-form__block
                        .edit-review-form__text Титул автора
                        input(type="text", value="Основатель LoftSchool").edit-review-form__input
                    .edit-review-form__row
                      label.edit-review-form__block
                        .edit-review-form__text.edit-review-form__text--margin Отзыв
                        textarea(placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!").edit-review-form__textarea
                    .edit-review-form__row.edit-review-form__row--btns
                      button.edit-review__btn.edit-review__btn--cancel Отмена
                      button.edit-review__btn.edit-review__btn--save Сохранить
            ul.admin-review
              li.admin-review__item.admin-review__item--add
                .admin-review__item--add__btn
              li.admin-review__item
                .admin-review__item-author
                  .admin-review__item-author-img
                    img(src="../images/content/sabancev-small.png").admin-review__item-pic
                  .admin-review__item-author-desc
                    .admin-review__item-author-name Владимир Сабанцев
                    .admin-review__item-author-job Преподаватель
                .admin-review__item-desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .admin-review__item-btns
                  button.admin-review__item-btn.admin-review__item-btn--edit Править
                  button.admin-review__item-btn.admin-review__item-btn--delete Удалить
              li.admin-review__item
                .admin-review__item-author
                  .admin-review__item-author-img
                    img(src="../images/content/kovalchuk-small.png").admin-review__item-pic
                  .admin-review__item-author-desc
                    .admin-review__item-author-name Ковальчук Дмитрий
                    .admin-review__item-author-job Основатель Loftschool
                .admin-review__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .admin-review__item-btns
                  button.admin-review__item-btn.admin-review__item-btn--edit Править
                  button.admin-review__item-btn.admin-review__item-btn--delete Удалить
              li.admin-review__item
                .admin-review__item-author
                  .admin-review__item-author-img
                    img(src="../images/content/sabancev-small.png").admin-review__item-pic
                  .admin-review__item-author-desc
                    .admin-review__item-author-name Владимир Сабанцев
                    .admin-review__item-author-job Преподаватель
                .admin-review__item-desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .admin-review__item-btns
                  button.admin-review__item-btn.admin-review__item-btn--edit Править
                  button.admin-review__item-btn.admin-review__item-btn--delete Удалить
              li.admin-review__item
                .admin-review__item-author
                  .admin-review__item-author-img
                    img(src="../images/content/kovalchuk-small.png").admin-review__item-pic
                  .admin-review__item-author-desc
                    .admin-review__item-author-name Ковальчук Дмитрий
                    .admin-review__item-author-job Основатель Loftschool
                .admin-review__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .admin-review__item-btns
                  button.admin-review__item-btn.admin-review__item-btn--edit Править
                  button.admin-review__item-btn.admin-review__item-btn--delete Удалить
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
@import "../styles/admin/admin-about.pcss";
@import "../styles/admin/admin-works.pcss";
@import "../styles/admin/admin-reviews.pcss";
</style>