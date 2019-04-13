export default {
  namespaced: true,
  state: {
    works: []
  },
  actions: {
    async addNewWorkGroup(state, workTitle) {
      try {
        const response = await this.$axios.post("/works", {
          title: workTitle
        });
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }   
    }
  }
};