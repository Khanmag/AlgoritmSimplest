let greeting = document.getElementById('greeting')
let guess_num = document.getElementById('guess_num')
let win = document.getElementById('win')
let lose = document.getElementById('lose')

guess_num.hidden = true
win.hidden = true
lose.hidden = true

let range = document.getElementById('range')
let count_calc = document.getElementById('count_calc')
range.value = 100
range.onchange = () => {
    let i = 1
    while(true) {
        if (Math.pow(2, i) > +range.value) break
        i += 1
    }
    document.getElementById('count_calc').textContent = i
    console.log(typeof +range.value)
    console.log(Math.pow(2, i))
}
let start_btm = greeting.children[2]
start_btm.onclick = () => {
    greeting.hidden = true
    guess_num.hidden = false
    document.getElementById('counter').textContent = 0
    document.getElementById('current_num').textContent = range.value / 2
}


let less_than = document.getElementById('less_than')
let more_than = document.getElementById('more_than')
let guessed = document.getElementById('guessed')
let counter = +document.getElementById('counter').textContent
let current_num = document.getElementById('current_num').textContent


less_than.onclick = () => {
    counter = +counter + 1
    current_num = Math.round(+current_num - Math.round(+range.value/Math.pow(2,counter + 1)))
    document.getElementById('current_num').textContent = current_num
    document.getElementById('counter').textContent = counter
}
more_than.onclick = () => {
    counter = +counter + 1
    current_num = Math.round(+current_num + Math.round(+range.value/Math.pow(2,counter + 1)))
    document.getElementById('current_num').textContent = current_num
    document.getElementById('counter').textContent = counter
}
guessed.onclick = () => {
    win.hidden = false
    document.getElementById('final_count').textContent = counter
    guess_num.hidden = true
}
win.lastElementChild.onclick = () => {
    win.hidden = true
    greeting.hidden = false
}

