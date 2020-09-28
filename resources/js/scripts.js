const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = docuemnt.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')

function calculateTip() {
    const billValue = billInput.value
    const tipValue = tipInput.value

    const tipAmount = billValue * tipValue / 100

    display.innerHTML = tipAmount.toFixed(2)
}

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)