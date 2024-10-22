// Seleccionamos las secciones .info
const sections = document.querySelectorAll('.info');

// Añadimos el hover listener para mostrar el texto preview
sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        const preview = section.querySelector('.preview_text');
        if (preview) {
            preview.style.display = 'block'; // Mostrar el texto preview
        }
    });

    section.addEventListener('mouseout', () => {
        const preview = section.querySelector('.preview_text');
        if (preview) {
            preview.style.display = 'none'; // Ocultar el texto preview cuando el mouse salga
        }
    });
});
