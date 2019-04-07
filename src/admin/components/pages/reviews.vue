<template lang="pug">
  .container
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
</template>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.admin-reviews__container {
  display: flex;
  flex-direction: column;
}

.admin-edit-review {
  width: 100%;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  margin-bottom: 30px;
}

.edit-review__title {
  padding: 25px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #eeeeef;
}

.edit-review__page {
  width: 100%;
  display: flex;
  padding: 40px 25px;
  background-color: #fff;

  @include phones {
    flex-direction: column;
    align-items: center;
  }
}

.edit-review__load {
  width: calc(25% - 20px);
  margin-right: 20px;

  @include tablets {
    width: calc(20% - 20px);
  }

  @include phones {
    width: 80%;
    margin-right: 0;
    margin-bottom: 20px;
  } 
}

.edit-review__load-desc {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit-review__load-photo {
  width: 200px;
  height: 200px;
  background: #dee4ed;
  border-radius: 50%;
  position: relative;
  margin-bottom: 20px;

  @include tablets {
    width: 150px;
    height: 150px;
  }

  &::after {
    content: url('../images/icons/man-user.png');
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.edit-review__btn {
  width: 170px;
  height: 50px;
  font-weight: 700;
  background: transparent;
  color: #383bcf;
}

.edit-review__desc {
  width: 65%;
  
  @include tablets {
    width: 80%;
  }

  @include phones {
    width: 100%;
    margin-right: 0;
  }
}

.edit-review-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.edit-review-form__row {
  margin-bottom: 25px;
  width: 100%;

  &:first-child {
    display: flex;

    @include phones {
      flex-direction: column;
    }
  }

  &--btns {
    display: flex;
    justify-content: flex-end;

    @include phones {
      justify-content: center;
    }
  }
}

.edit-review-form__block{
  width: 100%;

  @include phones {
    margin-bottom: 25px;
  }
}

.edit-review-form__text {
  opacity: 0.5;
  color: #414c63;
  font-weight: 700;

  &--margin {
    margin-bottom: 15px;
  }
}

.edit-review-form__input {
  width: calc(100% - 20px);
  padding: 15px 0;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
}

.edit-review-form__textarea {
  display: block;
  padding: 10px;
  resize: none;
  width: 100%;
  min-height: 145px;
  font-weight: 700;
  border: 1px solid #e2e4e8;
  line-height: 30px;
}

.edit-review__btn--save {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  color: #fff;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  text-transform: uppercase;
  font-weight: 700;
}

.admin-review {
  display: flex;
  flex-wrap: wrap;
}

.admin-review__item {
  width: calc(33% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;

  @include tablets {
    width: calc(50% - 20px);
  }

  @include phones {
    width: 100%;
    margin-right: 0;
  }
}

.admin-review__item--add {
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.admin-review__item--add__btn {
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
    content: 'Добавить отзыв';
    position: absolute;
    top: 110%;
    left: 5%;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
  }
}

.admin-review__item-author {
  display: flex;
  padding-bottom: 25px;
  border-bottom: 1px solid #dddedf;
  margin-bottom: 25px;
}

.admin-review__item-author-img {
  margin-right: 15px;
}

.admin-review__item-author-name {
  color: #414c63;
  font-size: 18px;
  font-weight: 700;
}

.admin-review__item-author-job {
  opacity: 0.5;
  color: #414c63;
  font-weight: 700;
}

.admin-review__item-desc {
  opacity: 0.7;
  color: #414c63;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 25px;
}

.admin-review__item-btns {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.admin-review__item-btn {
  width: 115px;
  height: 30px;
  background: transparent;
  font-weight: 700;
  opacity: .5;

  &:hover {
    opacity: 1;
  }

  @include bp-960 {
    font-size: 13px;
  }

  @include bp-870 {
    font-size: 11px;
  }

  @include phones {
    font-size: 14px;
  }
}

.admin-review__item-btn--edit:after {
  content: url('../images/icons/pencil-edit-button.png');
  display: inline-block;
  height: 17px;
  width: 17px;
  margin-left: 10px;
  vertical-align: bottom;

  @include bp-870 {
    margin-left: 0;
  }

  @include phones {
    margin-left: 3px;
  }
}

.admin-review__item-btn--delete:after {
  content: url('../images/icons/cross.png');
  display: inline-block;
  height: 17px;
  width: 17px;
  margin-left: 10px;

  @include bp-870 {
    margin-left: 0;
  }

  @include phones {
    margin-left: 3px;
  }
}
</style>