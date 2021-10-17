import Messages from '@/store/messages/messages.js'
import Users from '@/store/users/users.js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		Messages,
		Users
	}
})

export default store