const cards = document.querySelectorAll('.card');

function reveal (e) {
    let clickedCard = (e.target);
    clickedCard.classList.add('reveal');
}

cards.forEach(card => {
    card.addEventListener('click', reveal);

});