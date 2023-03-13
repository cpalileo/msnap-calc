// First 5 starter cards.  Each card has a set power level (and energy level, which will be implemented in a later version)
const antMan = ["Ant Man", 1];
const rocketRaccoon = ["Rocket Raccoon", 2];
const captainAmerica = ["Captain America", 3];
const jessicaJones = ["Jessica Jones", 4];
const spiderWoman = ["Spider-Woman", 5];
let cardOne = [];
let cardTwo = [];
let totalPower = 0;

function main() {
  window.alert("Welcome to the Marvel Snap Play Calculator");
  questionOne();
  questionTwo();
  calculatePower();
  window.alert(
    "You played " +
      cardOne[0] +
      " and " +
      cardTwo[0] +
      ".\nYour total power is " +
      totalPower +
      ".\nThank you for using the Marvel Snap Play Calculator."
  );
}

function questionOne() {
  let firstCard = window.prompt(
    "Which card would you like to play first?\nAnt Man, Rocket Raccoon, Captain America,\nJessica Jones, Spider-Woman"
  );
  if (firstCard === "Ant Man") {
    cardOne = antMan;
    return cardOne;
  } else if (firstCard === "Rocket Raccoon") {
    cardOne = rocketRaccoon;
    return cardOne;
  } else if (firstCard === "Captain America") {
    cardOne = captainAmerica;
    return cardOne;
  } else if (firstCard === "Jessica Jones") {
    cardOne = jessicaJones;
    return cardOne;
  } else if (firstCard === "Spider-Woman") {
    cardOne = spiderWoman;
    return cardOne;
  } else {
    window.alert(
      "Please make a valid selection (type name exactly as prompted)"
    );
    questionOne();
  }
}

function questionTwo() {
  let secondCard = window.prompt(
    "Which card would you like to play second?\nAnt Man, Rocket Raccoon, Captain America,\nJessica Jones, Spider-Woman"
  );
  if (secondCard === "Ant Man") {
    cardTwo = antMan;
    return cardTwo;
  } else if (secondCard === "Rocket Raccoon") {
    cardTwo = rocketRaccoon;
    return cardTwo;
  } else if (secondCard === "Captain America") {
    cardTwo = captainAmerica;
    return cardTwo;
  } else if (secondCard === "Jessica Jones") {
    cardTwo = jessicaJones;
    return cardTwo;
  } else if (secondCard === "Spider-Woman") {
    cardTwo = spiderWoman;
    return cardTwo;
  } else {
    window.alert(
      "Please make a valid selection (type name exactly as prompted)"
    );
    questionTwo();
  }
}

function calculatePower() {
  totalPower = cardOne[1] + cardTwo[1];
  return totalPower;
}

main();
