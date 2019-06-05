<template lang="pug">
  section.reviews-section
    .container
      .title Блок «Отзывы»
      .reviews-container
        review-form(
          v-if="reviewForm.show"
        )
        reviews-cards
               
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    reviewForm: () => import("components/reviews/reviewForm.vue"),
    reviewsCards: () => import("components/reviews/reviewsCards.vue"),
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState("reviews", {
      reviewForm: state => state.reviewForm,
      editedReview: state => state.editedReview
    })
  },
  created() {
    this.reviewForm.show = false;
  }
};
</script>



<style lang="postcss">

@import "../../../styles/mixins.pcss";

.reviews__form {
  margin-bottom: 30px;
  .edit-form__buttons {
    padding-right: 23%;
    @include tablets {
      padding-right: 5%;
      justify-content: flex-end;
    }
  }
}

.edit-form__container {
  display: flex;
  @include tablets {
    flex-direction: column;
    padding: 0 106px;
  }
   @include phones {
     padding: 0;
   }
}

.edit-form__col {
  flex: 1;
  padding: 12px;
}

.edit-form__img {
  border: 1px dashed #a1a1a1;
  background-color: #dee4ed;
  padding: 0 25%;
  text-align: center;
  width: 100%;
  cursor: pointer;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   @include phones {
     padding: 0 5%;
   }

  &-text {
    opacity: 0.5;
    font-size: 16px;
    font-weight: 600;
    line-height: 33.89px;
    margin: 0 auto;
    margin-bottom: 27px;
  }
}

.edit-form__btn-file {
  margin: 0 auto;
  position: relative;
}

.edit-form__buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @include tablets {
    justify-content: center;
  }

  &-item {
    margin-right: 60px;
    &:last-child {
      margin-right: 0;
    }
     @include phones {
       margin-right: 20px;
     }
  }
}


.card {
  padding: 30px;
  background: #fff;
  height: 100%;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
   @include phones {
     padding: 7% 5%;
   }
  &__title {
    padding: 30px 2%;
    border-bottom: 1px solid rgba(31, 35, 45, 0.15);
    font-size: 18px;
    font-weight: 600;
    line-height: 34px;
    margin-bottom: 30px;
  }
}

.reviews__form-content {
  padding-right: 20%;
  display: flex;
  @include tablets {
    padding: 0;
  }

  @include phones {
    flex-direction: column;
  }
}
.reviews__form-file_input {
    position: absolute;
    top: 0;
    left: -9999px;
}

.reviews__form-col {
  flex: 1;
}

.reviews__form-user__pic {
  margin-right: 30px;
  text-align: center;

  @include phones {
    margin-right: 0;
    margin-bottom: 45px;
  }
}

.reviews__form-pic {
  margin-bottom: 30px;
  @include phones {
    display: flex;
    justify-content: center;
  }
}


.reviews__form-add {
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  line-height: 33.89px;
}

.reviews__form-row {
  display: flex;
  margin-bottom: 35px;
  @include tablets {
    flex-direction: column;
    padding-right: 150px;
    &:last-child {
      padding-right: 0;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }

  @include phones {
    padding-right: 0;
  }
}



.reviews {
  display: flex;
  flex-wrap: wrap;

  @include phones {
  
  }
}

.reviews__item {
  width: calc(50%-30px);
  max-width: 340px;
  min-height: 380px;
  margin-left: 30px;
  margin-bottom: 30px;
  @include tablets {
    width: 45%;
    min-height: 100%;
  }

   @include phones {
     min-width: 280px;
     margin-left: 0;
     width: 100%;
     min-height: 100%;
     
     
   }
  .user {
    margin-right: 0;
  }
}

.reviews__content-text {
  opacity: 0.7;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 60px;
}

.reviews__btns {
  display: flex;
  justify-content: space-between;
}

    
</style>