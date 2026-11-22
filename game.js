const TIME_LIMIT = 30;
const DEFAULT_SCORE = 5;
const ROUNDS = 5;
const rounds = prompts.slice().sort(() => Math.random() - 0.5).slice(0, ROUNDS);

let current = 0;
let total = 0;
let timeLeft = TIME_LIMIT;
let timerId = null;
let answering = true;
let results = [];

const roundEl = document.getElementById("round");
const timerEl = document.getElementById("timer");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");
const feedbackEl = document.getElementById("feedback");
const gameBox = document.getElementById("game");
const finalBox = document.getElementById("finalBox");
const finalScoreEl = document.getElementById("finalScore");

function clean(text) {
  return text.replace(/\s+/g, "").toLowerCase();
}

function tierName(score) {
  if (score >= 85) return "매우 희귀";
  if (score >= 60) return "희귀";
  if (score >= 30) return "보통";
  return "흔함";
}

// Levenshtein distance 
function distance(a, b) {
  let previous = [];
  for (let j = 0; j <= b.length; j++) {
    previous[j] = j;
  }
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(
        previous[j] + 1,
        row[j - 1] + 1,
        previous[j - 1] + cost
      );
    }
    previous = row;
  }
  return previous[b.length];
}

function toLetters(text) {
  return text.replace(/\s+/g, "").toLowerCase().normalize("NFD");
}

function allowedEdits(letters) {
  if (letters.length <= 5) return 0;
  if (letters.length <= 9) return 1;
  return 2;
}

function scoreAnswer(input, answers) {
  const typed = clean(input);
  if (typed === "") {
    return { score: 0, label: "답이 없습니다" };
  }

  for (const a of answers) {
    const names = [a.name].concat(a.aliases || []);
    for (const n of names) {
      if (clean(n) === typed) {
        return { score: a.score, label: tierName(a.score) };
      }
    }
  }

  const typedLetters = toLetters(input);
  let best = null;
  let bestDistance = 999;
  let tie = false;
  for (const a of answers) {
    const names = [a.name].concat(a.aliases || []);
    for (const n of names) {
      const target = toLetters(n);
      const d = distance(typedLetters, target);
      if (d <= allowedEdits(target)) {
        if (d < bestDistance) {
          best = a;
          bestDistance = d;
          tie = false;
        } else if (d === bestDistance && a !== best) {
          tie = true;
        }
      }
    }
  }

  if (best && !tie) {
    return {
      score: best.score,
      label: tierName(best.score) + " (" + best.name + "(으)로 인식)"
    };
  }

  return { score: DEFAULT_SCORE, label: "목록에 없는 답 (기본 점수)" };
}

function showPrompt() {
  const p = rounds[current];
  answering = true;
  roundEl.textContent = (current + 1) + " / " + rounds.length;
  questionEl.textContent = p.question;
  answerEl.value = "";
  answerEl.disabled = false;
  answerEl.focus();
  feedbackEl.textContent = "";
  submitBtn.textContent = "제출";
  timeLeft = TIME_LIMIT;
  timerEl.textContent = timeLeft + "초";
  timerId = setInterval(tick, 1000);
}

function tick() {
  timeLeft = timeLeft - 1;
  timerEl.textContent = timeLeft + "초";
  if (timeLeft <= 0) {
    submitAnswer();
  }
}

function submitAnswer() {
  clearInterval(timerId);
  answering = false;
  answerEl.disabled = true;
  const result = scoreAnswer(answerEl.value, rounds[current].answers);
  results.push({
    question: rounds[current].question,
    answer: answerEl.value.trim(),
    score: result.score,
    label: result.label
  });
  total = total + result.score;
  feedbackEl.textContent = result.label + " · " + result.score + "점";
 if (current === rounds.length - 1) {
    submitBtn.textContent = "결과 보기";
  } else {
    submitBtn.textContent = "다음";
  }
}

function nextStep() {
 current = current + 1;
  if (current >= rounds.length) {
    sessionStorage.setItem("rareResults", JSON.stringify({ total: total, results: results }));
    window.location.href = "result.html";
  } else {
    showPrompt();
  }
}

submitBtn.addEventListener("click", function () {
  if (answering) {
    submitAnswer();
  } else {
    nextStep();
  }
});

answerEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && answering) {
    submitAnswer();
  }
});

showPrompt();
