
const deckUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
//api url
// let startButton = document.getElementById('fetch-click')
//button click that makes api call
let deal = document.getElementById('deal-button')
//button that makes deal
let hitButton = document.getElementById('hit-button')
let standButton = document.getElementById('stand-button')
let nextRound = document.getElementById('next-round')
let clearBoard = document.getElementById('clear')
//player game

clearBoard.disabled = true
nextRound.disabled = true
deal.disabled = true
standButton.disabled = true
hitButton.disabled = true
let playerValues = []
let dealerValues = []
let playerSum = 0
let dealerSum = 0
let message = document.getElementById('msg') 
let playerSumMsg = document.getElementById('player-count')
let dealerSumMsg = document.getElementById('dealer-count')
let wins = []
let losses  = []
let blackJacks = []
let rounds = []
let deck = []
let player = []
let dealer = []
playerImgs = document.getElementById('player-imgs')
dealerImgs = document.getElementById('dealer-imgs')
let startButton = document.getElementById('start')
let table = document.getElementById('player-and-dealer')
let winWindow = document.getElementById('win-or-lose')
let buttonsWindow = document.getElementById('buttons')
startButton.style.visibility = 'hidden'
table.style.visibility = 'hidden'
winWindow.style.visibility = 'hidden'
buttonsWindow.style.visibility ='hidden'




async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}





async function main(){
    data = await getJson(deckUrl) 
     deck = data.cards  
     
}


document.getElementById('modal').showModal() 


document.getElementById('continue').addEventListener('click', ()=>{
    console.log(deck)
    
    document.getElementById('modal').remove() 
    startButton.style.visibility = 'visible'
})


clearBoard.addEventListener('click', 
()=> {
    console.log(clearBoard, deck)
    clearBoard()
    main()
    console.log(deck)
})

function blink(element, button){
    if(button.disabled == false){         
        document.getElementById(element).setAttribute('class', 'blink')
        
    }
}



startButton.addEventListener('click', ()=>{
    console.log(startButton, deck)
    
    startButton.style.visibility = 'hidden'
    startButton.disabled = true
    main()
    playerBet.disabled = false
    blink('player-button', playerBet)
    document.getElementById('place-bet').classList.remove('blink')

  
 
})


function hit(user, div){ 
    user.push(deck.pop())
    card = document.createElement('img')
    card.src = user[user.length -1].image
    div.appendChild(card) 
  }


function clear(){
    dealerValues = []
    dealerSum = 0
    playerValues = []
    playerSum = 0
    userValue(player)
    dealerValue(dealer) 
    playerSumMsg.innerText = playerSum
    dealerSumMsg.innerText = dealerSum
    playingConditions(playerSum)
}

function dealerDraws(){
  if(dealerSum < 17){
    hit(dealer, dealerImgs)
  }  
}

 function firstDeal(){ 
    hit(player, playerImgs)
    hit(player, playerImgs)
    hit(dealer, dealerImgs)
    hit(dealer, dealerImgs)
   }

deal.addEventListener('click',() =>{
    console.log("deal", deck)
   
    table.style.visibility = 'visible'
    document.getElementById('deal-button').classList.remove('blink')
    firstDeal()
            deal.disabled = true
            hitButton.disabled = false
            standButton.disabled = false
           

            blink('hit-button', hitButton)
            blink('stand-button', standButton)
            clear()
           })

hitButton.addEventListener('click', () =>{
    console.log(hitButton, deck)
    document.getElementById('hit-button').classList.remove('blink')
    dealerDraws()
            hit(player, playerImgs)
            console.log(player)
            clear()
           })




 function userValue(user){
   
    for(let i = 0; i < user.length; i++){     
    if(user[i].value === "QUEEN" || user[i].value === "ACE" || user[i].value === "KING" || user[i].value === "JACK"){
        playerValues.push(10)   
    }else{
        playerValues.push(Number(user[i].value))
    }   
        }
        for(let i = 0; i < playerValues.length; i++){
        playerSum +=playerValues[i]
        }
        console.log(playerSum)
        console.log(playerValues)
        }
 function dealerValue(user){
            for(let i = 0; i < user.length; i++){ 

            if(user[i].value === "QUEEN" || user[i].value === "ACE" || user[i].value === "KING" || user[i].value === "JACK"){
                dealerValues.push(10)   
            }else{
                dealerValues.push(Number(user[i].value))
            }
            }for(let i = 0; i < dealerValues.length; i++){
               dealerSum +=dealerValues[i]
            } 
        
            console.log(dealerSum)
            console.log(dealerValues)
            }


function playingConditions(){
   if(dealerSum > 21 && playerSum < 21){
        wins.push(1)
        message.innerText= "Dealer Bust! Player win!"
        uponWinOrLoss()
  }else if(playerSum > 21 && dealerSum > 21){
        message.innerText ="tie!"
        uponWinOrLoss()
  }
  else if(playerSum < 21){
                message.innerText = "Hit Or Stand?"
               
            }else if(playerSum === 21){
               blackJacks.push(1)
                message.innerText = "winner!"
                uponWinOrLoss()
            }else if(dealerSum === 21){
                losses.push(1)
                message.innerText = "Dealer Blackjack"
                uponWinOrLoss()
            }else if(playerSum > 21){
                losses.push(1)
                message.innerText = "BUST! Dealer Win" 
                uponWinOrLoss()
           
            }
           
          }  



        

function uponWinOrLoss(){
    startButton.style.visibility = 'hidden'
table.style.visibility = 'hidden'
winWindow.style.visibility = 'visible'
buttonsWindow.style.visibility ='hidden'
    startButton.disabled = true
    deal.disabled = true
    standButton.disabled = true
    hitButton.disabled = true
    document.getElementById('next-round').disabled = false
    document.getElementById('stand-button').classList.remove('blink')
    blink('next-round', nextRound)
    setTimeout(() =>{
        message.innerText = "Wanna go again? Click Next Round!"}, 1500)
        
  
}
 
standButton.addEventListener('click', ()=>{
    console.log(e.target)
    document.getElementById('stand-button').classList.remove('blink')
    document.getElementById('hit-button').classList.remove('blink')
    hitButton.disabled = true 
    if(dealerSum < 21 &&  dealerSum >playerSum){
        message.innerText = "Dealer Won"
        losses.push(1)
    }else if(playerSum > dealerSum ){
        message.innerText = "Player Won"
        wins.push(1)
    }
    uponWinOrLoss()
    
})
       
            
nextRound.addEventListener('click', ()=>{
    console.log(e.target)
    startButton.style.visibility = 'visible'
    nextRound.style.visibility ='hidden'
    playerImgs.innerHTML = ''
    dealerImgs.innerHTML =''
    player = []
    dealer = []
    hitButton.disabled = true 
    playerSumMsg.innerText = 0
    dealerSumMsg.innerText= 0
    rounds.push(1)

    message.innerText = "Place Bet!"
    document.getElementById('new-game').classList.remove('blink')
    document.getElementById('round#').innerText = rounds.length
    document.getElementById('wins#').innerText = wins.length
    document.getElementById('losses#').innerText = losses.length
    document.getElementById('21#').innerText = blackJacks.length
    document.getElementById('new-game').disabled = true
    betButton.disabled = false 
    console.log(deck.length)
    
    if(deck.length > 6){
        blink('start', startButton)
    }else if(deck.length < 5){
        clearBoard.disabled = false
        message.innerText = "No More Cards!"
    }
    
 })




function clearBoard(){
resetGame.disabled = true
newGame.disabled = true
playerBet.disabled = true
standButton.disabled = true
hitButton.disabled = true
playerValues = []
dealerValues = []
playerSum = 0
dealerSum = 0
wins = []
losses  = []
blackJacks = []
rounds = []
deck = []
player = []
dealer = []

 }
 clear()
 blink('place-bet', betButton)
 
