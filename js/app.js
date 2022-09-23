
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
let message = document.getElementById('msg') 
let playerSumMsg = document.getElementById('player-count')
let dealerSumMsg = document.getElementById('dealer-count')
let wins =document.getElementById('wins#')
let losses =document.getElementById('losses#') 
let blackJacks =document.getElementById('21#')
let rounds =document.getElementById('round#')
let deck = []
let player = []
let dealer = []
playerImgs = document.getElementById('player-imgs')
dealerImgs = document.getElementById('dealer-imgs')
let betButton = document.getElementById('place-bet')
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

betButton.addEventListener('click', ()=>{
    
    greenChip.disabled = true
    blueChip.disabled = true
    redChip.disabled = true
    playerBet.disabled = false
    document.getElementById('place-bet').disabled = true    
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

playerBet.addEventListener('click',() =>{
            firstDeal()
            playerBet.disabled = true
            hitButton.disabled = false
            standbutton.disabled = false
            clear()
            
           })
hitButton.addEventListener('click', () =>{
            hit(player, playerImgs)
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
            if(sum < 21){
              
                message.innerText = "Hit Or Stand?"
                // uponWinOrLoss()
            }else if(sum === 21){
               blackJacks = true
                counter(blackJacks)
                message.innerText = "winner!"
            }else if(dealerSum > 21 && playerSum < 21){
               wins = true
               counter(wins)
                message.innerText= "Dealer Bust! Player win!"
                // uponWinOrLoss()
          }else{
                losses = true
                message.innerText = "BUST! Dealer Win" 
                // uponWinOrLoss()
                counter(losses)
          }  }



  function winOrLose(){
 if(dealerSum > playerSum && dealerSum <= 21){
       losses = true
                message.innerText = "Dealer Win!"
               
                counter(losses)
                // uponWinOrLoss()
    }else if(playerSum > dealerSum && playerSum <= 21){
        wins = true
        message.innerText = "Player Win!"
        counter(wins)
        // uponWinOrLoss()
    }
  }  


function counter(message){
    for(let i = 0; i < message.length; i++){
            if(message == true){
                message.innertext += message++
            }
    }
}


counter(blackJacks)

function uponWinOrLoss(){
    greenChip.disabled =true
    blueChip.disabled = true
    redChip.disabled = true
    gamePlay = false
    playerBet.disabled = true
    standbutton.disabled = true
    hitButton.disabled = true

    
    
}
 
// function game(){
//     betButton.disabled = false
//     playerSum = 0
//     dealerSum = 0
//     player = []
//     dealer = []
//     bet = []
//     betTotal = 0
//     rounds = 1
//     console.log(deck)
//     console.log(player)
//     console.log(dealer)
// }
       
            
 document.getElementById('new-game').addEventListener('click', ()=>{
    playerImgs.innerHTML = ''
    dealerImgs.innerHTML = ''
 }
 )   



