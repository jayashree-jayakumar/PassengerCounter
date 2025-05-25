//increment
let count =0
let saveEl = document.getElementById("save-el")
let countDisplay = document.getElementById("Count-js")

function increment(){
    count += 1
    countDisplay.innerText=count
}

function save(){
 str = count + " - "
 saveEl.textContent += str
 count = 0
 countDisplay.innerText = count
console.log(count)
}

//String Exercise
let username = "anu"
let message = "You have a new notifiction "
console.log(message + "" +username)

//string vs number exercise
console.log(4 + 5) // 9
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100"

//welcome page task
let welcomeElement = document.getElementById("welcome-el")
let welcomeUserName = "Anu"
let welcomeGreetings = "Welcome Back "
let welcome = welcomeGreetings + welcomeUserName
welcomeElement.innerText = welcome 
welcomeElement.innerText += "👋"
//JS loads intital and so the content has wrapped
// document.addEventListener("DOMContentLoaded", function () {
//     let welcomeElement = document.getElementById("welcome-el")
//     let welcomeUserName = "Anu"
//     let welcomeGreetings = "Welcome Back "
//     let welcome = welcomeGreetings + welcomeUserName
//     welcomeElement.innerText = welcome
// })