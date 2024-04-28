function enableMenu() {
    document.querySelector('header').classList.toggle('enabled');
}

function toggleMenu() {
    document.querySelector('header').classList.toggle('hidden');
    document.querySelector('main').classList.toggle('hidden');
}