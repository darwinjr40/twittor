

window.onload = (e) => {
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        console.log('sw-utils.js');
    });


    const installButton = document.getElementById('install-button');
    // Asocia la llamada a prompt() al evento clic del botón
    installButton.addEventListener('click', () => {
        if (deferredPrompt) {
            // Llama a prompt() en respuesta al evento de clic del usuario
            deferredPrompt.prompt();
            console.log('nise-click');
            // Espera la respuesta del usuario
            deferredPrompt.userChoice
                .then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    });
};
