function gameTier(average) {
  if (average >= 70) return "희귀 수집가";
  if (average >= 45) return "개성파";
  if (average >= 20) return "무난한 선택";
  return "대중적인 감각";
}

let data = null;
try {
  data = JSON.parse(sessionStorage.getItem("rareResults"));
} catch (error) {
  data = null;
}

const summaryEl = document.getElementById("summary");
const emptyEl = document.getElementById("empty");

if (!data || !data.results || data.results.length === 0) {
  emptyEl.hidden = false;
} else {
  summaryEl.hidden = false;

  const average = Math.round(data.total / data.results.length);
  document.getElementById("totalScore").textContent = data.total;
  document.getElementById("gameTier").textContent = gameTier(average);
  document.getElementById("averageText").textContent =
    data.results.length + "문제 평균 " + average + "점";

  const list = document.getElementById("answerList");
  for (const r of data.results) {
    const li = document.createElement("li");

    const q = document.createElement("div");
    q.className = "q";
    q.textContent = r.question;

    const a = document.createElement("div");
    a.className = "a";
    a.textContent = (r.answer === "" ? "(답 없음)" : r.answer) + " · " + r.score + "점";

    const l = document.createElement("div");
    l.className = "l";
    l.textContent = r.label;

    li.appendChild(q);
    li.appendChild(a);
    li.appendChild(l);
    list.appendChild(li);
  }
}
