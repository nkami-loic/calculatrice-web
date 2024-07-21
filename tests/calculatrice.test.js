// tests/calculatrice.test.js

const { calculer } = require('../js/scripts'); // Assurez-vous que le chemin est correct

describe('Function calculer', () => {
    test('addition', () => {
        expect(calculer(1, 2, '+')).toBe(3);
    });

    test('soustraction', () => {
        expect(calculer(5, 3, '-')).toBe(2);
    });

    test('multiplication', () => {
        expect(calculer(2, 3, '*')).toBe(6);
    });

    test('division', () => {
        expect(calculer(6, 2, '/')).toBe(3);
    });
});
