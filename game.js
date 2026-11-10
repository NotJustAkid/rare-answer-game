const prompts = [
  {
    question: "한국 과자 이름을 말해 보세요",
    answers: [
      { name: "새우깡", score: 10 },
      { name: "포카칩", score: 20 },
      { name: "꼬북칩", score: 40 },
      { name: "치토스", score: 25 }
    ]
  },
  {
    question: "과일 이름을 말해 보세요",
    answers: [
      { name: "사과", score: 5 },
      { name: "바나나", score: 10 },
      { name: "두리안", score: 70 },
      { name: "리치", score: 85 }
    ]
  },
  {
    question: "악기 이름을 말해 보세요",
    answers: [
      { name: "피아노", score: 5 },
      { name: "기타", score: 10 },
      { name: "가야금", score: 60 },
      { name: "오카리나", score: 85 }
    ]
  }
];

const TIME_LIMIT = 20;
const DEFAULT_SCORE = 50;

let current = 0;
let total = 0;
let timeLeft = TIME_LIMIT;
let timerId = null;
let answering = true;

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

function scoreAnswer(input, answers) {
  const typed = clean(input);
  if (typed === "") {
    return { score: 0, label: "답이 없습니다" };
  }
  for (const a of answers) {
    if (clean(a.name) === typed) {
      return { score: a.score, label: tierName(a.score) };
    }
  }
  return { score: DEFAULT_SCORE, label: "목록에 없는 답 (기본 점수)" };
}

function showPrompt() {
  const p = prompts[current];
  answering = true;
  roundEl.textContent = (current + 1) + " / " + prompts.length;
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
  const result = scoreAnswer(answerEl.value, prompts[current].answers);
  total = total + result.score;
  feedbackEl.textContent = result.label + " · " + result.score + "점";
  if (current === prompts.length - 1) {
    submitBtn.textContent = "결과 보기";
  } else {
    submitBtn.textContent = "다음";
  }
}

function nextStep() {
  current = current + 1;
  if (current >= prompts.length) {
    gameBox.hidden = true;
    finalBox.hidden = false;
    finalScoreEl.textContent = total + "점";
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
