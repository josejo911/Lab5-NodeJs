var socket = io('http://localhost:3000');
socket.on('chat', data=>read(data));
var messagesArea = document.getElementById('chatsHistory');
var textEdit = document.getElementById('message-to-send');
messagesArea.scrollTop = messagesArea.scrollHeight;


function read(data) {
    console.log(data)

    messagesArea.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        createMsg(data[i]);
    }

}


function sendMessage() {
    let data = {
        student_id: "14343",
        text: textEdit.value,
        nick: 'Chinitoveloxxx'
    }

    socket.emit('message', data);
    createMsg(data);
    messagesArea.scrollTop = messagesArea.scrollHeight;
    textEdit.value = "";
}

function createMsg(msg) {
    if(msg.student_id == "14343"){

        let box = document.createElement('LI');
        box.classList.add("clearfix");
        let box2 = document.createElement('DIV');
        box2.classList.add('message-data');
        box2.classList.add('align-right');
        let span = document.createElement('SPAN');
        span.classList.add('message-data-name');
        span.innerHTML = msg.nick;
        box2.appendChild(span);
        let messageBox = document.createElement('DIV');
        messageBox.classList.add('message');
        messageBox.classList.add('other-message');
        messageBox.classList.add('float-right');
        messageBox.innerHTML = msg.text;
        box.appendChild(box2);
        box.appendChild(messageBox);
        messagesArea.appendChild(box);


    }
    else
    {

        let box = document.createElement('LI');
        let box2 = document.createElement('DIV');
        box2.classList.add('message-data');
        let span = document.createElement('SPAN');
        span.classList.add('message-data-name');
        span.innerHTML = msg.nick;
        box2.appendChild(span);
        let messageBox = document.createElement('DIV');
        messageBox.classList.add('message');
        messageBox.classList.add('my-message');
        messageBox.innerHTML = msg.text;
        box.appendChild(box2);
        box.appendChild(messageBox);
        messagesArea.appendChild(box);

    }

}

function fastKey1(){
        let data = {
        student_id: "14343",
        text: "LOL",
        nick: 'Chinitoveloxxx'
    }

    socket.emit('message', data);
    createMsg(data);
    messagesArea.scrollTop = messagesArea.scrollHeight;
    textEdit.value = "";
}

function fastKey2(){
        let data = {
        student_id: "14343",
        text: "ESTE MEN",
        nick: 'Chinitoveloxxx'
    }

    socket.emit('message', data);
    createMsg(data);
    messagesArea.scrollTop = messagesArea.scrollHeight;
    textEdit.value = "";
}

function fastKey3(){
        let data = {
        student_id: "14343",
        text: "HOLA",
        nick: 'Chinitoveloxxx'
    }

    socket.emit('message', data);
    createMsg(data);
    messagesArea.scrollTop = messagesArea.scrollHeight;
    textEdit.value = "";
}

function fastKey4(){
        let data = {
        student_id: "14343",
        text: "JEJEJE",
        nick: 'Chinitoveloxxx'
    }

    socket.emit('message', data);
    createMsg(data);
    messagesArea.scrollTop = messagesArea.scrollHeight;
    textEdit.value = "";
}
