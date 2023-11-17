let cardOne, cardTwo;
const cards = document.querySelectorAll('.card');

function revealCard (e) {
    let clickedCard = e.target;
    clickedCard.classList.add('reveal');
}

cards.forEach(card => {
    card.addEventListener('click', revealCard);

});