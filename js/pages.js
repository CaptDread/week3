

let quizPages = document.querySelectorAll('section')

console.log(quizPages)

let nextButt = document.querySelectorAll('.nextButt')
let resButt = document.querySelector(`.resButt`)

let radbutts = document.querySelectorAll(`.rb`)

let currentPageNum = 0

let changePage = function () {
    quizPages[currentPageNum].classList.remove('active')
    currentPageNum++
    setTimeout(() => {
        quizPages[currentPageNum].classList.add('active')
    }, 42);
}


for (let z = 0; z < nextButt.length; z++){
    nextButt[z].addEventListener('click', function (e){
        e.preventDefault()
        changePage()

    })
}


let counts = [
    {id: 'muprhy', value: 0},
    {id: 'debby', value: 0},
    {id: 'stormy', value: 0},
    {id: 'quin', value: 0},
    {id: 'sparks', value: 0},
    {id: 'marco', value: 0}, 
    {id: 'hesh', value: 0},
]

let resultsVal = 3
let results = 'null'

let buttChecker = function (){
    for (let i = 0; i < radbutts.length; i++){
       if (radbutts[i].checked != false){
           console.log(radbutts[i].value)
           if (radbutts[i].value === 'murphy'){
              counts[0].value++
           } else if (radbutts[i].value === 'debby'){
              counts[1].value++
           } else if (radbutts[i].value === 'stormy'){
              counts[2].value++
           } else if (radbutts[i].value === 'quin'){
              counts[3].value++
           } else if (radbutts[i].value === 'sparks'){
              counts[4].value++
           } else if (radbutts[i].value === 'marco'){
              counts[5].value++
           } else if (radbutts[i].value === 'hesh'){
              counts[6].value++
           }
       }
    }
    let getResults = function (){
        

    }

    return getResults()
}


resButt.addEventListener(`click`, function (e){
    e.preventDefault()
    buttChecker()
})

resButt.addEventListener(`click`, function(e){
    e.preventDefault()
    setTimeout(() => {
        changePage()
    }, 13);
})
