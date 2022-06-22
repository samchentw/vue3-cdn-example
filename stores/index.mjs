import config from '/stores/modules/config.mjs';

const store = new Vuex.Store({
    modules: { config },
    state: {
        count: 0,
    },
    mutations: {
        addCount(state) {
            state.count += 1;
        },
    },

    getters: {

    },
    actions: {

    }
});

export default store;