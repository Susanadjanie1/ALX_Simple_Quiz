document.addEventListener('DOMContentLoaded', () => {

    //  Get references to the input and output elements 
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const resultSpan = document.getElementById('calculation-result');

    // Get references to the operation buttons 
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');

    // Arithmetic functions 
    /**
     * Adds two numbers and returns the sum.
      @param {number}
     @param {number}
      @returns {number} 
     */
    function add(num1, num2) {
        return num1 + num2;
    }

    /**
     * Subtracts the second number from the first and returns the difference.
      @param {number} 
     @param {number} 
     @returns {number} 
     */
    function subtract(num1, num2) {
        return num1 - num2;
    }

    /**
     Multiplies two numbers and returns the product.
      @param {number} 
     @param {number} 
     @returns {number} 
     */
    function multiply(num1, num2) {
        return num1 * num2;
    }

    /**
     * Divides the first number by the second and returns the quotient.
     * @param {number} 
     * @param {number} 
     * @returns {number|string} 
     */
    function divide(num1, num2) {
        if (num2 === 0) {
            return 'Error: Cannot divide by zero.';
        }
        return num1 / num2;
    }

    // event listeners

    // Event listener for the addition button
    addButton.addEventListener('click', () => {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = add(number1, number2);
        resultSpan.textContent = result;
    });

    // Event listener for the subtraction button
    subtractButton.addEventListener('click', () => {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = subtract(number1, number2);
        resultSpan.textContent = result;
    });

    // Event listener for the multiplication button
    multiplyButton.addEventListener('click', () => {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = multiply(number1, number2);
        resultSpan.textContent = result;
    });

    // Event listener for the division button
    divideButton.addEventListener('click', () => {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = divide(number1, number2);
        resultSpan.textContent = result;
    });

});
