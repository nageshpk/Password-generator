const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
                    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
                    "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
                    ",","|",":",";","<",">",".","?","/"];


let firstEl = document.getElementById("first-el")
let secondEl = document.getElementById("second-el")
let thirdEl = document.getElementById("third-el")
let fourthEl = document.getElementById("fourth-el")
let passwordBtn = document.getElementById("password-btn")


let passwordLength = 16

function generateRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}



passwordBtn.addEventListener("click", function() {
    let randomPassword1 = ""
    for (let i=0; i < passwordLength; i++) {
        randomPassword1 += generateRandomCharacter()
    }
    let randomPassword2 = ""
    for (let i=0; i < passwordLength; i++) {
        randomPassword2 += generateRandomCharacter()
    }
    let randomPassword3 = ""
    for (let i=0; i < passwordLength; i++) {
        randomPassword3 += generateRandomCharacter()
    }
    let randomPassword4 = ""
    for (let i=0; i < passwordLength; i++) {
        randomPassword4 += generateRandomCharacter()
    }
    firstEl.textContent = randomPassword1
    secondEl.textContent = randomPassword2
    thirdEl.textContent = randomPassword3
    fourthEl.textContent = randomPassword4
})




firstEl.addEventListener("click", function() {
    if (firstEl.innerText) {
        navigator.clipboard.writeText(firstEl.innerText)
        firstEl.innerText = "Text copied!"
    }
})

secondEl.addEventListener("click", function() {
    if (secondEl.innerText) {
        navigator.clipboard.writeText(secondEl.innerText)
        secondEl.innerHTML = "Text copied!"
    }
})

thirdEl.addEventListener("click", function() {
    if (thirdEl.innerText) {
        navigator.clipboard.writeText(thirdEl.innerText)
        thirdEl.innerHTML = "Text copied!"
    }
})

fourthEl.addEventListener("click", function() {
    if (fourthEl.innerText) {
        navigator.clipboard.writeText(fourthEl.innerText)
        fourthEl.innerHTML = "Text copied!"
    }
})

















/*
function generateRadndomPassword() {
    let randomPassword = ""
    for (let i=0; i < passwordLength; i++) {
        randomPassword += generateRandomCharacter()
    }
    firstEl.textContent = randomPassword
}
*/