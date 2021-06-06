(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{400:function(e,t,r){},417:function(e,t,r){"use strict";r(400)},434:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reviews__form"},[r("div",{staticClass:"edit-form"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card__title"},[r("div",{staticClass:"card__title-text"},[e._v(e._s(e.formTitle))])]),r("div",{staticClass:"card__content"},[r("div",{staticClass:"reviews__form-content"},[r("div",{staticClass:"reviews__form-user__pic"},[r("label",{staticClass:"reviews__form-load",class:{error:e.validation.firstError("renderedPhotoUrl")}},[r("input",{staticClass:"reviews__form-file_input",attrs:{type:"file"},on:{change:e.appendFileAndRenderPhoto}}),r("div",{staticClass:"reviews__form-load-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("renderedPhotoUrl")}})],1),r("div",{staticClass:"reviews__form-pic"},[r("div",{staticClass:"reviews__form-avatar",class:{filled:this.renderedPhotoUrl.length},style:{backgroundImage:"url("+this.renderedPhotoUrl+")"}})]),r("div",{staticClass:"reviews__form-add"},[e._v("Добавить фото")])])]),r("div",{staticClass:"reviews__form-col"},[r("div",{staticClass:"reviews__form-row"},[r("div",{staticClass:"reviews__form-block"},[r("label",{staticClass:"input",class:{error:e.validation.firstError("review.author")},attrs:{for:"name"}},[r("div",{staticClass:"input__title"},[e._v("Имя автора")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.review.author,expression:"review.author"}],staticClass:"input__elem",attrs:{id:"name",name:"name",type:"name",placeholder:"",required:""},domProps:{value:e.review.author},on:{input:function(t){t.target.composing||e.$set(e.review,"author",t.target.value)}}}),r("div",{staticClass:"reviews__form-block-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("review.author")}})],1)])]),r("div",{staticClass:"reviews__form-block"},[r("label",{staticClass:"input",class:{error:e.validation.firstError("review.occ")},attrs:{for:"titul"}},[r("div",{staticClass:"input__title"},[e._v("Титул автора")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.review.occ,expression:"review.occ"}],staticClass:"input__elem",attrs:{id:"titul",name:"text",type:"text",placeholder:"",required:""},domProps:{value:e.review.occ},on:{input:function(t){t.target.composing||e.$set(e.review,"occ",t.target.value)}}}),r("div",{staticClass:"reviews__form-block-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("review.occ")}})],1)])])]),r("div",{staticClass:"reviews__form-row"},[r("div",{staticClass:"reviews__form-block"},[r("label",{staticClass:"textarea",class:{error:e.validation.firstError("review.text")},attrs:{for:"review"}},[r("div",{staticClass:"input__title"},[e._v("Отзыв")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review.text,expression:"review.text"}],staticClass:"textarea__elem",attrs:{id:"review",name:"review",placeholder:"Введите отзыв",required:""},domProps:{value:e.review.text},on:{input:function(t){t.target.composing||e.$set(e.review,"text",t.target.value)}}}),r("div",{staticClass:"reviews__form-block-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("review.text")}})],1)])])])])]),r("div",{staticClass:"edit-form__buttons"},[r("div",{staticClass:"edit-form__buttons-item"},[r("button",{staticClass:"btn__clear",on:{click:e.CLOSE_FORM}},[e._v("Отмена")])]),r("div",{staticClass:"edit-form__buttons-item"},[e.reviewForm.editMode?e._e():r("button",{staticClass:"btn__load",on:{click:e.addNewReview}},[e._v("Загрузить")]),e.reviewForm.editMode?r("button",{staticClass:"btn__load",on:{click:e.saveEditedReview}},[e._v("Сохранить")]):e._e()])])])])])])};i._withStripped=!0;var a=r(93),o=r(342);function s(e,t,r,i,a,o,s){try{var n=e[o](s),c=n.value}catch(e){return void r(e)}n.done?t(c):Promise.resolve(c).then(i,a)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function n(e){s(o,i,a,n,c,"next",e)}function c(e){s(o,i,a,n,c,"throw",e)}n(void 0)}))}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d={mixins:[r(342).mixin],validators:{renderedPhotoUrl:function(e){return o.Validator.value(e).required("Загрузите картинку")},"review.author":function(e){return o.Validator.value(e).required("Введите имя")},"review.occ":function(e){return o.Validator.value(e).required("Введите титул")},"review.text":function(e){return o.Validator.value(e).required("Введите отзыв")}},components:{errorTooltip:function(){return r.e(0).then(r.bind(null,436))}},data:function(){return{renderedPhotoUrl:"",review:{photo:"",author:"",occ:"",text:""}}},computed:l(l({},Object(a.e)("reviews",{reviewForm:function(e){return e.reviewForm},editedReview:function(e){return e.editedReview}})),{},{formTitle:function(){switch(this.reviewForm.editMode){case!0:return"Редактирование отзыва";case!1:return"Новый отзыв"}},remotePhotoPath:function(){return"https://webdev-api.loftschool.com/".concat(this.review.photo)}}),methods:l(l(l(l({},Object(a.d)("reviews",["CLOSE_FORM"])),Object(a.b)("reviews",["addReview","editReview"])),Object(a.d)("tooltip",["SHOW_TOOLTIP"])),{},{appendFileAndRenderPhoto:function(e){var t=this,r=e.target.files[0];this.review.photo=r;var i=new FileReader;try{i.readAsDataURL(r),i.onload=function(){t.renderedPhotoUrl=i.result}}catch(e){alert(e.message)}},createReviewFormData:function(){var e=new FormData;return e.append("author",this.review.author),e.append("occ",this.review.occ),e.append("text",this.review.text),e.append("photo",this.review.photo),e},addNewReview:function(){var e=this;return n(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validate();case 2:if(t.t0=t.sent,!1!==t.t0){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,r=e.createReviewFormData(),t.next=9,e.addReview(r);case 9:e.SHOW_TOOLTIP({type:"good",text:"Отзыв добавлен"}),e.CLOSE_FORM(),t.next=17;break;case 13:t.prev=13,t.t1=t.catch(5),alertr(t.t1.message),e.SHOW_TOOLTIP({type:"error",text:"Произошла ошибка"});case 17:case"end":return t.stop()}}),t,null,[[5,13]])})))()},setEditedReview:function(){this.review=l({},this.editedReview),this.renderedPhotoUrl=this.remotePhotoPath},saveEditedReview:function(){var e=this;return n(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validate();case 2:if(t.t0=t.sent,!1!==t.t0){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,r={id:e.review.id,data:e.createReviewFormData()},t.next=9,e.editReview(r);case 9:e.SHOW_TOOLTIP({type:"good",text:"Отзыв обновлен"}),e.CLOSE_FORM(),t.next=17;break;case 13:t.prev=13,t.t1=t.catch(5),alert(t.t1.message),e.SHOW_TOOLTIP({type:"error",text:"Произошла ошибка"});case 17:case"end":return t.stop()}}),t,null,[[5,13]])})))()}}),created:function(){this.reviewForm.editMode&&this.setEditedReview()}},u=(r(417),r(341)),w=Object(u.a)(d,i,[],!1,null,"8de27280",null);w.options.__file="src/admin/components/reviews/reviewForm.vue";t.default=w.exports}}]);