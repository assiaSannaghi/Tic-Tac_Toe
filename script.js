const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
const square9 = document.getElementById("square9");
const button = document.getElementById("button");
const msg = document.getElementById("msg");

let isWinner = false;
let player = "X";
const switchPlayer = () => {
  player = player === "X" ? "O" : "X";
};

const isDiagonal = () => {
  return (
    state[0][0].value === state[1][1].value &&
    state[0][0].value === state[2][2].value &&
    state[0][0].value !== null
  );
};
const isAntiDiagonal = () => {
  return (
    state[0][2].value === state[1][1].value &&
    state[0][2].value === state[2][0].value &&
    state[0][2].value !== null
  );
};
const isVertical = (arg) => {
  return (
    state[0][arg].value === state[1][arg].value &&
    state[0][arg].value === state[2][arg].value &&
    state[0][arg].value !== null
  );
};
const isHorizontal = (arg) => {
  return (
    state[arg][0].value === state[arg][1].value &&
    state[arg][0].value === state[arg][2].value &&
    state[arg][0].value !== null
  );
};

const checkValidation = function (target) {
  const [i, j] = findIndexPosition(target);

  target.el.addEventListener("click", () => {
    if (isWinner) return;
    if (target.value === null) {
      target.value = player;
      target.el.innerHTML = `<span class="symbol">${target.value}</span>`;
    } else {
      return;
    }
    if (i === j && isDiagonal()) {
      console.log(player + " winner");
      msg.style.display = "block";
      msg.innerText = `Player "${player}" is the winner`;
      isWinner = true;
    }

    if ((Math.abs(i - j) === 2 || (i === 1 && j === 1)) && isAntiDiagonal()) {
      console.log(player + " winner");
      msg.style.display = "block";
      msg.innerText = `Player "${player}" is the winner`;
      isWinner = true;
    }

    if (isVertical(j) || isHorizontal(i)) {
      console.log(player + " winner");
      msg.style.display = "block";
      msg.innerText = `Player "${player}" is the winner`;
      isWinner = true;
    }
    if (isWinner) return;
    switchPlayer();
  });
};

const state = [
  [
    {
      el: square1,
      value: null,
      init() {
        checkValidation(this);
      },
    },
    {
      el: square2,
      value: null,
      init() {
        checkValidation(this);
      },
    },
    {
      el: square3,
      value: null,
      init() {
        checkValidation(this);
      },
    },
  ],
  [
    {
      el: square4,
      value: null,
      init() {
        checkValidation(this);
      },
    },
    {
      el: square5,
      value: null,
      init() {
        checkValidation(this);
      },
    },
    {
      el: square6,
      value: null,
      init() {
        checkValidation(this);
      },
    },
  ],
  [
    {
      el: square7,
      value: null,
      init() {
        checkValidation(this);
      },
    },
    {
      el: square8,
      value: null,
      init() {
        checkValidation(this);
      },
    },
    {
      el: square9,
      value: null,
      init() {
        checkValidation(this);
      },
    },
  ],
];
const elements = [].concat(...state);

function findIndexPosition(target) {
  const rowIndex = state.findIndex((row) => row.includes(target));
  if (rowIndex === -1) return null; // Target not found

  const colIndex = state[rowIndex].indexOf(target);
  return [rowIndex, colIndex]; // [i,j]
}

// let click = 0;

const resetGame = () => {
  isWinner = false;
  player = "X";
  msg.style.display = "none";
  msg.innerText = "";
  elements.forEach((element) => {
    element.value = null;
    element.el.innerText = "";
  });
};

button.addEventListener("click", resetGame);
const initGame = () => {
  elements.forEach((element) => {
    element.init();
  });
};

initGame();
