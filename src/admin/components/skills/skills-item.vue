<template lang="pug">
    tr(v-if="editmode === false").skills-row-wrapper
        td.skills-cell {{skill.title}}
        td.skills-cell
            .skills__input
                .skills__input-text {{skill.percent}}
        td.skills-cell 
            button(type="button" @click="editmode = true").btn.is-pencil.grayscale.no-words
        td.skills-cell 
            button(type="button" @click="removeExistedSkill").btn.is-trash.grayscale.no-words

    tr(v-else).skills-row-wrapper
        td.skills-cell
            input(type="text" v-model="editedSkill.title")
        td.skills-cell
            .skills__input
                input(type="text" v-model="editedSkill.percent").skills__input-text
                    
        td.skills-cell 
            button(type="button" @click="save").btn.is-tick.no-words
        td.skills-cell 
            button(type="button" @click="editmode = false").btn.is-cross.no-words
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        skill: Object
    },
    data() {
        return {
            editmode: false,
            editedSkill: {...this.skill}
        }
    },
    methods: {
        ...mapActions('skills', ['removeSkill', "editSkill"]),

        async removeExistedSkill() {
            try { 
                await this.removeSkill(this.skill.id);
            } catch (error) {
                alert('Проблема с удалением скилла');
                
            }
        },
        async save () {
            try {
               await this.editSkill(this.editedSkill);
               this.editmode = false;
            } catch (error) {
                alert('Проблема при изменение скила');
            }
        }
    },
}
</script>

<style lang="postcss">

.skills-row-wrapper {
    width: 100%;
}

.skills-cell {
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 5px;
    &:first-child {
    width: 300px;
    }
}

.skills__input {
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
    &::after {
      content: "%";
      margin-left: 14px;
    }
    &-text {
        width: 100%;
    }
}
</style>