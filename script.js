document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultValue = document.getElementById('resultValue');
    const percentValue = document.getElementById('percentValue');

    function calculate() {
        const val1 = parseFloat(num1Input.value);
        const val2 = parseFloat(num2Input.value);

        // Reset styling
        resultValue.classList.remove('error');
        percentValue.classList.remove('error');

        // Validation
        if (isNaN(val1) || isNaN(val2)) {
            const errorMsg = "Please enter valid numbers";
            resultValue.textContent = errorMsg;
            resultValue.classList.add('error');
            percentValue.textContent = "--";
            return;
        }

        if (val2 === 0) {
            const errorMsg = "Cannot divide by zero";
            resultValue.textContent = errorMsg;
            resultValue.classList.add('error');
            percentValue.textContent = "Undefined";
            percentValue.classList.add('error');
            return;
        }

        // Calculation: Division
        const result = val1 / val2;

        // Calculation: Percentage Difference
        // Formula: ((Value1 - Value2) / Value2) * 100
        const percentage = ((val1 - val2) / val2) * 100;

        // Formatting Division Result
        let formattedResult;
        if (Number.isInteger(result)) {
            formattedResult = result;
        } else {
            formattedResult = result.toLocaleString(undefined, { maximumFractionDigits: 6 });
        }

        // Formatting Percentage Result
        let formattedPercent;
        if (Number.isInteger(percentage)) {
            formattedPercent = percentage + "%";
        } else {
            formattedPercent = percentage.toLocaleString(undefined, { maximumFractionDigits: 2 }) + "%";
        }

        // Update DOM
        resultValue.textContent = formattedResult;
        percentValue.textContent = formattedPercent;

        // Add animations
        const animate = (element) => {
            element.style.transform = "scale(1.1)";
            setTimeout(() => {
                element.style.transform = "scale(1)";
            }, 200);
        };

        animate(resultValue);
        animate(percentValue);
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
