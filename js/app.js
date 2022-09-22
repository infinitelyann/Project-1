
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
let deck = []
let player = []
let dealer = []
player.board = document.getElementById('player')
dealer.board = document.getElementById('dealer')
let gamePlay = true
let gameRound = 0 
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


 function dealingCards(user){ 
    user.push(deck.pop())
    user.push(deck.pop())
    card = document.createElement('img')
    card.src = user[user.length -2].image
    card2 = document.createElement('img')
    card2.src = user[user.length -1].image
    user.board.appendChild(card)
    user.board.appendChild(card2)
   
   }

playerBet.addEventListener('click',() =>{
            dealingCards(player)
            dealingCards(dealer)
            playerBet.disabled = true
            hitButton.disabled = false
            standbutton.disabled = false
          
           })

function hit(user){ 
       user.push(deck.pop())
       card = document.createElement('img')
       card.src = user[user.length -1].image
       user.board.appendChild(card)
     }

hitButton.addEventListener('click', () =>{
    hit(player)
    console.log(player)
    

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
   
            
     function runningCount(){
                if(gamePlay = true){
                    
                }
            }
            
          

standbutton.addEventListener('click', () =>{
    userValue(player)
    dealerValue(dealer)
    // playerVsDealer()
    standbutton.disabled = true
    hitButton.disabled = true
    
})

