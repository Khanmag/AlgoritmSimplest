let blocks = document.getElementsByClassName('main_window')[0].children
let range = document.getElementById('range')
let count_calc = document.getElementById('count_calc')
let counter = document.getElementById('counter')
let current_num = document.getElementById('current_num')
let difference
let min 
let max

const hideAllExcept = (el) => {
    for (let i=0; i < blocks.length; i++) {
        if (blocks[i] == el) blocks[i].hidden = false
        else blocks[i].hidden = true
    }
}
hideAllExcept(blocks[0])

range.value = 100

range.onchange = () => {
    let i = 1
    while(true) {
        if (Math.pow(2, i) > +range.value) break
        i += 1
    }
    count_calc.textContent = i
}


let start_btm = blocks[0].lastElementChild
start_btm.onclick = () => {
    min = 0
    max = +range.value
    hideAllExcept(blocks[1])
    counter.textContent = 0
    current_num.textContent = Math.round((min + max)/2)
}

let less_btn = document.getElementById('less_than')
let more_btn = document.getElementById('more_than')
let guessed_btn = document.getElementById('guessed')

function checkDifferentAndNextStap() {
    if (max - min < 2) hideAllExcept(blocks[3])
    max = Math.round((min + max)/2)
    counter.textContent = +counter.textContent + 1
}
less_btn.onclick = () => {
    checkDifferentAndNextStap()
    current_num.textContent = +current_num.textContent - Math.round((min + max)/2)
}
more_btn.onclick = () => {
    checkDifferentAndNextStap()
    current_num.textContent = +current_num.textContent + Math.round((min + max)/2)
}
guessed_btn.onclick = () => {
    document.getElementById('final_count').textContent = counter.textContent
    hideAllExcept(blocks[2])
}
blocks[2].lastElementChild.onclick = () => {
    hideAllExcept(blocks[0])
}
blocks[3].lastElementChild.onclick = () => {
    hideAllExcept(blocks[0])
}

