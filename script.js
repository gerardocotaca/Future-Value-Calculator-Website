// Populate the dropdown for Yearly Investment
function populateInvestmentOptions() {
    const investmentDropdown = document.getElementById('investment');
    for (let i = 1000; i <= 10000; i += 1000) {
        const option = document.createElement('option');
        option.value = i;
        option.text = `$${i}`;
        investmentDropdown.appendChild(option);
    }
}

// Calculate future value of an annuity
function calculateFutureValue() {
    const investment = parseFloat(document.getElementById('investment').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const numYears = parseInt(document.getElementById('numYears').value);

    if (isNaN(interestRate) || interestRate < 1 || interestRate > 20) {
        alert('Please enter a valid interest rate (1-20).');
        return;
    }

    if (isNaN(numYears) || numYears <= 0 || numYears > 10) {
        alert('Please enter a valid number of years (1-10).');
        return;
    }

    const ratePerPeriod = interestRate / 100;
    const futureValue = investment * (((1 + ratePerPeriod) ** numYears - 1) / ratePerPeriod);

    document.getElementById('futureValue').value = futureValue.toFixed(2);
}

// Clear all input fields
function clearForm() {
    document.getElementById('investment').selectedIndex = 0;
    document.getElementById('interestRate').value = '';
    document.getElementById('numYears').value = '';
    document.getElementById('futureValue').value = '';
}

document.getElementById('calculateBtn').addEventListener('click', calculateFutureValue);
document.getElementById('clearBtn').addEventListener('click', clearForm);

// Initialize the form with default values
window.onload = populateInvestmentOptions;
