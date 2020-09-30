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
    const percent = parseInt(tipInput.value)
    const persons = parseInt(peopleInput.value)

    const tip = bill* percent / 100
    const total = bill + tip

    displayTip.innerHTML = tip
    displayTotal.innerHTML = total
}