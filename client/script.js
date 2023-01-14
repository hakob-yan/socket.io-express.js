const socket = io('http://localhost:3000');

socket.on('connect',()=>{
    console.log(`you connected to ${socket.id}`);
});

setInterval(()=>{
    socket.emit('custom-event','Hi',5)
},5000)