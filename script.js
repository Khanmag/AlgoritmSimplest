let blocks = document.getElementsByClassName('main_window')[0].children
let range = document.getElementById('range')
let count_calc = document.getElementById('count_calc')
let counter = document.getElementById('counter')
let current_num = document.getElementById('current_num')
let difference

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
    count_calc = i
}

let start_btm = blocks[0].lastElementChild
start_btm.onclick = () => {
    hideAllExcept(blocks[1])
    counter.textContent = 0
    current_num.textContent = +range.value / 2
    difference = +range.value / 2
}

let less_btn = document.getElementById('less_than')
let more_btn = document.getElementById('more_than')
let guessed_btn = document.getElementById('guessed')

less_btn.onclick = () => {
    difference = Math.floor(Math.abs(difference) / 2)
    counter.textContent = +counter.textContent + 1
    current_num.textContent = +current_num.textContent - difference
}
more_btn.onclick = () => {
    difference = Math.floor(Math.abs(difference) / 2)
    counter.textContent = +counter.textContent + 1
    current_num.textContent = +current_num.textContent + difference
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

