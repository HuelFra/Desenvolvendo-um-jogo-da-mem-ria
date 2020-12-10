const cartas = document.querySelectorAll('.carta');
let hasFlippedCard = false;
let firstCard, secondCard;
let travartabuleiro = false;

function flipcard() {
    if (travartabuleiro) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath() {
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);

    resetBoard();
}

function unflipCards() {
    travartabuleiro = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        /*travatabuleiro = false; */

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, travartabuleiro] = [false, false];
    [firstCard, secondCard] = [null, null];
}


(function misturar() {
    cartas.forEach((carta) => {
        let randomPosition = Math.floor(Math.random() * 12);
        carta.style.order = randomPosition;
    })
})();

cartas.forEach((carta) => {
    carta.addEventListener('click', flipcard)
});





