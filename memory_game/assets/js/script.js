//queries all data from .card
const cards = document.querySelectorAll('.card');

//create variables for the upcoming functions
let chosenCard = false;
let locked = false;
let card1, card2;

//when user choses a card, this function is triggered
function chooseCard() {

  //checks if screen is locked (two cards are already playing)
  if (locked) {
    return;
  }

  //sets the chosen card to chosen
  this.classList.toggle('chosen');

  //checks if it is the first or second card to be chosen
  if (!chosenCard) {
  //sets first card
    chosenCard = true;
    card1 = this;
  }
  else {
    //sets second card
    chosenCard = false;
    card2 = this;

    //lock board to prevent more cards to be chosen
    locked = true;

    //check if the cards are equal to each other
    checkIfEqual();
  }
}

//checks if two cards are equal
function checkIfEqual() {

  if (card1.dataset.value === card2.dataset.value) {
    card1.removeEventListener('click', chooseCard);
    card2.removeEventListener('click', chooseCard);
    //remove lock
    locked = false;
    }
  else {
      setTimeout(() => {
      card1.classList.remove('chosen');
      card2.classList.remove('chosen');
      //remove lock
      locked = false;
    }, 700);
  }
}

//creates an event that triggers through click on each card from the query selector on top
cards.forEach(card => card.addEventListener('click', chooseCard));
