// imports
importScripts('js/sw-utils.js');


  
const STATIC_CACHE    = 'static-v4';
const DYNAMIC_CACHE   = 'dynamic-v2';
const INMUTABLE_CACHE = 'inmutable-v1';


const APP_SHELL = [
    // '/',
    'index.html',
    'css/style.css',
    'img/favicon.ico',
    'img/avatars/hulk.jpg',
    'img/avatars/ironman.jpg',
    'img/avatars/spiderman.jpg',
    'img/avatars/thor.jpg',
    'img/avatars/wolverine.jpg',
    'js/app.js',
    'js/sw-utils.js'
];

const APP_SHELL_INMUTABLE = [
    'https://fonts.googleapis.com/css?family=Quicksand:300,400',
    'https://fonts.googleapis.com/css?family=Lato:400,300',
    'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
    'css/animate.css',
    'js/libs/jquery.js'
];



self.addEventListener('install', e => {


    // const cacheStatic = caches.open( STATIC_CACHE ).then(cache => 
    //     cache.addAll( APP_SHELL ));

    // const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache => 
    //     cache.addAll( APP_SHELL_INMUTABLE ));

    // e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ])  );

    console.log( 'Instalado el Service Worker' );
    console.log(e);
});


self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    // const respuesta = caches.keys().then( keys => {

    //     keys.forEach( key => {

    //         if (  key !== STATIC_CACHE && key.includes('static') ) {
    //             return caches.delete(key);
    //         }

    //         if (  key !== DYNAMIC_CACHE && key.includes('dynamic') ) {
    //             return caches.delete(key);
    //         }

    //     });

    // });

    // e.waitUntil( respuesta ); 

});




self.addEventListener( 'fetch', e => {
    console.log('fetch.. ', e);
    // const respuesta = caches.match( e.request ).then( res => {
    //     if ( res ) {
    //         return res;
    //     } else {

    //         return fetch( e.request ).then( newRes => {

    //             return actualizaCacheDinamico( DYNAMIC_CACHE, e.request, newRes );

    //         });

    //     }

    // });
    // e.respondWith( respuesta );
});


// self.addEventListener('beforeinstallprompt', (e) => {
//     e.preventDefault(); // Evita que el navegador muestre su propio mensaje de instalación
//     myInstallButton.addEventListener('click', () => {
//       e.prompt(); // Muestra el mensaje de instalación
//       e.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('El usuario instaló la PWA');
//         } else {
//           console.log('El usuario rechazó la instalación de la PWA');
//         }
//       });
//     });
//   });


