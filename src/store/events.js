export default {
  namespaced: true,
  state: () => ({
    loading: false,
    events: [],
  }),
  actions: {
    async load({ commit }, { service }) {
      commit('load');
      const events = await service.list();
      commit('update', events);
    },
  },
  mutations: {
    load(state) {
      state.loading = true;
    },
    update(state, events) {
      state.loading = false;
      state.events = events;
    },
  },
};
