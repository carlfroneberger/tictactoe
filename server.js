const PORT = 4000;
const io = require('socket.io')(PORT);

io.on('connection', socket => {
    console.log('user connected');
    io.emit('message', 'a user has connected');
})