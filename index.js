let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
  rule : "Canon",
  won : "You'll get blackjack when sum becomes to 21."
}
let name = document.getElementById("player-el")
name.innerHTML = player.rule + " : " + player.won

///////
function getrandomcard(){
  let  randomnumber = Math.floor(Math.random()*13)+1
  if (randomnumber===1){
    return 11
  }
  else if(randomnumber>10){
    return 10
  }
else{
    return randomnumber
  }
}

let get = getrandomcard()
console.log(get)

///////



//////
function startgame() {
  name.innerHTML = "" +"Admin : This game is now on testing purpose #SanthoshRony"
  isalive = true
  let firstcard = getrandomcard()
  let secondcard = getrandomcard()
  let cards = [firstcard,secondcard]
  let sum = firstcard + secondcard
  rendergame()

}
///////
function rendergame(){
sumEl.innerHTML = "sum : " + sum
cardsEl.innerHTML = "cards : "

for (let i=0;i<cards.length;i++){
  cardsEl.innerHTML = cardsEl.innerHTML + cards[i] +" "
}

if (sum <= 20){
  message = "Do you want to draw a new card 🤔🤔?"
}
else if (sum===21){
  message = "Wohoo! you have got blackjack 🥳🥳!"
  hasblackjack = true

}
else{
  message = "Opps! You are out of the game ☹️☹️!"
  isalive = false



}
messageEl.innerHTML =message
}
/////////
function newcard() {
    if (isalive===true && hasblackjack===false){
       let card = getrandomcard()
       sum = sum + card
       cards.push(card)
       rendergame()
    }

}
function refresh() {
   location.reload()
}
//////
