let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')

let divs = document.querySelectorAll('div')
let link = document.querySelector('a')

// let p = document.querySelectorAll('p')

// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function(event) {
//         event.target.style.color = 'red'
//     })
// }

document.getElementById('wrapper').addEventListener('click', function(event) {
    let tagName = event.target.tagName.toLowerCase()

    if (tagName === 'p') {
        event.target.style.color = 'blue'
    }
})



for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation() // останаливает событие на элементе по которому кликнули
        console.log(this.getAttribute('id'))
    }, true)
}

function buttonHandler() {
    console.log('click')
    h1.textContent = input.value
}

h1.addEventListener('mouseenter', function() {
    this.style.color = 'red'
    console.log('this')
})

button.addEventListener('click', buttonHandler)

link.addEventListener('click', handleLinkClick)

function handleLinkClick(event) {
    event.preventDefault()

    let div = divs[0]

    // if (div.style.display === 'none') {
    //     div.style.display = 'flex'
    // } else {
    //     div.style.display = 'none'
    // }

    div.style.display = div.style.display === 'none'
     ? 'flex'
     : 'none'

    console.log(div.style.display)
}