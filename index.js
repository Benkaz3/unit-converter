function meterToFeet(unit) {
    return (unit * 3.28084).toFixed(3);
}
function feetToMeter(unit) {
    return (unit / 3.28084).toFixed(3);
}
function literToGallon(unit) {
    return (unit * 0.264172).toFixed(3);
}
function gallonToLiter(unit) {
    return (unit / 0.264172).toFixed(3);
}
function kilogramToPound(unit) {
    return (unit * 2.20462).toFixed(3);
}
function poundToKilogram(unit) {
    return (unit / 2.20462).toFixed(3);
}

function convert() {
    const inputEl = document.getElementById('input')
    const inputValue = Number(inputEl.value)
    const lengthEl = document.getElementById('length-output')
    const volumeEl = document.getElementById('volume-output')
    const massEl = document.getElementById('mass-output')

    lengthEl.textContent = 
        `
        ${inputValue} meter = ${meterToFeet(inputValue)} feet | 
        ${inputValue} feet = ${feetToMeter(inputValue)} meter
        `

    volumeEl.textContent =
        `
        ${inputValue} liter = ${literToGallon(inputValue)} gallon | 
        ${inputValue} gallon = ${gallonToLiter(inputValue)} liter
        `
    massEl.textContent =
        `
        ${inputValue} kilogram = ${kilogramToPound(inputValue)} pound |
        ${inputValue} pound = ${poundToKilogram(inputValue)} kilogram
        `
}

const btnEl = document.getElementById('btn')
btnEl.addEventListener('click', convert)