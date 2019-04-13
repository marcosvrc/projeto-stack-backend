const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


//mongoose.connect('mongodb://localhost:27017/rocketseat?retryWrites=true', {
mongoose.connect('mongodb+srv://administrator:administrator@cluster0-i9s5g.mongodb.net/omnistack?retryWrites=true', {

    useNewUrlParser : true
});

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})

app.use((req, res, next) => {
    req.io = io;
    return next();
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes'));
server.listen(3333);