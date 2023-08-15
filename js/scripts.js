
function createDeckOfCards() {

  // Create two arrays. We have four suits, and 13 ranks per suit.
  const suits = ['Spades', 'Hearts', 'Diamonds','Clubs'];
  const ranks = ['Ace', '2', '3', '4','5','6','7','8','9','10','Jack','Queen','King'];

  // initiate empty array for all cards
  const deck = [];
  // we want 13 ranks per suit, so we need to nest two loops:
  // for each suit in our suit array, we need to make 13 cards,
  // or, one for each element in our rank array
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      // then we'll add that card to our deck array,
      // creating a new element with the value of that card's rank and suit
      deck.push((rank + " of " + suit));
    });
  });

  // we then want to display our deck on the webpage, so
  // we begin by creating an unordered list element on the page
  const ul = document.createElement('ul');
  document.body.append(ul);

  // then, for each card in our brand new deck,
  // we'll create a list item with a card value,
  // and append it to our new unordered list
  deck.forEach(function(card) {
    let li = document.createElement('li');
    li.append(card);
    ul.append(li);
  });

}

window.addEventListener('load', createDeckOfCards);