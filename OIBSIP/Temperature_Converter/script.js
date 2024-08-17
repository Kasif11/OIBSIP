function convert() {
    // By Selecting Every Id we would get the element
    let degree = document.getElementById('degree').value;
    let unit = document.getElementById('unit').value;
    let resultDiv = document.querySelector('.result');

    // It would check whether the entered value is a number or not . If Number is not entered then it would throw an error and will say to enter a number
    if (isNaN(degree) || degree === "") {
        resultDiv.innerHTML = "Please enter a valid number";
        return;
    }

    // It would convert the input value to a number
    degree = parseFloat(degree);

    // Initialize the result variable with empty string
    let result = '';

    // Conversion will takes place according to particular case.
    switch (unit) {
        case 'celsius':
            result += `${degree}°C = ${(degree * 9/5) + 32} °F <br>`;
            result += `${degree}°C = ${degree + 273.15} K`;
            break;
        case 'fahrenheit':
            result += `${degree}°F = ${(degree - 32) * 5/9} °C <br>`;
            result += `${degree}°F = ${((degree - 32) * 5/9) + 273.15} K`;
            break;
        case 'kelvin':
            result += `${degree}K = ${degree - 273.15} °C <br>`;
            result += `${degree}K = ${(degree - 273.15) * 9/5 + 32} °F`;
            break;
        default:
            result = "Please select a valid unit";
    }

    // Simply it would display the result that is being stored in the result variable
    resultDiv.innerHTML = result;
}
