<template lang="pug">
  .container
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
              input(type="number" min="0" max="100" placeholder="%").admin-input.percent-input
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
              input(type="number" min="0" max="100" placeholder="%").admin-input.percent-input
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
              input(type="number" min="0" max="100" placeholder="%").admin-input.percent-input
              button.admin-add-btn
</template>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.admin-block-name--about {
  margin-right: 50px;

  @include phones {
    margin-right: 0;
    margin-bottom: 20px;
  }
}

.admin-about-btn {
  background: transparent;
  color: #383bcf; 
  font-weight: 700;
  font-size: 16px;

  &::before {
    content: "+";
    display: inline-block;
    height: 20px;
    width: 20px;
    background: #3f35cb;
    border-radius: 50%;
    line-height: 20px;
    color: #fff;
    margin-right: 15px;
    text-align: center;
  }
}

.admin-about__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @include tablets {
    flex-direction: column;
    align-items: center;
  }
}

.admin-about__item {
  min-height: 415px;
  padding: 30px;
  width: calc(50% - 30px);
  margin-right: 30px;
  margin-bottom: 30px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include tablets {
    width: 70%;
    margin-right: 0;
    margin-bottom: 30px;
  }

  @include phones {
    width: 100%;
  }
}

.about-block__title {
  padding: 15px 0;
  border-bottom: 1px solid #dddedf;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-group {
  width: 60%;
}

.admin-input {
  padding: 10px 0;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.51;
  border: none;
  border-bottom: 1px solid #000;
}

.about-block__edit {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.new-skill-input {
  width: 50%;
  padding: 15px;
  margin-right: 10px;
}

.percent-input {
  width: 20%;
  padding: 15px;
  margin-right: 25px;
  font-size: 14px;
}

.admin-add-btn {
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  color: #fff; 
  font-weight: 700;
  font-size: 30px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: block; 
  position: relative;

  &::before {
    content: "+";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.about-block__table {
  color: #414c63;
  width: 100%;
}

.about-block__content {
  flex: 1;
}

.about-block-cell {
  padding-top: 15px;
  padding-bottom: 10px;
  padding-right: 10px;

  &:first-child {
    width: 60%;
  }

  &:nth-child(3) {
    padding-right: 50px;
  }
}

.add-group__title {
  color: #414c63;
  font-size: 18px;
  font-weight: 600;
}

.container__admin-block-title {
  display: flex;
  flex-direction: row;

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.admin-block {
  background: url('../../../images/bg/admin_bg.jpg') center center no-repeat;
}

.admin-block-title {
  display: flex;
  font-size: 21px;
  font-weight: 700;
  padding: 45px 0;
}

.admin-btn {
  width: 16px;
  height: 16px;
  background: transparent;
}

.apply__btn {
  background: url('../../../images/icons/tick.png') center center no-repeat;
  margin-right: 16px;

  &--nomargin {
    margin-right: 0;
  }
}

.close__btn {
  background: url('../../../images/icons/cross.png') center center no-repeat;
}

.edit__btn {
  background: url('../../../images/icons/pencil.png') center center no-repeat;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}

.remove__btn {
  background: url('../../../images/icons/trash.png') center center no-repeat;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}

input[placeholder]          {text-overflow:ellipsis;}
input::-moz-placeholder     {text-overflow:ellipsis;} 
input:-moz-placeholder      {text-overflow:ellipsis;} 
input:-ms-input-placeholder {text-overflow:ellipsis;}

:focus::-webkit-input-placeholder {color: transparent}
:focus::-moz-placeholder          {color: transparent}
:focus:-moz-placeholder           {color: transparent}
:focus:-ms-input-placeholder      {color: transparent}
</style>