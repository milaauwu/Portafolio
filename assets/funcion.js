window.addEventListener('scroll', function () {
    const footer = document.querySelector('footer');
    const distanceToTop = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (distanceToTop + windowHeight >= pageHeight) {
        footer.style.opacity = 1;
    } else {
        footer.style.opacity = 0;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const contenedorImagen = document.querySelector('.contenedor-imagen');
    const textoOverlay = contenedorImagen.querySelector('.texto-overlay');

    contenedorImagen.addEventListener('mouseenter', function () {
        textoOverlay.style.opacity = '1';
    });

    contenedorImagen.addEventListener('mouseleave', function () {
        textoOverlay.style.opacity = '0';
    });
});