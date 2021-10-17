
export const UPDATE_ONLINE_USERS = 'updateOnlineUsers'
export const UPDATE_CURRENT_USER = 'updateCurrentUser'

const state = {
	user: null,
	users: []
}

const getters = {
	getCurrentUser: (state) => state.user,
	getOnlineUsers: (state) => state.users
}

const actions = {}

const mutations = {
	[UPDATE_CURRENT_USER]: (state, payload) => state.user = payload,
	[UPDATE_ONLINE_USERS]: (state, payload) => state.users = payload
}


export default {
	state,
	getters,
	actions,
	mutations
}