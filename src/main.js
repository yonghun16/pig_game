const btnNewGame = document.querySelector('.button__new-game');
const dice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.button__roll-dice');
const btnHold = document.querySelector('.button__hold');

const stageLeft = document.querySelector('.stage__left');
const stageRight = document.querySelector('.stage__right');
const stageLeftPig = document.querySelector('.stage__left__pig');
const stageRightPig = document.querySelector('.stage__right__pig');
const leftSelected = document.querySelector('.stage__left--selected');
const rightSelected = document.querySelector('.stage__right--selected');


class Player {
  constructor(score, current, side) {
    this.score = score;
    this.current = current;
    this.side = side;
    this.currentElement = document.querySelector(`.stage__${this.side}__dice`);
    this.scoreElement = document.querySelector(`.stage__${this.side}__score`);
    this.pigElement = document.querySelector(`.stage__${this.side}__pig`);
  }
}

const playerLeft = new Player(0, 0, 'left');
const playerRight = new Player(0, 0, 'right');


let player = playerLeft;
let playing = true;

const changePlayer = () => {
  if (player === playerLeft) {
    stageLeft.classList.remove('stage__left--selected');
    stageRight.classList.add('stage__right--selected');
    player = playerRight;
  } else {
    stageRight.classList.remove('stage__right--selected');
    stageLeft.classList.add('stage__left--selected');
    player = playerLeft;
  }
};

const rollDice = () => {
  if (!playing) return;
  const randomInt = Math.floor(Math.random() * 6);
  dice.className = 'dice';
  dice.classList.add(`dice--dice${randomInt + 1}`);

  if (randomInt === 0) {
      player.current = 0;
      player.currentElement.textContent = player.current;
      changePlayer();
  }
  else if (randomInt !== 0) {
    player.current += randomInt+1;
    console.log(player.current);
    player.currentElement.textContent = player.current;
  }
};

const holdScore = () => {
  if (!playing) return;
  player.score += player.current;
  player.scoreElement.textContent = player.score;
  player.current = 0;
  player.currentElement.textContent = player.current;

  if (player.score >= 100) {
    if (player === playerLeft) {
      stageLeft.classList.remove('stage__left--selected');
      stageLeft.classList.add('stage__left--win');
    } else {
      stageRight.classList.remove('stage__right--selected');
      stageRight.classList.add('stage__right--win');
    }
    playing = false;
    player.pigElement.className = `stage__${player.side}__pig`;
    player.pigElement.classList.add(`stage__${player.side}__pig--pig5`);
    return;
  }
  else if (player.score >= 75) {
    player.pigElement.className = `stage__${player.side}__pig`;
    player.pigElement.classList.add(`stage__${player.side}__pig--pig4`);
    changePlayer();
    return;
  }
  else if (player.score >= 50) {
    player.pigElement.className = `stage__${player.side}__pig`;
    player.pigElement.classList.add(`stage__${player.side}__pig--pig3`);
    changePlayer();
    return;
  }
  else if (player.score >= 25) {
    player.pigElement.className = `stage__${player.side}__pig`;
    player.pigElement.classList.add(`stage__${player.side}__pig--pig2`);
    changePlayer();
    return;
  }
  else if (player.score >= 0) {
    player.pigElement.className = `stage__${player.side}__pig`;
    player.pigElement.classList.add(`stage__${player.side}__pig--pig1`);
    changePlayer();
    return;
  }
};

const newGame = () => {
  for (let i = 0; i < 2; i++) {
    player.score = 0;
    player.current = 0;
    player.currentElement.textContent = player.current;
    player.scoreElement.textContent = player.score;
    player.pigElement.className = `stage__${player.side}__pig`;
    player.pigElement.classList.add(`stage__${player.side}__pig--pig1`);
    changePlayer();
  }
  stageLeft.classList.remove('stage__left--win');
  stageRight.classList.remove('stage__right--win');
  playing = true;
}

btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
