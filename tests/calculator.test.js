const { appendToDisplay, clearDisplay, deleteLast, calculateResult, display } = require('../calculator');

describe('Calculadora', () => {
    beforeEach(() => {
        display.value = ''; // Reiniciamos el valor antes de cada prueba
    });

    test('appendToDisplay añade valores al display', () => {
        appendToDisplay('5');
        expect(display.value).toBe('5');
    });

    test('clearDisplay limpia el display', () => {
        display.value = '123';
        clearDisplay();
        expect(display.value).toBe('');
    });

    test('deleteLast elimina el último carácter', () => {
        display.value = '123';
        deleteLast();
        expect(display.value).toBe('12');
    });

    test('calculateResult calcula el resultado correctamente', () => {
        display.value = '2+2';
        calculateResult();
        expect(display.value).toBe('4'); // Ahora es una cadena
    });

    test('calculateResult muestra "Error" en caso de error', () => {
        display.value = '2/0';
        calculateResult();
        expect(display.value).toBe('Error'); // Ahora es una cadena
    });
});