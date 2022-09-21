
const deckUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
let playerBet = document.getElementById('player-button')
let hitButton = document.getElementById('hit-button')
let standbutton = document.getElementById('stand-button')
let deck = []
let player = []
let dealer = []
player.board = document.getElementById('player')
dealer.board = document.getElementById('dealer')
let userValue = 0
let cardImgUrls = []


async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main(){
    data = await getJson(deckUrl)
    
     deck = data.cards
    cardImgUrls = deck.map(cards=>{
        return{
            image:cards.image
        }
    })
   
}

main()

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
        
           })

function hit(user){ 
       user.push(deck.pop())
       card = document.createElement('img')
       card.src = user[user.length -1].image
       userValue = user[user.length -1].value
       user.board.appendChild(card)
    

    }



hitButton.addEventListener('click', () =>{
    hit(player)

})

// function sum(user){
//     Array.from()
// }
let playerSum = ()=>{

    for(let i = 0; i <= player.length; i++){
        let values = player[i].value
        console.log(values)
    }
}
// function stand(user){
//    {
//     let values = user[i].values
    
//     }
        
// console.log(userValue)
   
//     userValue =   user[i].value 
    
//}

  


standbutton.addEventListener('click', () =>{
   playerSum()
  
})

