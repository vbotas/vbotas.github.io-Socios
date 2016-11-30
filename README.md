###MEJORAS
	- En cada mensaje, en lugar de existir un botón para desplegar todo el contenido del mensaje, simplemente con "clickar" en cualquier parte del mensaje se desplegará, y para cerrarlo, habrá que hacer "doubleclick" al botón "Cerrar" que aparece cuando se despliega el mensaje.



##PRÁCTICA BÁSICA
Esta práctica consiste en construir parte del interfaz de usuario de la aplicación "Socios", una nueva red social. En particular, vamos a representar en el navegador la información que nos va a llegar en varios documentos JSON. Para simular lo suficiente para poder realizar la interfaz de usuario, estos documentos JSON serán ficheros estáticos que se servirán al navegador con el resto de la aplicación, que estará compuesta por un fichero HTML, otro JavaScript y otro CSS.

Los documentos JSON mencionados son los siguientes:

	- timeline.json: Mensajes de los socios del usuario, en modo resumen (ver detalle más abajo).
	- update.json: Mensajes de los socios que aún no se a mostrado en el timeline.
	- myline.json: Mensajes del usuario, puestos en el pasado.

Para cada mensaje, los documentos JSON tendrán al menos la siguiente información:

	- Autor: Nombre del autor del mensaje.
	- Avatar: URL del avatar (imagen) del autor del mensaje.
	- Título: Títuo del mensaje.
	- Contenido: Contenido del mensaje.
	- Fecha: Fecha en que fue escrito el mensaje.

Opcionalmente, para cada mensaje se podrá ofrecer otra información adicional, como coordenadas de geolocalización, URLs de anexos (attachments), etc.

Además de estos documentos JSON con la información de mensajes, se servirán vía HTTP las imágenes (avatares) que se citen en ellos, y los tres documentos básicos de la aplicación: uno HTML, otro CSS y otro JavaScript.

La aplicación mostrará en pestañas (tabs) diferentes la siguiente información:

	- Timeline del usuario: Mensajes de sus socios, según listado en "timeline.json". Además, una vez mostrados estos mensajes, e buscará "update.json". Si tiene alguna noticia, se mostrará una nota al principio del timeline indicando el número de mensajes pendientes. Cuando se pulse en esa nota, se desplegarán los mensajes pendientes que estaban en "update.json".
	- Mensajes enviados por el usuario, según el listado en "myline.json".

En principio, de cada mensaje se mostrará sólo el nombre del autor, su avatar y el título del mensaje. Se ofrecerá un botón para desplegar todo el mensaje: si se pulsa, se desplegará el resto de la información.

Se podrán realizar otras mejoras a este comportamiento básico.

Para la práctica se entregarán los siguientes ficheros:

	- Un fichero "README" que resuma las mejoras, si las hay, y explique cualquier peculiaridad de la entrega.
	- Los 3 ficheros mencionados anteriormente (HTML, CSS, JS).
	- Los ficheros JSON especificados (timeline.json, myline.json, update.json).
	- Los ficheros de avatar (imágenes) necesarios.
	- Cualquier biblioteca JavaScript que pueda hacer falta (normalmente, sólo JQuery y JQueryUI) para que la aplicación funcione.

El fichero HTML se llamará "index.html", y todo el directorio (repositorio) estará construido de tal forma que bastará con servirlo mediante un servidot HTTP, y cargar en un navegador este fichero HTML, para que la vista de nuestros socios (y todo el interfaz de usuario) funcione. Igualmente, deberá funcionar si se carga desde GitHub (que mostrará lo que haya en la rama gh-pages).