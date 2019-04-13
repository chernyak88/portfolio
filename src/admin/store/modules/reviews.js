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
    async addNewReviewGroup({commit}, reviewAuthorPhoto, reviewAuthorName, reviewAuthorOcc, reviewText ) {
      try {
        const response = await this.$axios.post("/reviews", {
          photo: reviewAuthorPhoto,
          author: reviewAuthorName,
          occ: reviewAuthorOcc,
          text: reviewText
        });
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }   
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