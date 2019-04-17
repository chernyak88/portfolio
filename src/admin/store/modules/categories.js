export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    ADD_CATEGORY: (state, category) => {
      state.categories.unshift(category);
    },
    DELETE_CATEGORIES: (state, removeGroupId) => {
      state.categories = state.categories.filter(
        category => category.id != removeGroupId
      );
    },
    EDIT_CATEGORY: (state, editedCategory) => {
      state.categories = state.categories.map(category =>
        category.id === editedCategory.id ? editedCategory : category
      );
    }
  },
  actions: {
    async addNewSkillGroup({ commit }, groupTitle) {
      try {
        const response = await this.$axios.post("/categories", {
          title: groupTitle
        });
        commit('ADD_CATEGORY', response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get("/categories");
        commit("SET_CATEGORIES", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeCategories({ commit }, categoriesId) {
      try {
        const response = await this.$axios.delete(
          `/categories/${categoriesId}`
        );
        commit("DELETE_CATEGORIES", categoriesId);
        return response;
      } catch (error) {
        alert("Ошибка в categories.js / admin DELETE_CATEGORIES");
      }
    },
    async editSkillGroup({ commit }, skillCard) {
      try {
        const response = await this.$axios.post(`/categories/${skillCard.id}`, {
          title: skillCard.category
        });
        commit("EDIT_CATEGORY", skillCard);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};
