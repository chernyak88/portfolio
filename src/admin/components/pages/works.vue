<template lang="pug">
  .container
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
            button.edit-work__btn.edit-work__btn--tablet Изменить превью
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
              img(src="../../../images/admin-works/1.jpg").admin-works__item-pic
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
              img(src="../../../images/admin-works/2.jpg").admin-works__item-pic
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
              img(src="../../../images/admin-works/3.jpg").admin-works__item-pic
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
              img(src="../../../images/admin-works/4.jpg").admin-works__item-pic
            .admin-works__item-content
              .admin-works__item-title Сайт школы образования
              .admin-works__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .admin-works__item-link
                a(href="http://loftschool.ru" target="_blank").works__item-link http://loftschool.ru
            .admin-works__item-btns
              button.admin-works__item-btn.admin-works__item-btn--edit Править
              button.admin-works__item-btn.admin-works__item-btn--delete Удалить
</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.admin-works__container {
  display: flex;
  flex-direction: column;
}

.admin-edit-work {
  width: 100%;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  margin-bottom: 30px;
}

.edit-work__title {
  padding: 25px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #eeeeef;
}

.edit-work__page {
  width: 100%;
  display: flex;
  padding: 40px 25px;
  background-color: #fff;

  @include tablets {
    flex-direction: column;
    align-items: center;
  }
}

.edit-work__load {
  width: calc(50% - 30px);
  height: 276px;
  margin-right: 30px;
  border: 1px dashed #a1a1a1;
  background-color: #dee4ed;
  position: relative;

  @include tablets {
    width: 70%;
    margin-right: 0;
    margin-bottom: 20px;
    background-image: url('../../../images/admin-works/1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  @include phones {
    width: 100%;
  }  
}

.edit-work__load-desc {
  width: 235px;
  height: 135px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @include tablets {
    display: none;
  }
}

.edit-work__load-text {
  opacity: 0.5;
  color: #414c63;
  font-weight: 600;
  line-height: 34px;
  margin-bottom: 25px;
}

.edit-work__btn {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  color: #fff;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  text-transform: uppercase;
  font-weight: 700;

  &--cancel {
    width: 140px;
    background: transparent;
    color: #383bcf;
    text-transform: none;
  }

  &--tablet {
    display: none;

    @include tablets {
      display: block;
      width: 180px;
      background: transparent;
      color: #383bcf;
      text-transform: none;
      margin-bottom: 30px;
    }
  }
}

.edit-work__desc {
  width: 50%;

  @include tablets {
    width: 75%;
  }

  @include phones {
    width: 100%;
  }
}

.edit-work-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.edit-work-form__row {
  margin-bottom: 25px;
  width: 100%;

  &--btns {
    display: flex;
    justify-content: flex-end;
  }
}

.edit-work-form__block{
  width: 100%;
}

.edit-work-form__text {
  opacity: 0.5;
  color: #414c63;
  font-weight: 700;

  &--margin {
    margin-bottom: 15px;
  }
}

.edit-work-form__input {
  width: 100%;
  padding: 15px 0;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
}

.edit-work-form__textarea {
  display: block;
  padding: 10px;
  resize: none;
  width: 100%;
  min-height: 145px;
  font-weight: 700;
  border: 1px solid #e2e4e8;
  line-height: 30px;
}

.edit-work-form__list {
  display: flex;
  opacity: 0.7;
  color: #283340;
  font-size: 13px;
  font-weight: 600;
}

.edit-work-form__item {
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #f4f4f4;
  margin-right: 10px;

  &:last-child {
    margin-right: 10px;
  }

  &:after {
    content: url('../../../images/icons/cancel.png');
    width: 8px;
    height: 8px;
    margin-left: 8px;
  }
}

.admin-works {
  display: flex;
  flex-wrap: wrap;
}

.admin-works__item {
  width: calc(33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  height: 555px;
  display: flex;
  flex-direction: column;

  @include tablets {
    width: calc(50% - 20px);
  }

  @include phones {
    width: 100%;
    margin-right: 0;
  }
}

.admin-works__item--add {
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.admin-works__item--add__btn {
  width: 150px;
  height: 150px;
  position: relative;
  border: 2px solid #fff;
  border-radius: 50%;

  &:before {
    content: '+';
    display: block;
    font-size: 72px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:after {
    content: 'Добавить работу';
    position: absolute;
    top: 110%;
    left: 5%;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
  }
}

.admin-works__item-content {
  padding: 20px;
}

.admin-works__item-title {
  color: #414c63;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 10px;
}

.admin-works__item-desc {
  opacity: 0.7;
  color: #414c63;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 25px;
}

.works__item-link {
  color: #383bcf;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.admin-works__item-btns {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.admin-works__item-btn {
  width: 115px;
  height: 30px;
  background: transparent;
  font-weight: 700;
  opacity: .5;

  &:hover {
    opacity: 1;
  }

  @include bp-870 {
    font-size: 13px;
  }

  @include phones {
    font-size: 14px;
  }
}

.admin-works__item-btn--edit:after {
  content: url('../../../images/icons/pencil-edit-button.png');
  display: inline-block;
  height: 17px;
  width: 17px;
  margin-left: 10px;
  vertical-align: bottom;

  @include bp-870 {
    margin-left: 3px;
  }
}

.admin-works__item-btn--delete:after {
  content: url('../../../images/icons/cross.png');
  display: inline-block;
  height: 17px;
  width: 17px;
  margin-left: 10px;

  @include bp-870 {
    margin-left: 3px;
  }
}
</style>