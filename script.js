document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultValue = document.getElementById('resultValue');

    function calculate() {
        const val1 = parseFloat(num1Input.value);
        const val2 = parseFloat(num2Input.value);

        // Reset styling
        resultValue.classList.remove('error');

        // Validation
        if (isNaN(val1) || isNaN(val2)) {
            resultValue.textContent = "Please enter valid numbers";
            resultValue.classList.add('error');
            return;
        }

        if (val2 === 0) {
            resultValue.textContent = "Cannot divide by zero";
            resultValue.classList.add('error');
            return;
        }

        // Calculation
        const result = val1 / val2;

        // Formatting: If integer, show as integer. If float, max 4 decimal places unless it's very small.
        // using toLocaleString for nice formatting
        let formattedResult;
        if (Number.isInteger(result)) {
            formattedResult = result;
        } else {
             // For very small or large numbers, simple string might be better, or fixed precision
             // Let's go with a max fraction digits approach for cleanliness
             formattedResult = result.toLocaleString(undefined, { maximumFractionDigits: 6 });
        }

        resultValue.textContent = formattedResult;
        
        // Add a subtle animation to the result update
        resultValue.style.transform = "scale(1.1)";
        setTimeout(() => {
            resultValue.style.transform = "scale(1)";
        }, 200);
    }

    calculateBtn.addEventListener('click', calculate);

    // Optional: Calculate on 'Enter' key in inputs
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            calculate();
        }
    };

    num1Input.addEventListener('keypress', handleEnter);
    num2Input.addEventListener('keypress', handleEnter);
});
