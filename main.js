let btnPlus = document.getElementById(`plus`)
let btnMinus = document.getElementById(`minus`)
let span = document.getElementById(`num`)

let num = 0

btnPlus.addEventListener(`click`,()=> {
    num++
    span.innerHTML = num
})
btnMinus.addEventListener(`click`,()=> {
    num--
    span.innerHTML = num
})