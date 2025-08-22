/**
 * app.ts - Lógica para el formulario de registro
 * Autor: Francisco Valdivia
 * Fecha: 18/08/2025
 *
 * Este archivo contiene la lógica para manejar el formulario de registro de usuario.
 */

// Interfaz para los datos del usuario
interface Usuario {
    nombre: string;
    apellidoPaterno: string;
    edad: number;
    genero: string;
    direccion: string;
    pais: string;
}

// Función para inicializar el formulario y sus eventos
function inicializarFormulario(): void {
    const formulario = document.getElementById('registroForm') as HTMLFormElement;
    const resultado = document.getElementById('resultado') as HTMLElement;

    // Evento submit del formulario
    formulario.addEventListener('submit', function(event) {
        // Obtener valores para validación previa
        const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
        const apellido = (document.getElementById('apellidoPaterno') as HTMLInputElement).value;
        const direccion = (document.getElementById('direccion') as HTMLInputElement).value;
        
        // Validaciones previas antes de preventDefault
        const regexSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        
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

        event.preventDefault(); // Evita el envío tradicional

        // Obtención de valores de los campos
        const usuario: Usuario = {
            nombre: (document.getElementById('nombre') as HTMLInputElement).value.trim(),
            apellidoPaterno: (document.getElementById('apellidoPaterno') as HTMLInputElement).value.trim(),
            edad: parseInt((document.getElementById('edad') as HTMLInputElement).value, 10),
            genero: (document.getElementById('genero') as HTMLSelectElement).value,
            direccion: (document.getElementById('direccion') as HTMLInputElement).value.trim(),
            pais: (document.getElementById('pais') as HTMLSelectElement).value
        };

        // Validación básica
        if (!usuario.nombre || !usuario.apellidoPaterno || isNaN(usuario.edad) || !usuario.genero || !usuario.direccion || !usuario.pais) {
            resultado.textContent = 'Por favor, complete todos los campos correctamente.';
            resultado.style.color = 'red';
            return;
        }

        // Obtener el texto del país seleccionado para mostrar
        const paisSelect = document.getElementById('pais') as HTMLSelectElement;
        const paisTexto = paisSelect.options[paisSelect.selectedIndex].text;

        // Mostrar resultado
        resultado.textContent = `Registro exitoso: ${usuario.nombre} ${usuario.apellidoPaterno}, Edad: ${usuario.edad}, Género: ${usuario.genero}, Dirección: ${usuario.direccion}, País: ${paisTexto}`;
        resultado.style.color = '#0078d4';
    });
}

// Inicializar el formulario cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', inicializarFormulario);
