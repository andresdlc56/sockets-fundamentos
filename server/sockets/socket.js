//Importando el modulo de io que se declaro en el server.js
const { io } = require('../server');

//Con la siguiente linea el servidor esta pendiente de lo que hace el cliente en el front
io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta app'
    });

    //NOTA: los "on" es para escuchar

    //Funcion para detectar la desconexion de un usuario con el servidor
    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    //Escuchar el cliente 
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Emitir un mensaje a todos los usuarios desde el server a los clientes
        client.broadcast.emit('enviarMensaje', data);

        /*
        if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN!'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!'
            });
        }
        */
    });
});