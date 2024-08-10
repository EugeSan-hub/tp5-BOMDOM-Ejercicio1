let numeroMagico;
const iniciarJuego = () => {
    document.getElementById('inicioJuego').addEventListener('click', function() {
         numeroMagico = Math.floor(Math.random() * 100) + 1;
        document.getElementById('areaJuego').classList.remove('d-none');
        document.getElementById('areaJuego').classList.add('d-block');
        console.log("Número mágico generado: " + numeroMagico); 
    });

    document.getElementById('enviarAdivinanza').addEventListener('click', function() {
        const inputUsuario = parseInt(document.getElementById('inputUsuario').value, 10);
        if (isNaN(inputUsuario) || inputUsuario < 1 || inputUsuario > 100) {
            alert('Por favor, ingresa un número válido entre 1 y 100.');
            return;
        }
        if (inputUsuario === numeroMagico) {
            alert('¡Felicidades! Adivinaste el número mágico.');
         document.getElementById('areaJuego').classList.add('d-none');
            document.getElementById('areaJuego').classList.remove('d-block');
        } else if (inputUsuario > numeroMagico) {
            alert('El número que ingresaste es mayor que el número mágico.');
        } else {
            alert('El número que ingresaste es menor que el número mágico.');
        }
    });
};
iniciarJuego();