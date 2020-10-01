const billInput = document.querySelector('#input-bill')
const tipInput = document.querySelector('#input-tip')
const peopleInput = document.querySelector('#input-people')
const displayTip = document.querySelector('#display-tip')
const displayTotal = document.querySelector('#display-total')

billInput.addEventListener('input', handleBill)
tipInput.addEventListener('input', handleBill)
peopleInput.addEventListener('input', handleBill)

function handleBill() {
    const bill = parseFloat(billInput.value)
    const percent = parseFloat(tipInput.value) // Change it to parseFloat because is more realistic.
    const persons = parseInt(peopleInput.value)

    const tip = bill* percent / 100
    const total = (bill + tip) / persons

    displayTip.innerHTML = tip.toFixed(2)
    displayTotal.innerHTML = total.toFixed(2)
}