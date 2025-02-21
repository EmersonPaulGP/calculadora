let display;

// Solo accedemos al DOM si estamos en un navegador
if (typeof document !== 'undefined') {
    display = document.getElementById('display');
} else {
    display = { value: '' }; // Simulamos el objeto display para pruebas
}

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(display.value);
        // Manejar división por cero
        if (!isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = String(result); // Convertir a cadena
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Exportamos las funciones para usarlas en las pruebas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { appendToDisplay, clearDisplay, deleteLast, calculateResult, display };
}