function toConvert() {   
    let getInitialValue = document.getElementById('temperature').value;
    let selectPrincipal = document.getElementById('primary-measurement');
    let selectSecundario = document.getElementById('desired-measure');
    let getTypeTemperature = selectPrincipal.options[selectPrincipal.selectedIndex].value;
    let getDesiredTemperature = selectSecundario.options[selectSecundario.selectedIndex].value;
    let getResult = document.getElementById('res');

    let initialValue = Number(getInitialValue);

 //celsius
    let resCesFar = (initialValue * 9 / 5) + 32;
    let resCesKel = initialValue + 273.15;

 //far
    let resFarCes = (initialValue - 32) * 5 / 9;
    let resFarKel = (initialValue - 32) * 5 / 9 + 273.15;

 //kel
    let resKelCes = initialValue - 273.15;
    let resKelFar = (initialValue - 273.15) * 9 / 5 + 32;


    if (initialValue == '') {
        console.log(initialValue);
        alert("Informe o valor no campo abaixo");
    } else {
        console.log(initialValue);
        if (getTypeTemperature == 'celsius' && getDesiredTemperature == 'celsius') {
            getResult.innerHTML = `${initialValue}° C é = ${initialValue}° C`;
        } else if (getTypeTemperature == 'celsius' && getDesiredTemperature == 'fahrenheit') {
            getResult.innerHTML = `${initialValue}° C é = ${resCesFar}° F`;
        } else if (getTypeTemperature == 'celsius' && getDesiredTemperature == 'kelvin') {
            getResult.innerHTML = `${initialValue}° C é = ${resCesKel}° K`;
        } else if (getTypeTemperature == 'fahrenheit' && getDesiredTemperature == 'fahrenheit') {
            getResult.innerHTML = `${initialValue}° F é = ${initialValue}° F`;
        } else if (getTypeTemperature == 'fahrenheit' && getDesiredTemperature == 'celsius') {
            getResult.innerHTML = `${initialValue}° F é = ${resFarCes}° C`;
        } else if (getTypeTemperature == 'fahrenheit' && getDesiredTemperature == 'kelvin') {
            getResult.innerHTML = `${initialValue}° F é = ${resFarKel}° K`;
        } else if (getTypeTemperature == 'kelvin' && getDesiredTemperature == 'kelvin') {
            getResult.innerHTML = `${initialValue}° K é = ${initialValue}° K`;
        } else if (getTypeTemperature == 'kelvin' && getDesiredTemperature == 'celsius') {
            getResult.innetHTML = `${initialValue}° K é = ${resKelCes}° C`;
        } else if (getTypeTemperature == 'kelvin' && getDesiredTemperature == 'fahrenheit') {
            getResult.innetHTML = `${initialValue}° K é = ${resKelFar}° F`;
        }
    }
}
