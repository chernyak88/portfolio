<template lang="pug">
    .container.switches-container
        ul.switches
            li.switches__item(v-for="tab in tabs")
                router-link(
                    :data-text="tab.title"
                    :to="tab.href"
                    exact-active-class="active"
                ).switches__link
</template>

<script>
export default {
   data() {
       return {
           tabs: [
               { title: "Обо мне", href: "/"},
               { title: "Работы", href: "/works"},
               { title: "Отзывы", href: "/reviews"}
           ]
       }
   }
};
</script>

<style lang="postcss">
@import "../../styles/mixins.pcss";

.switches {
    display: flex;
    height: 77px;
    
    &__item {
        font-size: 16px;
        font-weight: 400;
        line-height: 36.14px;
        height: 100%;
        margin-right: 30px;

        @include phones {
            margin-right: 3px;
        }
        &:last-child {
            margin-right: 0;
        }
    }
    &__link {       
        text-decoration: none;
        height:100%;
        vertical-align: middle;
        display: flex;
        align-items: center;
        width: 125px;
        justify-content: center;
        border-bottom: 3px solid transparent;
        &::before {
            content: attr(data-text);
        }
         &:hover, &.active {
            font-weight: 600;
            color: #383bcf;
            border-bottom: 3px solid #383bcf;
        }
    }
}

</style>