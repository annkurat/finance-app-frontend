import Vuex from "vuex";

export default new Vuex.Store({
	state: {
		user: null,
	},
	mutations: {
		setUser(state, userData) {
			state.user = userData;
		},
	},
	getters: {
		getUserData(state) {
			return state.user;
		},
	},
});
