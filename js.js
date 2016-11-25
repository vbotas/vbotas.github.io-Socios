$(document).ready(function() {
	var m = '';
	var m_act='';
	var mens = 0;
	i = 0;
	timeline();
	$(".mensajes_cargados").click(function() {
		alert('Item selected');
	});
});

var timeline = function() {
	$.getJSON('./datos.json', function(datos){
		//for (mens in datos.mensajes) {
		//console.log(mens);
		console.log(datos.mensajes.length);
		for (var mens = 0; mens < datos.mensajes.length; mens++) {
			autor_mensaje = datos.mensajes[mens].autor;
			console.log(mens);
			avatar_mensaje = datos.mensajes[mens].avatar;
			titulo_mensaje = datos.mensajes[mens].titulo;
			contenido_mensaje = datos.mensajes[mens].contenido;
			fecha_mensaje = datos.mensajes[mens].fecha;
			var mensaje = [];
			//$('#texto').append('<div class="mensaje"><h1>Mensaje '+ (mens+1) +'</h1></div>');
			//$("<p id='autor'>Autor: " + autor_mensaje + "</p>").appendTo('#texto');
			mensaje.push(autor_mensaje);
			//$('#texto').append('<img id="avatar" src="' + avatar_mensaje + '""></img>');
			mensaje.push(avatar_mensaje);
			//$('#texto').append('<h3 id="titulo">' + titulo_mensaje + '</h3>');
			mensaje.push(titulo_mensaje);
			//$('#texto').append('<p id="contenido">' + contenido_mensaje + '</p>');
			mensaje.push(contenido_mensaje);
			//$('#texto').append('<p id="fecha">Fecha: ' + fecha_mensaje + '</p>');
			mensaje.push(fecha_mensaje);
			console.log(mensaje);
			console.log(i);
			$('<br />').appendTo('#texto');
			$('<div>', {'class': 'mensajes_cargados', 'id':'mensaje'+i}).appendTo('#texto');
			$('<h4>', {'id': 'autor', html: mensaje[0]}).appendTo('#mensaje'+i);
			$('<img>', {'id': 'avatar', 'src': mensaje[1]}).appendTo('#mensaje'+i);
			$('<h4>', {'id': 'titulo', html: mensaje[2]}).appendTo('#mensaje'+i);
			$('<p>', {'id': 'contenido', html: mensaje[3]}).appendTo('#mensaje'+i);
			$('<h6>', {'id': 'fecha', html: mensaje[4]}).appendTo('#mensaje'+i);

			i++;
		};
	});
};

