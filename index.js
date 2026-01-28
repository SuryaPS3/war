const NewDeck = document.getElementById('New-Deck')
const Draw = document.getElementById('Draw')

let deckId = ''

function handleClickNewDeck(){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res=>res.json())
        .then(data=>{
            deckId = data.deck_id
        })

}
NewDeck.addEventListener("click",handleClickNewDeck);