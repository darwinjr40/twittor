
const options = {
    body: 'Agrega esta aplicación a tu pantalla de inicio para un acceso rápido.',
    icon: '../img/icons/icon-72x72.png', // Ruta a un ícono para la notificación
  };

// Verificar si el navegador admite las notificaciones web
if ('Notification' in window && navigator.serviceWorker) {
    // Verificar si las notificaciones están permitidas
    if (Notification.permission === 'granted') {
      // Mostrar una notificación informativa
      new Notification('Agrega esta PWA a tu pantalla de inicio', options);
    } else if (Notification.permission !== 'denied') {
      // Pedir permiso al usuario para mostrar notificaciones
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          // Mostrar una notificación informativa
          new Notification('Agrega esta PWA a tu pantalla de inicio', options);
        }
      });
    }
  }
alert('¡Bienvenido a nuestra aplicación! Puedes agregarla a tu pantalla de inicio para un acceso más rápido.');
  



var url = window.location.href;
var swLocation = '/twittor/sw.js';



if ( navigator.serviceWorker ) {
    
    console.log('swLocation4');
    
    if ( url.includes('localhost') ) {
        swLocation = '/sw.js';  
    }
    
    navigator.serviceWorker.register( swLocation );
    console.log(swLocation + 'asd');
}


 



// Referencias de jQuery

var titulo      = $('#titulo');
var nuevoBtn    = $('#nuevo-btn');
var salirBtn    = $('#salir-btn');
var cancelarBtn = $('#cancel-btn');
var postBtn     = $('#post-btn');
var avatarSel   = $('#seleccion');
var timeline    = $('#timeline');

var modal       = $('#modal');
var modalAvatar = $('#modal-avatar');
var avatarBtns  = $('.seleccion-avatar');
var txtMensaje  = $('#txtMensaje');

// El usuario, contiene el ID del héroe seleccionado
var usuario;




// ===== Codigo de la aplicación

function crearMensajeHTML(mensaje, personaje) {

    var content =`
    <li class="animated fadeIn fast">
        <div class="avatar">
            <img src="img/avatars/${ personaje }.jpg">
        </div>
        <div class="bubble-container">
            <div class="bubble">
                <h3>@${ personaje }</h3>
                <br/>
                ${ mensaje }
            </div>
            
            <div class="arrow"></div>
        </div>
    </li>
    `;

    timeline.prepend(content);
    cancelarBtn.click();

}



// Globals
function logIn( ingreso ) {

    if ( ingreso ) {
        nuevoBtn.removeClass('oculto');
        salirBtn.removeClass('oculto');
        timeline.removeClass('oculto');
        avatarSel.addClass('oculto');
        modalAvatar.attr('src', 'img/avatars/' + usuario + '.jpg');
    } else {
        nuevoBtn.addClass('oculto');
        salirBtn.addClass('oculto');
        timeline.addClass('oculto');
        avatarSel.removeClass('oculto');

        titulo.text('Seleccione Personaje');
    
    }

}


// Seleccion de personaje
avatarBtns.on('click', function() {

    usuario = $(this).data('user');

    titulo.text('@' + usuario);

    logIn(true);

});

// Boton de salir
salirBtn.on('click', function() {

    logIn(false);

});

// Boton de nuevo mensaje
nuevoBtn.on('click', function() {

    modal.removeClass('oculto');
    modal.animate({ 
        marginTop: '-=1000px',
        opacity: 1
    }, 200 );

});

// Boton de cancelar mensaje
cancelarBtn.on('click', function() {
   modal.animate({ 
       marginTop: '+=1000px',
       opacity: 0
    }, 200, function() {
        modal.addClass('oculto');
        txtMensaje.val('');
    });
});

// Boton de enviar mensaje
postBtn.on('click', function() {

    var mensaje = txtMensaje.val();
    if ( mensaje.length === 0 ) {
        cancelarBtn.click();
        return;
    }

    crearMensajeHTML( mensaje, usuario );

});