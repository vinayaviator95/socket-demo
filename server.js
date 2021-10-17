const express = require('express');
const res = require('express/lib/response');
const http = require('http')
const app = express()
const { Server } = require("socket.io");

const server = http.createServer(app)
const io = new Server(server, {
	cors: {
		origin: '*'
	}
});

const messages = []
const users = []
io.on('connection', socket => {
	socket.on('message', (data) => {
		messages.push(data)
		io.sockets.emit('messages', messages)
	})
	socket.on('user-connected', userInfo => {
		if (!userInfo.isExistingUser) users.push(userInfo)
		io.sockets.emit('user-connected', userInfo)
		io.sockets.emit('get-all-users', users)
	})

	socket.on('user-disconnected', userId => {
		users = users.filter(user => user.id !== id)
		io.sockets.emit('get-all-users', users)
	})

	socket.on('get-all-messages', () => socket.emit('messages', messages))

})

const PORT = 5000
server.listen(PORT, () => console.log(`running at http://localhost:${PORT}`))