var express     = require('express')
var app         = express()
var request     = require('request')


var server = app.listen(3000, function() {
    console.log('Listening on port 3000')
})
var io = require('socket.io')(server);

app.use(express.static('src'))
app.get('/', function(req, res) {
    res.sendFile('./src/index.html')
})

var data = [];
getMessages();

io.on('connection', function(socket) {
    console.log('Conexion con socket');

    socket.emit('chat', data);

    socket.on('message', function(data) {
        request.post({
            url:'http://34.210.35.174:7000',
            form: {
                "student_id": data.student_id,
                "text" : data.text,
                "nick" : data.nick
            }},
            function(err,httpResponse,body){
                console.log(httpResponse)
            })
    })
})

setInterval(function() {
    getMessages()
}, 8000);

function getMessages() {
    request.get('http://34.210.35.174:7000', function(error, response, body) {
        let res = JSON.parse(body);
        console.log('Datos cargados')
        if (data.length != res.length) {
            console.log('Datos enviados');
            data = res;

            io.sockets.emit('chat', data);
        }
    })
}
