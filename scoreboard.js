let score1 = 12
let score2 = 5
let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

homeScore.textContent = score1
guestScore.textContent = score2

function add1(){
    score1 += 1
    homeScore.textContent = score1
}

function add2(){
    score1 += 2
    homeScore.textContent = score1
}

function add3(){
    score1 += 3
    homeScore.textContent = score1
}

function addOne(){
    score2 += 1
    guestScore.textContent = score2
}

function addTwo(){
    score2 += 2
    guestScore.textContent = score2
}

function addThree(){
    score2 += 3
    guestScore.textContent = score2
}