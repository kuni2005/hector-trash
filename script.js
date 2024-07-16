function mostrarModal() {
    // Ocultar el título y las imágenes de ojos
    document.getElementById('tituloBienvenida').style.display = 'none';
    document.getElementById('ojos').style.display = 'none';

    // Mostrar el modal
    document.getElementById('modalMensaje').style.display = 'block';
}

function calcularPeso() {
    // Ocultar el modal inicial
    document.getElementById('modalMensaje').style.display = 'none';
    // Mostrar mensaje de calculando
    document.getElementById('mensajeCalculando').style.display = 'block';
    // Simular cálculo del peso con un delay y una barra de progreso
    let progressBar = document.getElementById('barraProgreso');
    progressBar.style.width = '0';
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 10); // Iniciar la animación

    setTimeout(() => {
        document.getElementById('mensajeCalculando').style.display = 'none';
        document.getElementById('pesoCalculado').style.display = 'block';
    }, 2000); // 2 segundos de delay para completar la barra de progreso
}

function mostrarGracias() {
    // Ocultar el modal inicial
    document.getElementById('modalMensaje').style.display = 'none';
    // Mostrar mensaje de gracias
    document.getElementById('mensajeGracias').style.display = 'block';
    // Opcional: Ocultar después de un tiempo
    setTimeout(() => {
        document.getElementById('mensajeGracias').style.display = 'none';
    }, 2000); // 2 segundos de delay
}

function regresarInicio() {
    // Ocultar los modales
    document.getElementById('modalMensaje').style.display = 'none';
    document.getElementById('mensajeGracias').style.display = 'none';
    document.getElementById('mensajeCalculando').style.display = 'none';
    document.getElementById('pesoCalculado').style.display = 'none';

    // Mostrar el título y las imágenes de ojos
    document.getElementById('tituloBienvenida').style.display = 'block';
    document.getElementById('ojos').style.display = 'flex';
}
