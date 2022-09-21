
const deckUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
let playerBet = document.getElementById('player-button')
const dealerTable = document.getElementById('dealer')
let playerCard1 = document.getElementById("player-img1")
let playerCard2 = document.getElementById("player-img2")
let dealerCard1 = document.getElementById("dealer-img1")
let dealerCard2 = document.getElementById("dealer-img2")
let deck = []
let player = []
let dealer = []

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
   cardImgUrls.pop()
   user.push(deck.pop())
   cardImgUrls.pop()
   console.log(user)
   
 }

    
    playerBet.addEventListener('click',() =>{
            dealingCards(player)
            dealingCards(dealer)
            playerCard1.src = player[0].image
            playerCard2.src = player[1].image
            dealerCard1.src = dealer[0].image
            dealerCard2.src = dealer[1].image
            playerBet.disabled = true
        
           })

 function gettingImages(user){
            for(let i =0; i <=user.length; i++){

              
            }
        }       








