
const deckUrl = "https://deckofcardsapi.com/api/deck/new/draw/?count=52"
let player = document.getElementById('player-button')
const dealerTable = document.getElementById('dealer')
let dealer = false
let playerDraw = []
let dealerDraw = [0, 0]



let deck = [];
let cards = [];
async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main(){
    deck = await getJson(deckUrl)
    cards = deck.cards.map(card =>{
            return {
                value: card.value,
                image: card.image,
            }
    })  
}
main()

player.addEventListener('click', ()=>{
    playerDraw[0] = cards[0]
    playerDraw[1] = cards[1]
    cards.shift();
    cards.shift();
    console.log(playerDraw)
    console.log(cards)
    document.getElementById('player-button').disabled = true;
})













