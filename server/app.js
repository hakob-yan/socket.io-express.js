require('dotenv').config();
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const express = require('express');


const app = express();
app.set('port', process.env.PORT || 3000)

//setting up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('viw engine', 'pug')

//setting upbody parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//setting up static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes.home)


const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: ['http://127.0.0.1:5500'] }
})
io.on('connection', client => {
    console.log(client.id);
    client.on('custom-event', (str, num) => {
        console.log(str, num);
    })
});
server.listen(3000)