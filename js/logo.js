// This file is specificly meant to control the Logo animations

let logo = document.querySelector('.logo')
let logoLink = document.querySelector(`.logoLink`)

logoLink.addEventListener(`mouseover`, function(){
    logo.src = 'img/logoClose.png'
})

logoLink.addEventListener(`mouseout`, function(){
    logo.src = 'img/logoOpen.png'
})