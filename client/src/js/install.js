const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    butInstall.textContent = 'Click to install!';
});

// TODO: Implement a click event handler on the `butInstall` element
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', () => {
    // event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installing!';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    butInstall.textContent = 'Successfully installed!';
    console.log('👍', 'appinstalled', event);
});
