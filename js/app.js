
const deckUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
let playerBet = document.getElementById('player-button')
let hitButton = document.getElementById('hit-button')
let standbutton = document.getElementById('stand-button')
playerBet.disabled = true
standbutton.disabled = true
hitButton.disabled = true
let playerValues = []
let dealerValues = []
let playerSum = 0
let dealerSum = 0
let gameRound = []
let playerSumMsg = document.getElementById('player-count')
let dealerSumMsg = document.getElementById('dealer-count')
let wins =document.getElementById('wins#').innerText = 0
let losses =document.getElementById('losses#').innerText = 0 
let blackJacks =document.getElementById('21#').innerText = 0
let rounds =document.getElementById('round#').innerText = gameRound
let deck = []
let player = []
let dealer = []
player.board = document.getElementById('player')
dealer.board = document.getElementById('dealer')
let gamePlay = true
let greenChip = document.getElementById('green') 
let blueChip = document.getElementById('blue') 
let redChip = document.getElementById('red') 
greenChip.disabled = false
blueChip.disabled = false
redChip.disabled = false
let betAmount = document.getElementById('bet-amount')
let betTotal = 0
betAmount.innerText = ''
let bet = []

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main(){
    data = await getJson(deckUrl) 
     deck = data.cards  
}
main()


greenChip.addEventListener('click', ()=>{
    betSum(5)
})
blueChip.addEventListener('click', ()=>{
    betSum(10)
})
redChip.addEventListener('click', ()=>{
  betSum(20)
})

function betSum(num){
    bet.push(num)
    for(let i = 0; i < bet.length; i++){
       
        betTotal +=bet[i]
        
    }
   betAmount.innerText = betTotal
    console.log(betTotal)
}

document.getElementById('place-bet').addEventListener('click', ()=>{
    
    greenChip.disabled = true
    blueChip.disabled = true
    redChip.disabled = true
    playerBet.disabled = false
    document.getElementById('place-bet').disabled = true    
})
function hit(user){ 
    user.push(deck.pop())
    card = document.createElement('img')
    card.src = user[user.length -1].image
    user.board.appendChild(card)
    
   
   
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
    hit(dealer)
  }       
    
}

 function firstDeal(user){ 
    hit(user)
    hit(user)
    
    
 
   }

playerBet.addEventListener('click',() =>{
            firstDeal(player)
            firstDeal(dealer)
            playerBet.disabled = true
            hitButton.disabled = false
            standbutton.disabled = false
            clear()
            
           })
hitButton.addEventListener('click', () =>{
            hit(player)
            console.log(player)
            clear()
            dealerDraws()
           })
standbutton.addEventListener('click', () =>{
            clear()
            winOrLose()
            standbutton.disabled = true
            hitButton.disabled = true
            
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
            }
            for(let i = 0; i < dealerValues.length; i++){
            dealerSum +=dealerValues[i]
            } 
         
            console.log(dealerSum)
            console.log(dealerValues)
            }
function playingConditions(sum){
                if( sum < 21){
                    let message = document.getElementById('msg') 
                    message.innerText = "Hit Or Stand?"
                    
            }else{
                let message = document.getElementById('msg') 
                message.innerText = "BUST! Dealer Win"
            
                uponWinOrLoss(losses)
            }
          }  
  function winOrLose(){
    if(dealerSum > playerSum && dealerSum <= 21){
        let message = document.getElementById('msg') 
                message.innerText = "Dealer Win!"
                
                uponWinOrLoss(losses)
    }else if(playerSum > dealerSum && playerSum <= 21){
        let message = document.getElementById('msg') 
        message.innerText = "Player Win!"
       
        uponWinOrLoss(wins)
    }
  }  
   

function uponWinOrLoss(msg){
    greenChip.disabled =true
    blueChip.disabled = true
    redChip.disabled = true
    gamePlay = false
    playerBet.disabled = true
    standbutton.disabled = true
    hitButton.disabled = true
    msg.innerText = 1
    gameRound.push(1)
    
}
 
function game(){
    playerSum = 0
    dealerSum = 0
    player = []
    dealer = []
    bet = []
    betTotal = 0
    rounds = 1
    player.board.card.src = ''
    dealer.board.card.src = ''
    console.log(deck)
    console.log(player)
    console.log(dealer)
}
       
            
 document.getElementById('new-game').addEventListener('click', ()=>{
    game()
 }
 )   



