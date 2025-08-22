/**
 * app.ts - Lógica para el formulario de registro
 * Autor: Francisco Valdivia
 * Fecha: 18/08/2025
 *
 * Este archivo contiene la lógica para manejar el formulario de registro de usuario.
 */
// Función para inicializar el formulario y sus eventos
function inicializarFormulario() {
    var formulario = document.getElementById('registroForm');
    var resultado = document.getElementById('resultado');
    // Evento submit del formulario
    formulario.addEventListener('submit', function (event) {
        // Obtener valores para validación previa
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellidoPaterno').value;
        var direccion = document.getElementById('direccion').value;
        // Validaciones previas antes de preventDefault
        var regexSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        if (!regexSoloLetras.test(nombre)) {
            event.preventDefault();
            alert('El nombre no debe contener números.');
            return;
        }
        if (!regexSoloLetras.test(apellido)) {
            event.preventDefault();
            alert('El apellido paterno no debe contener números.');
            return;
        }
        if (direccion.length < 10) {
            event.preventDefault();
            alert('La dirección debe tener al menos 10 caracteres.');
            return;
        }
        // Validar edad antes de obtener los valores
        var edad = parseInt(document.getElementById('edad').value, 10);
        if (!isNaN(edad) && edad >= 100) {
            event.preventDefault();
            alert('La edad debe ser menor a 100 años.');
            return;
        }
        event.preventDefault(); // Evita el envío tradicional
        // Obtención de valores de los campos
        var usuario = {
            nombre: document.getElementById('nombre').value.trim(),
            apellidoPaterno: document.getElementById('apellidoPaterno').value.trim(),
            edad: parseInt(document.getElementById('edad').value, 10),
            genero: document.getElementById('genero').value,
            direccion: document.getElementById('direccion').value.trim(),
            pais: document.getElementById('pais').value
        };
        // Validación básica
        if (!usuario.nombre || !usuario.apellidoPaterno || isNaN(usuario.edad) || !usuario.genero || !usuario.direccion || !usuario.pais) {
            resultado.textContent = 'Por favor, complete todos los campos correctamente.';
            resultado.style.color = 'red';
            return;
        }
        // Obtener el texto del país seleccionado para mostrar
        var paisSelect = document.getElementById('pais');
        var paisTexto = paisSelect.options[paisSelect.selectedIndex].text;
        // Mostrar resultado
        resultado.textContent = "Registro exitoso: ".concat(usuario.nombre, " ").concat(usuario.apellidoPaterno, ", Edad: ").concat(usuario.edad, ", G\u00E9nero: ").concat(usuario.genero, ", Direcci\u00F3n: ").concat(usuario.direccion, ", Pa\u00EDs: ").concat(paisTexto);
        resultado.style.color = '#0078d4';
    });
}
// Inicializar el formulario cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', inicializarFormulario);
