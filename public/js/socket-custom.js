var socket = io();

//"on" para escuchar eventos
//Funcion que me mantendra en comunicacion con el servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Funcion que se ejecutara cuando perdemos conexion con el servidor
socket.on('disconnect', function() {
    console.log('Perdimos Conexion con el Servidor');
});

//Enviar información al servidor
socket.emit('enviarMensaje', {
    usuario: 'Andres Jose',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

//Escuchar Informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})