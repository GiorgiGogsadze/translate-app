"use strict";

const allWords = {
  english: english,
  spanish: spanish,
};
const chooseLvl = document.querySelector(".choose-buttons");
const chooseAmount = document.querySelector(".choose-amount");
const chooseAmountSelection = document.querySelector(
  ".choose-amount-selection"
);
const finalBtns = document.querySelector(".final-buttons");
const currentSelectionText = document.querySelector(".chosen-level");
const wordList = document.querySelector(".wordList");
const lastBtns = document.querySelector(".btn-container");
let chosenLvl;
let userAnswer;
const check = document.querySelector(".check");
const next = document.querySelector(".next");
const info = document.querySelector(".info-popup__content");
const darkModeBtn = document.querySelector(".dark-mode__btn");
const instructionBtn = document.querySelector(".instruction");
const instructionContainer = document.querySelector(".instruction-container");
const closePopup = document.querySelectorAll(".close-popup");
const popupContainer = document.querySelectorAll(".popup-container");
const infoContainer = document.querySelector(".info-container");

// /////////////////////////////////////////////////////////////////////////////
function shuffle(array) {
  return array; // if you don't want to randomize
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const orderWords = function (x) {
  wordList.insertAdjacentHTML(
    "beforeend",
    `<div>
        <p class="georgian">${x[1]}</p>
        <input type="text" spellcheck="false" class="user-answer" />
        <button class="show-letter">0</button>
        <p class="answer"></p>
      </div>`
  );
};

const renderWords = function (arr) {
  shuffle(arr);
  wordList.style.display = "";
  lastBtns.style.display = "";
  wordList.innerHTML = "";
  check.style.display = "block";
  helpneeded = 0;
  [...info.children].forEach((el, i) => {
    el.textContent = "";
  });
  arr.forEach((el) => {
    orderWords(el);
  });
  chosenLvl = arr;
  userAnswer = document.querySelectorAll(".user-answer");
  userAnswer.forEach((el, i) => {
    el.disabled = false;
  });
  wordList.addEventListener("click", showHelp);
};

let starterArr;
let amountWords;
let curLvl;
chooseLvl.addEventListener("click", function (e) {
  const curBtn = e.target.closest(".lvl-btn");
  if (!curBtn) return;
  document
    .querySelectorAll(".lvl-btn")
    .forEach((el) => el.classList.remove("lvl-btn-active"));
  curBtn.classList.add("lvl-btn-active");
  wordList.style.display = "none";
  lastBtns.style.display = "none";
  currentSelectionText.style.display = "none";
  starterArr = allWords[curBtn.dataset.arr];
  curLvl = curBtn.textContent;
  chooseAmount.style.display = "";
  finalBtns.style.display = "none";
  chooseAmountSelection.innerHTML = ``;
  for (let i = 50; i < starterArr.length; i += 50) {
    chooseAmountSelection.insertAdjacentHTML(
      "beforeend",
      `<option value="${i}">${i}</option>`
    );
  }
  chooseAmountSelection.insertAdjacentHTML(
    "beforeend",
    `<option value="${starterArr.length}">${starterArr.length}</option>`
  );
  chooseAmountSelection.selectedIndex = -1;
});
chooseAmountSelection.addEventListener("change", function (e) {
  console.log("hey");
  amountWords = +e.target.value;
  const amountBtns = Math.ceil(starterArr.length / amountWords);
  finalBtns.style.display = "";
  finalBtns.innerHTML = "";
  for (let i = 1; i <= amountBtns; i++) {
    finalBtns.insertAdjacentHTML(
      "beforeend",
      // `<button class="fin-btn" data-n = "${i}">${curLvl} ${i}</button>`
      `<button class="fin-btn" role="button" data-n = "${i}"><span class="text">${curLvl} ${i}</span></button>`
    );
  }
});
finalBtns.addEventListener("click", function (e) {
  const curBtn = e.target.closest(".fin-btn");
  if (!curBtn) return;
  document
    .querySelectorAll(".fin-btn")
    .forEach((el) => el.classList.remove("fin-btn-active"));
  curBtn.classList.add("fin-btn-active");
  const number = +curBtn.dataset.n;
  const startPoint = number * amountWords - amountWords;
  const endPoint =
    number * amountWords < starterArr.length
      ? number * amountWords
      : starterArr.length;
  const shouldRenderArr = starterArr.filter(
    (el, i) => i >= startPoint && i < endPoint
  );
  renderWords(shouldRenderArr);
  currentSelectionText.style.display = "block";
  currentSelectionText.textContent = `${curLvl} Words ${
    startPoint + 1
  } - ${endPoint}`;
});

wordList.addEventListener("keyup", (e) => {
  if (e.keyCode !== 40 && e.keyCode !== 38 && e.keyCode !== 13) return;
  let nextindex;
  userAnswer.forEach((el, i, arr) => {
    if (el === document.activeElement) {
      if (e.keyCode === 40) {
        nextindex = [...arr].findIndex((word, n) => {
          return n > i && !word.disabled;
        });
      } else if (e.keyCode === 38) {
        nextindex = [...arr].findLastIndex((word, n) => {
          return n < i && !word.disabled;
        });
      } else if (e.keyCode === 13) {
        if (el.value.toLowerCase().trim() === chosenLvl[i][0].toLowerCase()) {
          document.querySelectorAll(".answer")[i].classList.add("correct");
          el.classList.add("correct-input");
        } else {
          document.querySelectorAll(".answer")[i].classList.add("wrong");
          document.querySelectorAll(".answer")[i].textContent = chosenLvl[i][0];
          el.classList.add("wrong-input");
        }
        if (
          document.querySelectorAll(".wrong").length +
            document.querySelectorAll(".correct").length ===
          arr.length
        ) {
          check.click();
        }
        el.disabled = true;
        nextindex = i + 1;
      }
    }
  });
  userAnswer[nextindex]?.focus();
});
let helpneeded = 0;
//
const showHelp = function (e) {
  if (!e.target.classList.contains("show-letter")) return;

  document.querySelectorAll(".show-letter").forEach((el, i) => {
    if (el === e.target && chosenLvl[i][0].length > +e.target.textContent) {
      document
        .querySelectorAll(".answer")
        [i].insertAdjacentHTML(
          "beforeend",
          [...chosenLvl[i][0]][+e.target.textContent]
        );
      helpneeded++;
      e.target.textContent = +e.target.textContent + 1;
    }
  });
};
wordList.addEventListener("click", showHelp);
//
check.addEventListener("click", (e) => {
  userAnswer.forEach((el, i) => {
    el.disabled = true;
  });
  wordList.removeEventListener("click", showHelp);
  document.querySelectorAll(".answer").forEach((el, i) => {
    if (userAnswer[i].value.toLowerCase() === chosenLvl[i][0].toLowerCase()) {
      el.classList.add("correct");
      userAnswer[i].classList.add("correct-input");
    } else {
      el.classList.add("wrong");
      el.textContent = chosenLvl[i][0];
      userAnswer[i].classList.add("wrong-input");
    }
  });
  const correct = document.querySelectorAll(".correct").length;
  const wrong = document.querySelectorAll(".wrong").length;
  infoContainer.style.display = "block";
  info.children[0].textContent = `✓Correct : ${correct}`;
  info.children[1].textContent = `✗Wrong: ${wrong}`;
  info.children[2].textContent = `☉Help needed: ${helpneeded}`;
  info.children[3].textContent = `★Your score: ${(
    (correct / chosenLvl.length) *
    100
  ).toFixed(2)}%`;
  if (wrong > 0) {
    next.style.display = "block";
  }
});
next.addEventListener("click", function () {
  const wrongsArr = [...document.querySelectorAll(".wrong")].map((el, i) => {
    return [
      el.textContent,
      el.closest("div").querySelector(".georgian").textContent,
    ];
  });
  renderWords(wrongsArr);
  next.style.display = "";
});
darkModeBtn.addEventListener("click", (e) => {
  const root = document.querySelector(":root");
  const body = document.querySelector("body");
  if (e.target.dataset.dark === "false") {
    e.target.style.left = "2.4rem";
    e.target.dataset.dark = "true";
    root.style.setProperty("--cl-white", "#000");
    root.style.setProperty("--cl-black", "#fff");
    body.style.backgroundColor = "#18191a";
  } else {
    e.target.style.left = "0.2rem";
    e.target.dataset.dark = "false";
    root.style.setProperty("--cl-white", "#fff");
    root.style.setProperty("--cl-black", "#000");
    body.style.backgroundColor = "#f0f2f5";
  }
});
instructionBtn.addEventListener("click", () => {
  instructionContainer.style.display = "block";
});
closePopup.forEach((el, i) => {
  el.addEventListener("click", () => {
    el.closest(".popup-container").style.display = "none";
  });
});
popupContainer.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    if (e.target !== el) return;
    el.style.display = "none";
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popupContainer.forEach(container => {
      if (container.style.display === "block") {
        container.style.display = "none";
      }
    });
  }
});