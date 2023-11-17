const { Socket } = require('dgram');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname,'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')

app.use('/', (req, res) => {
  res.render('index.html');
});

io.on('connection', socket => {
  console.log(`socket conectado: ${socket.id}`);
})

http.listen(5501);