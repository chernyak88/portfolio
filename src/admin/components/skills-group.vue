<template lang="pug">
  .skill-container
    .about-block__title
      .add-group
        h2 {{category.category}}
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
</template>

<script>
export default {
  props: {
    category: Object
  }
}

</script>