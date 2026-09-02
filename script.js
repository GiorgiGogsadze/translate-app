"use strict";

const wordSections = [
  {
    label: "english_gen",
    data: english_gen,
    name: "English General",
    audio: true,
  },
  { label: "english_c1", data: english_c1, name: "English C1" },
  { label: "english_graph", data: english_graph, name: "English for Graphs" },
  {
    label: "english_phrasals",
    data: english_phrasals,
    name: "English Phrasals",
  },
  { label: "english_idioms", data: english_idioms, name: "English Idioms" },
  { label: "spanish_a1", data: spanish_a1, name: "Spanish A1" },
  { label: "spanish_a2", data: spanish_a2, name: "Spanish A2" },
  { label: "spanish_numbers", data: spanish_numbers, name: "Spanish Numbers" },
];

const allWords = wordSections.reduce((acc, el) => {
  return { ...acc, [el.label]: el.data };
}, {});

const hasAudio = wordSections
  .filter((section) => section.audio)
  .flatMap((section) => section.data.map((pair) => pair[0]));

const chooseLvl = document.querySelector(".choose-buttons");
const chooseAmount = document.querySelector(".choose-amount");
const chooseAmountSelection = document.querySelector(
  ".choose-amount-selection",
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
const darkMode = document.querySelector(".dark-mode");
const instructionBtn = document.querySelector(".instruction");
const instructionContainer = document.querySelector(".instruction-container");
const closePopup = document.querySelectorAll(".close-popup");
const popupContainer = document.querySelectorAll(".popup-container");
const infoContainer = document.querySelector(".info-container");

// /////////////////////////////////////////////////////////////////////////////
wordSections.forEach((el) => {
  chooseLvl.insertAdjacentHTML(
    "beforeend",
    `<button class="lvl-btn" data-arr=${el.label}>${el.name}</button>`,
  );
});

function shuffle(array) {
  // return array; // if you don't want to randomize
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

const setFormattedText = function (element, text) {
  element.textContent = "";

  // Capturing group now includes the /$ symbols
  const parts = text.split(/(\/\$.*?\/\$)/g);

  parts.forEach((part) => {
    if (part.startsWith("/$") && part.endsWith("/$")) {
      const strong = document.createElement("strong");
      strong.textContent = part.slice(2, -2);
      element.appendChild(strong);
    } else if (part) {
      element.appendChild(document.createTextNode(part));
    }
  });
};

const orderWords = function (x, i) {
  wordList.insertAdjacentHTML(
    "beforeend",
    `<div>
        ${
          hasAudio.includes(x[0])
            ? `<button class="play-word" data-word="${x[0]}" data-index="${i}" type="button" disabled>🔊</button>`
            : ""
        }
        <p class="georgian">${x[1]}</p>
        <textarea spellcheck="false" class="user-answer" onkeydown="if (event.key === 'Enter') event.preventDefault();"></textarea>
        <button class="show-letter">0</button>
        <p class="answer"></p>
      </div>`,
  );
};

const playAudio = function (word) {
  const audio = new Audio(`audios/${word}.mp3`);
  audio.play();
};

wordList.addEventListener("click", (e) => {
  const btn = e.target.closest(".play-word");
  if (!btn) return;
  playAudio(btn.dataset.word);
});

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
  arr.forEach((el, i) => {
    orderWords(el, i);
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
  for (let i = 10; i < starterArr.length; i += 10) {
    chooseAmountSelection.insertAdjacentHTML(
      "beforeend",
      `<option value="${i}">${i}</option>`,
    );
  }
  chooseAmountSelection.insertAdjacentHTML(
    "beforeend",
    `<option value="${starterArr.length}">${starterArr.length}</option>`,
  );
  chooseAmountSelection.selectedIndex = -1;
});
chooseAmountSelection.addEventListener("change", function (e) {
  amountWords = +e.target.value;
  const amountBtns = Math.ceil(starterArr.length / amountWords);
  finalBtns.style.display = "";
  finalBtns.innerHTML = "";
  for (let i = 1; i <= amountBtns; i++) {
    finalBtns.insertAdjacentHTML(
      "beforeend",
      // `<button class="fin-btn" data-n = "${i}">${curLvl} ${i}</button>`
      `<button class="fin-btn" role="button" data-n = "${i}"><span class="text">${curLvl} ${i}</span></button>`,
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
    (el, i) => i >= startPoint && i < endPoint,
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
        let right_p = document.querySelectorAll(".answer")[i];
        if (el.value.toLowerCase().trim() === chosenLvl[i][0].toLowerCase()) {
          right_p.classList.add("correct");
          if (chosenLvl[i][2]) {
            setFormattedText(right_p, chosenLvl[i][2]);
          }
          el.classList.add("correct-input");
        } else {
          right_p.classList.add("wrong");
          right_p.textContent = chosenLvl[i][0];
          el.classList.add("wrong-input");
        }

        const play_word_btn = document.querySelector(
          `.play-word[data-index="${i}"]`,
        );
        if (play_word_btn) {
          play_word_btn.disabled = false;
          playAudio(chosenLvl[i][0]); // NEW: auto-play on single check
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
        [
          i
        ].insertAdjacentHTML("beforeend", [...chosenLvl[i][0]][+e.target.textContent]);
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
  document.querySelectorAll(".play-word").forEach((el) => {
    el.disabled = false;
  });
  wordList.removeEventListener("click", showHelp);
  document.querySelectorAll(".answer").forEach((el, i) => {
    if (userAnswer[i].value.toLowerCase() === chosenLvl[i][0].toLowerCase()) {
      el.classList.add("correct");
      if (chosenLvl[i][2]) {
        setFormattedText(el, chosenLvl[i][2]);
      }
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
  const wrong_words = [...document.querySelectorAll(".wrong")].map(
    (el) => el.textContent,
  );
  const wrongsArr = chosenLvl.filter((el) => wrong_words.includes(el[0]));
  renderWords(wrongsArr);
  next.style.display = "";
});

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-active");
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
    popupContainer.forEach((container) => {
      if (container.style.display === "block") {
        container.style.display = "none";
      }
    });
  }
});
