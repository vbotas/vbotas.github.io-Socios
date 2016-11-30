$(document).ready(function() {
	var m = '';
	var m_act='';
	var mens = 0;
	i = 0;
	j = 0;
	k = 0;
	$('#tabs').tabs();
	timeline();
	// cargar_timeline();
	var altura = $('#wrapper').offset().top;
	console.log('la altura es ' + altura);
	
	$(window).on('scroll',function() {
		if ( $(window).scrollTop() > altura ) {
			$('#lista_tabs').addClass('menu-fixed');
		} else {
			$('#lista_tabs').removeClass('menu-fixed');
		}
	})
	setTimeout(cargar_mensajesNoLeidos, 3000);
	
	$('#mensajesNoLeidos').on('click', function() {
		$('#mensajeInfo').css({'display':'none'});
		$('#mensajesNoLeidos_cargados').css({'display':'block'});
	});

	$('#botonPerfil').on('click', function() {
		paginaperfil();
	})
	$('#ui-id-1').on('click', function() {
		$('#texto').css({'display':'block'});
		$('#mensajesNoLeidos').css({'display':'block'});
	})
	$('#ui-id-2').on('click', function() {
		$('#texto').css({'display':'none'});
		$('#mensajesNoLeidos').css({'display':'none'});
		paginaperfil();
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
			console.log(mensaje);
			//console.log(i);
			$('<br />').appendTo('#texto');
			$('<div>', {
				'class': 'mensaje_cargado',
				'onclick': 'mostrar_mensajeLeido()',
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
			 	'onclick': 'cerrar_mensajeLeido()'
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

var mostrar_mensajeLeido = function () {
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
		var id_extraido = id_recibido[id_recibido.length - 1];
		console.log(id_extraido);
		$('#titulo'+id_extraido).css({'display':'block'});
		$('#contenido'+id_extraido).css({'display':'block'});
		$('#fecha'+id_extraido).css({'display':'block'});
		$('#cerrar'+id_extraido).css({'display':'block'});
	})
};
var mostrar_mensajeNoLeido = function () {
	$('#mensajesNoLeidos_cargados').on('click','.mensaje_cargadoSinLeer',function() {
		console.log('ABRELO, COÑO');
		var idsinleer_recibido = $(this).attr('id');
		console.log('El ID de este mensaje es: ' + idsinleer_recibido);
		var idsinleer_extraido = idsinleer_recibido[idsinleer_recibido.length - 2] + idsinleer_recibido[idsinleer_recibido.length - 1];
		console.log(idsinleer_extraido);
		$('#titulo'+idsinleer_extraido).css({'display':'block'});
		$('#contenido'+idsinleer_extraido).css({'display':'block'});
		$('#fecha'+idsinleer_extraido).css({'display':'block'});
		$('#cerrar'+idsinleer_extraido).css({'display':'block'});
	})
};
var mostrar_mismensajes = function () {
	$('#miperfil').on('click','.misMensajes', function() {
		var idMM_recibido = $(this).attr('id');
		console.log('El ID de este mensaje es: ' + idMM_recibido);
		var idMM_extraido = idMM_recibido[idMM_recibido.length-3] + idMM_recibido[idMM_recibido.length-2] + idMM_recibido[idMM_recibido.length-1];
		console.log(idMM_extraido);
		$('#titulo'+idMM_extraido).css({'display':'block'});
		$('#contenido'+idMM_extraido).css({'display':'block'});
		$('#fecha'+idMM_extraido).css({'display':'block'});
		$('#cerrar'+idMM_extraido).css({'display':'block'});
	})
};





var cerrar_mensajeLeido = function() {
	$('#texto').on('dblclick','.mensaje_cargado',function() {
		console.log('CIERRALO, COÑO');
		var id_recibido = $(this).attr('id');
		console.log('El ID de este mensaje es: ' + id_recibido);
		var id_extraido = id_recibido[id_recibido.length - 1];
		console.log(id_extraido);
		$('#titulo'+id_extraido).css({'display':'none'});
		$('#contenido'+id_extraido).css({'display':'none'});
		$('#fecha'+id_extraido).css({'display':'none'});
		$('#cerrar'+id_extraido).css({'display':'none'});
	})
};
var cerrar_mensajeNoLeido = function () {
	$('#mensajesNoLeidos_cargados').on('dblclick','.mensaje_cargadoSinLeer',function() {
		console.log('CIERRALO, COÑO');
		var idsinleer_recibido = $(this).attr('id');
		console.log('El ID de este mensaje es: ' + idsinleer_recibido);
		var idsinleer_extraido = idsinleer_recibido[idsinleer_recibido.length - 2] + idsinleer_recibido[idsinleer_recibido.length - 1];
		console.log(idsinleer_extraido);
		$('#titulo'+idsinleer_extraido).css({'display':'none'});
		$('#contenido'+idsinleer_extraido).css({'display':'none'});
		$('#fecha'+idsinleer_extraido).css({'display':'none'});
		$('#cerrar'+idsinleer_extraido).css({'display':'none'});
	})
};
var cerrar_mismensajes = function () {
	$('#miperfil').on('dblclick','.misMensajes', function() {
		var idMM_recibido = $(this).attr('id');
		console.log('El ID de este mensaje es: '+ idMM_recibido);
		var idMM_extraido = idMM_recibido[idMM_recibido.length-3] + idMM_recibido[idMM_recibido.length-2] + idMM_recibido[idMM_recibido.length-1];
		console.log(idMM_extraido);
		$('#titulo'+idMM_extraido).css({'display':'none'});
		$('#contenido'+idMM_extraido).css({'display':'none'});
		$('#fecha'+idMM_extraido).css({'display':'none'});
		$('#cerrar'+idMM_extraido).css({'display':'none'});
	})
};




var cargar_mensajesNoLeidos = function() {
	

	$.getJSON('./update.json', function(datos2) {
		console.log(datos2.mensajes_sinLeer);

		for(var mens_sinleer = 0; mens_sinleer < datos2.mensajes_sinLeer.length; mens_sinleer++) {
			
			autor_mensajesSinLeer = datos2.mensajes_sinLeer[mens_sinleer].autor;
			avatar_mensajeSinLeer = datos2.mensajes_sinLeer[mens_sinleer].avatar;
			titulo_mensajeSinLeer = datos2.mensajes_sinLeer[mens_sinleer].titulo;
			contenido_mensajeSinLeer = datos2.mensajes_sinLeer[mens_sinleer].contenido;
			fecha_mensajeSinLeer = datos2.mensajes_sinLeer[mens_sinleer].fecha;
			var mensaje_sinLeer = [];

			mensaje_sinLeer.push(autor_mensajesSinLeer);
			mensaje_sinLeer.push(avatar_mensajeSinLeer);
			mensaje_sinLeer.push(titulo_mensajeSinLeer);
			mensaje_sinLeer.push(contenido_mensajeSinLeer);
			mensaje_sinLeer.push(fecha_mensajeSinLeer);
			console.log(mensaje_sinLeer);
			var num_mensajesSinLeer = datos2.mensajes_sinLeer.length;
			console.log('Tienes ' + num_mensajesSinLeer+ ' mensajes sin leer');
			
			$('<br />').appendTo('#mensajesNoLeidos_cargados');
			$('<div>', {
				'class': 'mensaje_cargadoSinLeer',
				'onclick': 'mostrar_mensajeNoLeido()',
				'id': 'mensajeSinLeer'+j+j
			}).appendTo('#mensajesNoLeidos_cargados');
			$('<img>', {
				'id': 'avatar',
				'src': mensaje_sinLeer[1]
			}).appendTo('#mensajeSinLeer'+j+j);
			$('<h4>', {
				'id': 'autor',
				html: mensaje_sinLeer[0]
			}).appendTo('#mensajeSinLeer'+j+j);
			$('<h4>', {
				'id': 'titulo' +j+j,
				'class': 'titulo',
				html: mensaje_sinLeer[2]
			}).appendTo('#mensajeSinLeer'+j+j);
			$('<p>', {
				'id': 'contenido'+j+j,
				'class': 'contenido',
				html: mensaje_sinLeer[3]
			}).appendTo('#mensajeSinLeer'+j+j);
			$('<h6>', {
				'id': 'fecha'+j+j,
				'class': 'fecha',
				html: mensaje_sinLeer[4]
			}).appendTo('#mensajeSinLeer'+j+j);
			$('<button>', {
				'type': 'button',
				'id': 'cerrar'+j+j,
				'class': 'cerrar',
				html: 'Cerrar',
				'onclick': 'cerrar_mensajeNoLeido()'
			}).appendTo('#mensajeSinLeer'+j+j);
			j++;
			console.log(j);
			//console.log('Ahora mostramos los mensajes no leidos');
			/*$('#mensajesNoLeidos').on('click','#mensajeInfo', function() {
				//$('#mensajesNoLeidos').css({'display':'none'});
				$('<br />').appendTo('#mensajesNoLeidos');
				$('<div>', {
					'class': 'mensaje_cargado',
					'onclick': 'mostrar_mensaje()',
					'id':'mensajeSinLeer'+j}).appendTo('#mensajesNoLeidos');
				$('<img>', {
					'id': 'avatar',
					'src': mensaje_sinLeer[1]}).appendTo('#mensajeSinLeer'+j);
				$('<h4>', {
					'id': 'autor',
					html: mensaje_sinLeer[0]}).appendTo('#mensajeSinLeer'+j);
				j++;
				console.log(j);*/
			//	});	
		}
		

		$('<p>', {
		'id': 'mensajeInfo',
	 	html: 'Tienes ' + num_mensajesSinLeer+ ' mensajes sin leer',
		}).appendTo('#mensajesNoLeidos');
		$('#mensajesNoLeidos').toggle(400);
		$('#mensajesNoLeidos').css({'display':'block'});
		$('#mensajeInfo').css({'display':'block'});
		});
		$('<div>', {
			'id': 'mensajesNoLeidos_cargados'
		}).appendTo('#mensajesNoLeidos');
};

/*var paginaperfil = function () {
	
	var nueva_ventana = window.open('', '_blank');
	nueva_ventana.alert('Abriste tu perfil');
	$('html').css({
		'background':'url("./Fondo.jpg") no-repeat center fixed',
		'background-size': 'cover'
	});
	$('<p>')
	nueva_ventana.on('ready', function() {
		alert('ya cargo la pagina');
	})
}*/


var paginaperfil = function () {
	
	$.getJSON('./myline.json', function (misDatos) {
		
		console.log(misDatos.MisMensajes);
		
		for (var mismens = 0; mismens < misDatos.MisMensajes.length; mismens++) {
			
			autorMisMensajes = misDatos.MisMensajes[mismens].autor;
			avatarMisMensajes = misDatos.MisMensajes[mismens].avatar;
			tituloMisMensajes = misDatos.MisMensajes[mismens].titulo;
			contenidoMisMensajes = misDatos.MisMensajes[mismens].contenido;
			fechaMisMensajes = misDatos.MisMensajes[mismens].fecha;

			var mensaje_mio = [];

			mensaje_mio.push(autorMisMensajes);
			mensaje_mio.push(avatarMisMensajes);
			mensaje_mio.push(tituloMisMensajes);
			mensaje_mio.push(contenidoMisMensajes);
			mensaje_mio.push(fechaMisMensajes);

			console.log(mensaje_mio);
			

			$('<br />').appendTo('#miperfil');
			$('<div>', {
				'class': 'misMensajes',
				'onclick': 'mostrar_mismensajes()',
				'id': 'MiMensaje'+k+k+k
			}).appendTo('#miperfil');
			$('<img>', {
				'id': 'avatar',
				'src': mensaje_mio[1]
			}).appendTo('#MiMensaje'+k+k+k);
			$('<h4>', {
				'id': 'autor',
				html: mensaje_mio[0]
			}).appendTo('#MiMensaje'+k+k+k);
			$('<h4>', {
				'id': 'titulo' +k+k+k,
				'class': 'titulo',
				html: mensaje_mio[2]
			}).appendTo('#MiMensaje'+k+k+k);
			$('<p>', {
				'id': 'contenido'+k+k+k,
				'class': 'contenido',
				html: mensaje_mio[3]
			}).appendTo('#MiMensaje'+k+k+k);
			$('<h6>', {
				'id': 'fecha'+k+k+k,
				'class': 'fecha',
				html: mensaje_mio[4]
			}).appendTo('#MiMensaje'+k+k+k);
			$('<button>', {
				'type': 'button',
				'id': 'cerrar'+k+k+k,
				'class': 'cerrar',
				html: 'Cerrar',
				'onclick': 'cerrar_mismensajes()'
			}).appendTo('#MiMensaje'+k+k+k);
			k++;
			console.log(k);
		}
	})
};