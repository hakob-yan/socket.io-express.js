import { io } from "socket.io-client";
const socket = io('http://localhost:3000');


const formMessage = document.getElementById('formMessage');
const formRoom = document.getElementById('formRoom');
socket.on('connect', () => {
    console.log(`Socket-ID  ${socket.id}`);


    formMessage.onsubmit = (e) => {
        e.preventDefault();
        const value = document.getElementById('fname').value
        socket.emit('custom-event', value)
    }
    formRoom.onsubmit = (e) => {
        e.preventDefault();
        const value = document.getElementById('fname1').value
        socket.emit('custom-event', value)
    }

    socket.on('server-event', (str) => {
        serverMessage.innerText=str
    })

});









