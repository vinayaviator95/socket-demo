
export const UPDATE_ALL_MESSAGES = "updateAllMessages"
const state = {
	messages: []
}

const getters = {
	getAllMessages: (state) => state.messages
}

const actions = {}

const mutations = {
	[UPDATE_ALL_MESSAGES]: (state, payload) => state.messages = payload,
}


export default {
	state,
	getters,
	actions,
	mutations
}