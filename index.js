let calculateEl = document.getElementById("calculate-el")
let countEl = document.getElementById("count-el")
let count = 0

function add() {
    count += 1
    countEl.textContent = count
}

function subtract() {
    count -= 1
    countEl.textContent = count
}


function calculate() {
    count = count / 4
    let countStr = Math.round(count) + " | "
    calculateEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
