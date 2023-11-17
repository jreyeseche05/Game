const cards = document.querySelectorAll('.card');
let cardOne,cardTwo;


function flipCard(e){
    let clickedCard = e.target;


if (clickedCard !== cardOne) {
    clickedCard.classList.add('flip');

    if (!cardOne) {
        return cardOne = clickedCard;
    }
    cardTwo = clickedCard;  
    let cardOneImg = cardOne.querySelector('img').src,
     cardTwoImg = cardTwo.querySelector('img').src;
     matchCards(cardOneImg, cardTwoImg);

}


}

function matchCards(img1, img2){
    if (img1 == img2){
        return alert('Great job! Keep going.');
    }
    else {
        setTimeout( ) {
            cardOne.classList.add('vibration');
            cardTwo.classList.add('vibration');

    }

    }


}

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});