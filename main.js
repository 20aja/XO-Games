let turn = "x";
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
player1.style.border = "2px solid #22db0b";
player2.style.border = "2px solid #f01";

let x = 0;
let o = 0;
let scorex;
let scoreo;

if (localStorage.SCOREO != null) {
  scoreo = JSON.parse(localStorage.SCOREO);
} else {
  scoreo = 0;
}

if (localStorage.SCOREX != null && localStorage.SCOREX > 0) {
  scorex = JSON.parse(localStorage.SCOREX);
} else {
  scorex = 0;
}

if (localStorage.length > 0) {
  function show() {
    score1.innerHTML = scorex;
    score2.innerHTML = scoreo;
  }
  show()
}

function end(n1, n2, n3) {
  if (turn == "o") {
    x++;
    scorex += x;
    localStorage.setItem("SCOREX", JSON.stringify(scorex));
  } else if (turn == "x") {
    o++;
    scoreo += o;
    localStorage.setItem("SCOREO", JSON.stringify(scoreo));
  }
  document.getElementById("iteam" + n1).style.backgroundImage =
    "linear-gradient(to right, #000, #000)";
  document.getElementById("iteam" + n2).style.backgroundImage =
    "linear-gradient(to right, #000, #000)";
  document.getElementById("iteam" + n3).style.backgroundImage =
    "linear-gradient(to right, #000, #000)";
  setTimeout(function () {
    location.reload();
  }, 3000);
  turn = "done";
}

function winner() {
  let div = [];
  for (let i = 1; i < 10; i++) {
    div[i] = document.getElementById("iteam" + i).innerHTML;
  }
  if (div[1] == div[2] && div[1] == div[3] && div[1] != "") {
    end(1, 2, 3);
  } else if (div[4] == div[5] && div[4] == div[6] && div[4] != "") {
    end(4, 5, 6);
  } else if (div[7] == div[8] && div[7] == div[9] && div[7] != "") {
    end(7, 8, 9);
  } else if (div[1] == div[4] && div[1] == div[7] && div[1] != "") {
    end(1, 4, 7);
  } else if (div[2] == div[5] && div[2] == div[8] && div[2] != "") {
    end(2, 5, 8);
  } else if (div[3] == div[6] && div[3] == div[9] && div[3] != "") {
    end(3, 6, 9);
  } else if (div[1] == div[5] && div[1] == div[9] && div[1] != "") {
    end(1, 5, 9);
  } else if (div[3] == div[5] && div[3] == div[7] && div[3] != "") {
    end(3, 5, 7);
  } else if (
    div[1] != "" &&
    div[2] != "" &&
    div[3] != "" &&
    div[4] != "" &&
    div[5] != "" &&
    div[6] != "" &&
    div[7] != "" &&
    div[8] != "" &&
    div[9] != ""
  ) {
    setTimeout(function () {
      location.reload();
    }, 3000);
  }
}

function game(id) {
  if (turn == "x") {
    document.getElementById(id).innerHTML = "X";
    turn = "o";
    player1.style.border = "2px solid #f01";
    player2.style.border = "2px solid #22db0b";
  } else if (turn == "o") {
    document.getElementById(id).innerHTML = "O";
    turn = "x";
    player1.style.border = "2px solid #22db0b";
    player2.style.border = "2px solid #f01";
  }
  winner();
}

let reload = document.querySelector(".reload");
reload.onclick = function () {
  score1.innerHTML = "0";
  score2.innerHTML = "0";
  localStorage.clear();
  location.reload();
};
