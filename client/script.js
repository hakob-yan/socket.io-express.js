import { io } from "socket.io-client"; 

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log(`you connected to ${socket.id}`);
});

socket.on('server-event', (num) => {
    console.log(num);
})
setInterval(() => {
    socket.emit('custom-event', 'Hi', 5)
}, 5000)