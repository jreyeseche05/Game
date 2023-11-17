let cardOne, cardTwo;
const cards = document.querySelectorAll('.card');

function revealCard (e) {
    let clickedCard = e.target;
    clickedCard.classList.add('reveal');

    cardOne = clickedCard;
    cardTwo = clickedCard;
    console.log (cardOne, cardTwo);
}

cards.forEach(card => {
    card.addEventListener('click', revealCard);

});