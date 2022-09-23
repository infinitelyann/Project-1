
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
let wins = []
let losses  = []
let blackJacks = []
rounds = []
let deck = []
let player = []
let dealer = []
playerImgs = document.getElementById('player-imgs')
dealerImgs = document.getElementById('dealer-imgs')
let betButton = document.getElementById('place-bet')
let gamePlay = false
let greenChip = document.getElementById('green') 
let blueChip = document.getElementById('blue') 
let redChip = document.getElementById('red') 
let greenQty = document.getElementById('g-qty').innerText = 8
let blueQty = document.getElementById('b-qty').innerText = 5
let redQty = document.getElementById('r-qty').innerText = 3
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
    let qty = (Number(greenQty.innerText) -1)
     greenQty.innerText = qty
    
   
})
blueChip.addEventListener('click', ()=>{
    betSum(10)
    
})
redChip.addEventListener('click', ()=>{
  betSum(20)
  
})
// function chips(chips){
// for(let i = 0; i < chips)
// }
function betSum(num){
    bet.push(num)
    for(let i = 0; i < bet.length; i++){
       
        betTotal +=bet[i]
        
    }
   betAmount.innerText = betTotal
    console.log(betTotal)
}

betButton.addEventListener('click', ()=>{
    gamePlay = true
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
               blackJacks.push(1)
                message.innerText = "winner!"
                uponWinOrLoss()
            }else if(dealerSum > 21 && playerSum < 21){
                wins.push(1)
                message.innerText= "Dealer Bust! Player win!"
                uponWinOrLoss()
          }else{
                losses.push(1)
                message.innerText = "BUST! Dealer Win" 
                uponWinOrLoss()
          }  }



  function winOrLose(){
 if(dealerSum > playerSum && dealerSum <= 21){
                message.innerText = "Dealer Win!"
               losses.push(1)
                uponWinOrLoss()
    }else if(playerSum > dealerSum && playerSum <= 21){
        message.innerText = "Player Win!"
        wins.push(1)
        uponWinOrLoss()
    }
  }  




function uponWinOrLoss(){
    playerBet.disabled = true
    standbutton.disabled = true
    hitButton.disabled = true
    betButton.diabled = true
    document.getElementById('new-game').disabled = false
    document.getElementById('stand-button').disabled = true
    message.innerText = "Wanna go again? Click Next Round!"
  
}
 
document.getElementById('stand-button').addEventListener('click', ()=>{
    hitButton.disabled = true 
    if(dealerSum < 21 &&  dealerSum >playerSum){
        message.innerText = "Dealer Won"
        losses.push(1)
    }else if(playerSum > dealerSum ){
        message.innerText = "Player Won"
        wins.push(1)
    }
    
})
       
            
 document.getElementById('new-game').addEventListener('click', ()=>{
    playerImgs.innerHTML = ''
    dealerImgs.innerHTML =''
    player = []
    dealer = []
    betButton.disabled = false
    playerSumMsg.innerText = 0
    dealerSumMsg.innerText= 0
    gamePlay = true
    rounds.push(1)
    document.getElementById('round#').innerText = rounds.length
    document.getElementById('wins#').innerText = wins.length
    document.getElementById('losses#').innerText = losses.length
    document.getElementById('21#').innerText = blackJacks.length
    document.getElementById('new-game').disabled = true
    
 })
 clear()



