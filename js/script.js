let menu = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-icon');
let navItems = document.querySelectorAll('.navbar li a');

menuIcon.onclick = () => {
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
}

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
