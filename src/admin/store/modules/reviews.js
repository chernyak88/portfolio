export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    SET_REVIEWS: (state, reviews) => {
      state.reviews = reviews
    }
  },
  actions: {
    addNewReviewGroup(store, review) {
      const formData = new FormData();

      formData.append('photo', review.photo);
      formData.append('author', review.author);
      formData.append('occ', review.occ);
      formData.append('text', review.text);

      this.$axios.post('/reviews', formData);
    },
    async fetchReviews({commit}) {
      try {
        const response = await this.$axios.get('/reviews/{122}');
        commit("SET_REVIEWS", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }   
    }
  }
};