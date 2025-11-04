// hellogit2.js
function fibonacci(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        throw new TypeError('n debe ser un entero');
    }
    if (n < 0) {
        throw new RangeError('n debe ser >= 0');
    }
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejemplo de uso:
console.log(fibonacci(10)); // 55

// Export para Node.js (opcional)
module.exports = fibonacci;