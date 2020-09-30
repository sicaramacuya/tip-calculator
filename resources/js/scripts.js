const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = docuemnt.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')

function calculateTip() {
    const billAmount = parseFloat(billInput.value)
    const tipPercentage = parseInt(tipInput.value)
    const tipAmount = billAmount * tipPercentage / 100
    const displayTotal = billAmount + tipAmount
    displayTip.innerHTML = tipAmount.toFixed(2)
}

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)