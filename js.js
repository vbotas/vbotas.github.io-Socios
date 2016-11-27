$(document).ready(function() {
	var m = '';
	var m_act='';
	var mens = 0;
	i = 0;
	timeline();
	// cargar_timeline();
	var altura = $('#botonPerfil').offset().top;
	console.log('la altura es ' + altura);
	$(window).on('scroll',function() {
		if ( $(window).scrollTop() > altura ) {
			$('#wrapper').addClass('menu-fixed');
		} else {
			$('#wrapper').removeClass('menu-fixed');
		}
	})

});

var timeline = function() {
	$.getJSON('./timeline.json', function(datos){
		console.log(datos.mensajes);
		//for (mens in datos.mensajes) {
		//console.log(mens);
		//console.log(datos.mensajes.length);
		for (var mens = 0; mens < datos.mensajes.length; mens++) {
			autor_mensaje = datos.mensajes[mens].autor;
			//console.log(mens);
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
			//console.log(mensaje);
			//console.log(i);
			$('<br />').appendTo('#texto');
			$('<div>', {
				'class': 'mensaje_cargado',
				'onclick': 'mostrar_mensaje()',
				'id':'mensaje'+i
			}).appendTo('#texto');
			$('<img>', {
				'id': 'avatar',
				'src': mensaje[1]
			}).appendTo('#mensaje'+i);
			$('<h4>', {
				'id': 'autor',
				html: mensaje[0]
			}).appendTo('#mensaje'+i);
			$('<h4>', {
			 	'id': 'titulo' + i,
			 	'class': 'titulo',
			 	html: mensaje[2]}
			 	).appendTo('#mensaje'+i);
			$('<p>', {
				'id': 'contenido' + i,
				'class': 'contenido',
				html: mensaje[3]
			}).appendTo('#mensaje'+i);
			$('<h6>', {
				'id': 'fecha' + i,
				'class': 'fecha',
				html: mensaje[4]
			}).appendTo('#mensaje'+i);
			$('<button>', {
			 	'type': 'button',
			 	'id': 'cerrar' + i,
			 	'class': 'cerrar',
			 	html: 'Cerrar',
			 	'onclick': 'cerrar_mensaje()'
			 	}).appendTo('#mensaje'+i);
			i++;
			console.log(i);
			
		};
	});
};

// var cargar_timeline = function() {
// 	console.log('llama a la funcion');
// 	$('#texto').on('click','.mensaje_cargado', function() {
// 		console.log('clickaste un mensaje');
// 	})
// };

var mostrar_mensaje = function () {
	// $('.titulo').slideToggle('fast', 'swing');
	//console.log('aparece titulo');
	// console.log($(this).attr('id'));
	//var oID = $(this).attr("id");
	//console.log(idMensaje);
	//console.log(idTitulo);
	//$('#'+idTitulo).slideToggle('fast','swing');
	$('#texto').on('click','.mensaje_cargado',function() {
		console.log('ABRELO, COÑO');
		var id_recibido = $(this).attr('id');
		console.log('El ID de este mensaje es: ' + id_recibido);
		var id_extraido = id_recibido.substring(7,8);
		console.log(id_extraido);
		$('#titulo'+id_extraido).css({'display':'block'});
		$('#contenido'+id_extraido).css({'display':'block'});
		$('#fecha'+id_extraido).css({'display':'block'});
		$('#cerrar'+id_extraido).css({'display':'block'});
	})
};

var cerrar_mensaje = function() {
	$('#texto').on('dblclick','.mensaje_cargado',function() {
		console.log('CIERRALO, COÑO');
		var id_recibido = $(this).attr('id');
		console.log('El ID de este mensaje es: ' + id_recibido);
		var id_extraido = id_recibido.substring(7,8);
		console.log(id_extraido);
		$('#titulo'+id_extraido).css({'display':'none'});
		$('#contenido'+id_extraido).css({'display':'none'});
		$('#fecha'+id_extraido).css({'display':'none'});
		$('#cerrar'+id_extraido).css({'display':'none'});
	})
}