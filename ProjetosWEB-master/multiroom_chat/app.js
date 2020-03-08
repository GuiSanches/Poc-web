// Importar configurações servidor

let app = require('./config/server');

// parametrizar porta de escuta
let server = app.listen(80, () => {
    console.log('Servidor ON');
});

let io = require('socket.io').listen(server);

app.set('io', io);

// criar a conexao por websocket
io.on('connection', (socket) => {
    console.log('Usuario conectou');

    socket.on('disconnect', () => {
        console.log('Usuario desconectou');
    });

    socket.on("msgParaServidor", (data) => {
        // Dialogo
        socket.emit(
            'msgParaCliente',
            {nome: data.nome, mensagem: data.mensagem, cor: 'red'}
        );
    
        socket.broadcast.emit(
            'msgParaCliente',
            { nome: data.nome, mensagem: data.mensagem, cor: 'black' })

        // participantes
        if(data.apelido_atualizado == 0) {
            socket.emit(
                'participantesParaCliente',
                { nome: data.nome }
            );

            socket.broadcast.emit(
                'participantesParaCliente',
                { nome: data.nome }
            );
        }
        
    });

    

    

});  
