let cardOne,cardTwo;
const cards = document.querySelectorAll('.card');

function revealCard (e) {
    let clickedCard = e.target;
    clickedCard.classList.add('reveal');

    if (clickedCard !== cardOne) {
        clickedCard.classList.add('reveal');
   
     if (!cardOne) {
        return cardOne = clickedCard;
     }
     cardTwo = clickedCard;

     let cardOneImg = cardOne.querySelector('img').src,
     cardTwoImg = cardTwo.querySelector('img').src;
     matchCards(cardOneImg, cardTwoImg);
    }
}
function matchCards(img1, img2) {
    if (img1 == img2){
        return alert("Greate job!! Kepp going.");

    }
    else {
        alert("Try again!");

    }

}


  cards.forEach(card => {
    card.addEventListener('click', revealCard);

});





let play = document.getElementById("play");
function playMusic() {
    let audio = new Audio("play.mp3");
    audio.play();
}
play.addEventListener('click',playMusic);



