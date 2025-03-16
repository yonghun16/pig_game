const btnNewGame = document.querySelector('.button__new-game');
const dice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.button__roll-dice');
const btnHold = document.querySelector('.button__hold');

const stageLeft = document.querySelector('.stage__left');
const stageRight = document.querySelector('.stage__right');
const leftSelected = document.querySelector('.stage__left--selected');
const rightSelected = document.querySelector('.stage__right--selected');


class Player {
  constructor(score, current, side) {
    this.score = score;
    this.current = current;
    if (side === stageLeft) {
      this.currentElement = document.querySelector('.stage__left__dice');
      this.scoreElement = document.querySelector('.stage__left__score');
    }
    else {
      this.currentElement = document.querySelector('.stage__right__dice');
      this.scoreElement = document.querySelector('.stage__right__score');
    }
  }
}

const playerLeft = new Player(0, 0, stageLeft);
const playerRight = new Player(0, 0, stageRight);


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
  if (player.score >= 10) {
    if (player === playerLeft) {
      stageLeft.classList.remove('stage__left--selected');
      stageLeft.classList.add('stage__left--win');
    } else {
      stageRight.classList.remove('stage__right--selected');
      stageRight.classList.add('stage__right--win');
    }
    playing = false;
  }
  else {
    changePlayer();
  }
};

const newGame = () => {
  for (let i = 0; i < 2; i++) {
    player.score = 0;
    player.current = 0;
    player.currentElement.textContent = player.current;
    player.scoreElement.textContent = player.score;
    changePlayer();
  }
  stageLeft.classList.remove('stage__left--win');
  stageRight.classList.remove('stage__right--win');
  playing = true;
}

btnNewGame.addEventListener('click', newGame);
btnRollDice.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
