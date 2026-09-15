"use strict";

// ==========================================
// 1. Configuration & Data Setup
// ==========================================
const wordSections = [
  {
    label: "english_c1",
    data: english_c1,
    name: "English C1",
    language: "english",
  },
  {
    label: "english_phrasals",
    data: english_phrasals,
    name: "English Phrasals",
    language: "english",
  },
  {
    label: "english_idioms",
    data: english_idioms,
    name: "English Idioms",
    language: "english",
  },
  {
    label: "spanish_a1",
    data: spanish_a1,
    name: "Spanish A1",
    language: "spanish",
  },
  {
    label: "spanish_a2",
    data: spanish_a2,
    name: "Spanish A2",
    language: "spanish",
  },
  {
    label: "spanish_numbers",
    data: spanish_numbers,
    name: "Spanish Numbers",
    language: "spanish",
  },
];

const allWords = wordSections.reduce((acc, el) => {
  return { ...acc, [el.label]: el.data };
}, {});

// ==========================================
// 2. Application State
// ==========================================
const state = {
  starterArr: [], // The full array of words for the selected level
  curLvlName: "", // The display name of the current level
  amountWords: 0, // How many words per batch
  chosenLvl: [], // The specific randomized batch being practiced
  helpNeeded: 0, // Total letter hints used
  inputs: [], // Array of active DOM textareas
  autoAudio: true,
};

// ==========================================
// 3. DOM Elements Cache
// ==========================================
const DOM = {
  siteTitle: document.querySelector(".site-title"),
  chooseLvl: document.querySelector(".choose-buttons"),
  chooseAmount: document.querySelector(".choose-amount"),
  customSelectWrapper: document.querySelector(".custom-select-wrapper"),
  customSelectTrigger: document.querySelector(".custom-select-trigger"),
  customSelectText: document.querySelector(".custom-select-text"),
  customSelectOptions: document.querySelector(".custom-select-options"),
  batchSelectContainer: document.querySelector(".batch-select-container"),
  batchSelectWrapper: document.querySelector(".batch-select-wrapper"),
  batchSelectTrigger: document.querySelector(".batch-select-trigger"),
  batchSelectText: document.querySelector(".batch-select-text"),
  batchSelectOptions: document.querySelector(".batch-select-options"),
  currentSelectionText: document.querySelector(".chosen-level"),
  wordList: document.querySelector(".wordList"),
  lastBtns: document.querySelector(".btn-container"),
  checkBtn: document.querySelector(".check"),
  nextBtn: document.querySelector(".next"),
  info: document.querySelector(".info-popup__content"),
  infoContainer: document.querySelector(".info-container"),
  audioToggle: document.querySelector(".audio-toggle"),
  darkModeBtn: document.querySelector(".dark-mode"),
  instructionBtn: document.querySelector(".instruction"),
  instructionContainer: document.querySelector(".instruction-container"),
  closePopups: document.querySelectorAll(".close-popup"),
  popupContainers: document.querySelectorAll(".popup-container"),
};

// ==========================================
// 4. Utility Functions
// ==========================================
const Utils = {
  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  },

  setFormattedText(element, text) {
    element.textContent = "";
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
  },

  playAudio(link) {
    const audio = new Audio(link);
    audio.play().catch((err) => console.warn("Audio playback failed:", err));
  },
};

// ==========================================
// 5. Core Application Module
// ==========================================
const App = {
  init() {
    this.renderLanguageButtons();
    this.bindEvents();
  },

  renderLanguageButtons() {
    DOM.chooseLvl.innerHTML = `
    <button class="language-btn" data-language="english">
      English
    </button>

    <button class="language-btn" data-language="spanish">
      Spanish
    </button>
  `;
  },

  renderLevelButtons(language) {
    const sections = wordSections.filter(
      (section) => section.language === language,
    );

    DOM.chooseLvl.innerHTML = `
    <button class="back-language-btn">← Back</button>

    ${sections
      .map(
        (section) => `
          <button
            class="lvl-btn"
            data-arr="${section.label}"
          >
            ${section.name}
          </button>
        `,
      )
      .join("")}
  `;
  },

  bindEvents() {
    DOM.siteTitle.addEventListener("click", () => {
      this.resetSelectionUI();
      this.renderLanguageButtons();
    });
    // Menu Selections
    DOM.chooseLvl.addEventListener("click", (e) => {
      const languageBtn = e.target.closest(".language-btn");
      const levelBtn = e.target.closest(".lvl-btn");
      const backBtn = e.target.closest(".back-language-btn");

      if (languageBtn) {
        this.renderLevelButtons(languageBtn.dataset.language);
        return;
      }

      if (backBtn) {
        this.resetSelectionUI();
        this.renderLanguageButtons();
        return;
      }

      if (levelBtn) {
        this.handleLevelSelection(e);
      }
    });
    // Custom Dropdown Logic
    DOM.customSelectTrigger.addEventListener("click", () => {
      DOM.customSelectOptions.classList.toggle("open");
      DOM.customSelectWrapper.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".custom-select-wrapper")) {
        DOM.customSelectOptions.classList.remove("open");
        DOM.customSelectWrapper.classList.remove("open");

        DOM.batchSelectOptions.classList.remove("open");
        DOM.batchSelectWrapper.classList.remove("open");
      }
    });

    DOM.customSelectOptions.addEventListener("click", (e) =>
      this.handleCustomAmountSelection(e),
    );
    DOM.batchSelectOptions.addEventListener("click", (e) =>
      this.handleBatchSelection(e),
    );

    // Word List Interactions (Event Delegation)
    DOM.wordList.addEventListener("click", (e) => this.handleWordListClicks(e));
    DOM.wordList.addEventListener("keydown", (e) =>
      this.handleKeyboardNavigation(e),
    );

    // Action Buttons
    DOM.checkBtn.addEventListener("click", () => this.checkAllAnswers());
    DOM.nextBtn.addEventListener("click", () => this.loadNextWrongWords());

    // UI & Modals
    DOM.audioToggle.addEventListener("click", () => {
      state.autoAudio = !state.autoAudio;

      DOM.audioToggle.textContent = state.autoAudio ? "🔊" : "🔇";
      DOM.audioToggle.setAttribute("aria-pressed", state.autoAudio);
    });
    DOM.darkModeBtn.addEventListener("click", () =>
      document.body.classList.toggle("dark-mode-active"),
    );
    DOM.instructionBtn.addEventListener(
      "click",
      () => (DOM.instructionContainer.style.display = "block"),
    );

    DOM.closePopups.forEach((btn) =>
      btn.addEventListener(
        "click",
        (e) => (e.target.closest(".popup-container").style.display = "none"),
      ),
    );

    DOM.popupContainers.forEach((container) => {
      container.addEventListener("click", (e) => {
        if (e.target === container) container.style.display = "none";
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        DOM.popupContainers.forEach((c) => (c.style.display = "none"));
      }
    });

    DOM.batchSelectTrigger.addEventListener("click", () => {
      DOM.batchSelectOptions.classList.toggle("open");
      DOM.batchSelectWrapper.classList.toggle("open");
    });
  },

  resetSelectionUI() {
    DOM.chooseAmount.style.display = "none";
    DOM.batchSelectContainer.style.display = "none";
    DOM.batchSelectText.textContent = "Choose";
    DOM.wordList.style.display = "none";
    DOM.lastBtns.style.display = "none";
    DOM.currentSelectionText.style.display = "none";

    state.starterArr = [];
    state.curLvlName = "";
    state.amountWords = 0;
    state.chosenLvl = [];

    DOM.customSelectText.textContent = "Choose";
  },

  handleLevelSelection(e) {
    const btn = e.target.closest(".lvl-btn");
    if (!btn) return;

    document
      .querySelectorAll(".lvl-btn")
      .forEach((el) => el.classList.remove("lvl-btn-active"));
    btn.classList.add("lvl-btn-active");

    // Reset UI for new level
    DOM.wordList.style.display = "none";
    DOM.lastBtns.style.display = "none";
    DOM.currentSelectionText.style.display = "none";
    DOM.batchSelectContainer.style.display = "none";
    DOM.batchSelectText.textContent = "Choose";
    DOM.chooseAmount.style.display = "none";

    // Update State
    state.starterArr = allWords[btn.dataset.arr] || [];
    state.curLvlName = btn.textContent;

    this.renderAmountOptions();
  },

  renderAmountOptions() {
    DOM.chooseAmount.style.display = "";
    DOM.customSelectText.textContent = "Choose"; // Reset text
    DOM.customSelectOptions.classList.remove("open"); // Ensure closed
    DOM.customSelectWrapper.classList.remove("open");

    let optionsHTML = "";
    for (let i = 10; i < state.starterArr.length; i += 10) {
      optionsHTML += `<div class="custom-option" data-value="${i}">${i}</div>`;
    }
    optionsHTML += `<div class="custom-option" data-value="${state.starterArr.length}">${state.starterArr.length}</div>`;

    DOM.customSelectOptions.innerHTML = optionsHTML;
  },

  handleCustomAmountSelection(e) {
    const option = e.target.closest(".custom-option");
    if (!option) return;

    // Update State & UI
    state.amountWords = +option.dataset.value;
    DOM.customSelectText.textContent = state.amountWords;

    // Close dropdown
    DOM.customSelectOptions.classList.remove("open");
    DOM.customSelectWrapper.classList.remove("open");

    // Render final buttons
    const amountBatches = Math.ceil(
      state.starterArr.length / state.amountWords,
    );

    DOM.batchSelectContainer.style.display = "";

    let optionsHTML = "";

    for (let i = 1; i <= amountBatches; i++) {
      const start = (i - 1) * state.amountWords + 1;

      const end = Math.min(i * state.amountWords, state.starterArr.length);

      optionsHTML += `
    <div class="custom-option" data-value="${i}">
      ${start} - ${end}
    </div>
  `;
    }

    DOM.batchSelectOptions.innerHTML = optionsHTML;
    DOM.batchSelectText.textContent = "Choose";
  },

  handleBatchSelection(e) {
    const option = e.target.closest(".custom-option");
    if (!option) return;

    const number = +option.dataset.value;

    DOM.batchSelectText.textContent = option.textContent.trim();

    DOM.batchSelectOptions.classList.remove("open");
    DOM.batchSelectWrapper.classList.remove("open");

    const startPoint = (number - 1) * state.amountWords;

    const endPoint = Math.min(
      number * state.amountWords,
      state.starterArr.length,
    );

    const batch = state.starterArr.slice(startPoint, endPoint);

    DOM.currentSelectionText.style.display = "block";

    DOM.currentSelectionText.textContent = `${state.curLvlName} Words ${startPoint + 1} - ${endPoint}`;

    this.renderWords(batch);
  },

  renderWords(arr) {
    state.chosenLvl = Utils.shuffle([...arr]);
    state.helpNeeded = 0;

    DOM.wordList.style.display = "";
    DOM.lastBtns.style.display = "";
    DOM.checkBtn.style.display = "block";
    DOM.nextBtn.style.display = "none";

    // Clear previous info
    [...DOM.info.children].forEach((el) => (el.textContent = ""));

    // Generate HTML string cleanly without innerHTML looping
    const listHTML = state.chosenLvl
      .map(
        (wordData, i) => `
      <div>
        ${wordData.audio ? `<button class="play-word" data-audio="${wordData.audio}" data-index="${i}" type="button" disabled>🔊</button>` : ""}
        <p class="georgian">${wordData.definition}</p>
        <textarea spellcheck="false" class="user-answer" data-index="${i}"></textarea>
        <button class="show-letter" data-index="${i}">0</button>
        <p class="answer" data-index="${i}"></p>
      </div>
    `,
      )
      .join("");

    DOM.wordList.innerHTML = listHTML;

    // Cache inputs into state for fast keyboard navigation
    state.inputs = Array.from(document.querySelectorAll(".user-answer"));
  },

  handleWordListClicks(e) {
    // 1. Audio Playback
    const playBtn = e.target.closest(".play-word");
    if (playBtn && !playBtn.disabled) {
      Utils.playAudio(playBtn.dataset.audio);
      return;
    }

    // 2. Help/Letter Hints
    const helpBtn = e.target.closest(".show-letter");
    if (helpBtn && !helpBtn.disabled) {
      const index = +helpBtn.dataset.index;
      const targetWord = state.chosenLvl[index].word;
      const currentHelps = +helpBtn.textContent;

      if (targetWord.length > currentHelps) {
        const answerEl = document.querySelector(
          `.answer[data-index="${index}"]`,
        );
        answerEl.insertAdjacentHTML("beforeend", [...targetWord][currentHelps]);
        state.helpNeeded++;
        helpBtn.textContent = currentHelps + 1;
      }
    }
  },

  handleKeyboardNavigation(e) {
    if (!["ArrowDown", "ArrowUp", "Enter"].includes(e.key)) return;

    const activeInput = document.activeElement;
    if (!activeInput.classList.contains("user-answer")) return;

    e.preventDefault(); // Prevents line breaks in the textarea

    const currentIndex = +activeInput.dataset.index;

    if (e.key === "ArrowDown") {
      const nextInput = state.inputs.find(
        (input, idx) => idx > currentIndex && !input.disabled,
      );
      if (nextInput) nextInput.focus();
    } else if (e.key === "ArrowUp") {
      // Reverse array search to find the closest previous input
      const prevInput = [...state.inputs]
        .reverse()
        .find(
          (input, idx) =>
            state.inputs.length - 1 - idx < currentIndex && !input.disabled,
        );
      if (prevInput) prevInput.focus();
    } else if (e.key === "Enter") {
      this.checkSingleAnswer(currentIndex, activeInput);
    }
  },

  checkSingleAnswer(index, inputEl, shouldPlayAudio = true) {
    const wordData = state.chosenLvl[index];
    const targetWord = wordData.word;
    const answerEl = document.querySelector(`.answer[data-index="${index}"]`);

    inputEl.disabled = true;

    const helpBtn = document.querySelector(
      `.show-letter[data-index="${index}"]`,
    );
    if (helpBtn) helpBtn.disabled = true;

    if (inputEl.value.toLowerCase().trim() === targetWord.toLowerCase()) {
      answerEl.classList.add("correct");
      if (wordData.sentence)
        Utils.setFormattedText(answerEl, wordData.sentence);
      inputEl.classList.add("correct-input");
    } else {
      answerEl.classList.add("wrong");
      answerEl.textContent = targetWord;
      inputEl.classList.add("wrong-input");
    }

    const playBtn = document.querySelector(`.play-word[data-index="${index}"]`);
    if (playBtn) {
      playBtn.disabled = false;
      if (shouldPlayAudio && state.autoAudio && wordData.audio) {
        Utils.playAudio(wordData.audio);
      }
    }

    // Check if the entire list is completed
    const completed = document.querySelectorAll(".correct, .wrong").length;
    if (completed === state.chosenLvl.length) {
      this.checkAllAnswers();
    } else if (shouldPlayAudio) {
      // Auto-focus next available input only during single entry
      const nextInput = state.inputs.find(
        (input, idx) => idx > index && !input.disabled,
      );
      if (nextInput) nextInput.focus();
    }
  },

  checkAllAnswers() {
    // Evaluate any skipped inputs WITHOUT triggering audio playback
    state.inputs.forEach((inputEl, index) => {
      if (!inputEl.disabled) {
        this.checkSingleAnswer(index, inputEl, false); // Pass false to suppress audio
      }
    });

    document
      .querySelectorAll(".play-word")
      .forEach((btn) => (btn.disabled = false));

    const correctCount = document.querySelectorAll(".correct").length;
    const wrongCount = document.querySelectorAll(".wrong").length;
    const score = ((correctCount / state.chosenLvl.length) * 100).toFixed(2);

    DOM.infoContainer.style.display = "block";
    DOM.info.children[0].innerHTML = `<span class="icon">✓</span>Correct : ${correctCount}`;
    DOM.info.children[1].innerHTML = `<span class="icon">✗</span>Wrong: ${wrongCount}`;
    DOM.info.children[2].innerHTML = `<span class="icon">☉</span>Help needed: ${state.helpNeeded}`;
    DOM.info.children[3].innerHTML = `<span class="icon">★</span>Your score: ${score}%`;

    if (wrongCount > 0) {
      DOM.nextBtn.style.display = "block";
    }
  },

  loadNextWrongWords() {
    const wrongWordsTexts = [...document.querySelectorAll(".wrong")].map(
      (el) => el.textContent,
    );
    const wrongsArr = state.chosenLvl.filter((wordData) =>
      wrongWordsTexts.includes(wordData.word),
    );

    this.renderWords(wrongsArr);
  },
};

// ==========================================
// 6. Initialize App
// ==========================================
document.addEventListener("DOMContentLoaded", () => App.init());
