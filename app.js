const STORAGE_KEY = "wordbridge-progress-v3";

const englishLessons = [
  {
    word: "unpredictable",
    phonetic: "/ˌʌn.prɪˈdɪk.tə.bəl/",
    meaning: "無法預測的",
    parts: [
      { type: "字首 PREFIX", value: "un-", meaning: "不、相反" },
      { type: "字根 ROOT", value: "predict", meaning: "預測" },
      { type: "字尾 SUFFIX", value: "-able", meaning: "可以…的" },
    ],
    explanation: "un（不）＋ predict（預測）＋ able（可以…的），合起來就是「無法被預測的」。",
    example: "The weather here is completely unpredictable.",
    translation: "這裡的天氣完全無法預測。",
  },
  {
    word: "transportation",
    phonetic: "/ˌtræn.spɔːrˈteɪ.ʃən/",
    meaning: "運輸；交通",
    parts: [
      { type: "字首 PREFIX", value: "trans-", meaning: "跨越、通過" },
      { type: "字根 ROOT", value: "port", meaning: "攜帶、運送" },
      { type: "字尾 SUFFIX", value: "-ation", meaning: "行為或結果" },
    ],
    explanation: "trans（跨越）＋ port（運送）＋ ation（行為），表示把人或物運送到另一處。",
    example: "Public transportation is convenient in this city.",
    translation: "這座城市的大眾運輸很方便。",
  },
  {
    word: "misunderstanding",
    phonetic: "/ˌmɪs.ʌn.dɚˈstæn.dɪŋ/",
    meaning: "誤解",
    parts: [
      { type: "字首 PREFIX", value: "mis-", meaning: "錯誤地" },
      { type: "字根 ROOT", value: "understand", meaning: "理解" },
      { type: "字尾 SUFFIX", value: "-ing", meaning: "行為或狀態" },
    ],
    explanation: "mis（錯誤）＋ understand（理解）＋ ing（狀態），就是「理解錯誤的狀態」。",
    example: "It was just a small misunderstanding.",
    translation: "那只是一個小誤會。",
  },
  {
    word: "international",
    phonetic: "/ˌɪn.tɚˈnæʃ.ən.əl/",
    meaning: "國際的",
    parts: [
      { type: "字首 PREFIX", value: "inter-", meaning: "在…之間" },
      { type: "字根 ROOT", value: "nation", meaning: "國家" },
      { type: "字尾 SUFFIX", value: "-al", meaning: "與…有關的" },
    ],
    explanation: "inter（在…之間）＋ nation（國家）＋ al（相關的），表示「國家之間的」。",
    example: "She works for an international company.",
    translation: "她在一家國際公司工作。",
  },
];

const japaneseLessons = [
  {
    level: "N5 基礎文法",
    title: "表達喜好",
    pattern: "～が好きです",
    note: "用來表達「喜歡某個人、事、物」。助詞「が」前面放喜歡的對象，句尾用「好きです」保持禮貌。",
    phrases: [
      {
        japanese: "私は日本の音楽が好きです。",
        reading: "わたしは にほんの おんがくが すきです。",
        translation: "我喜歡日本音樂。",
      },
      {
        japanese: "どんな食べ物が好きですか。",
        reading: "どんな たべものが すきですか。",
        translation: "你喜歡什麼樣的食物？",
      },
    ],
    tip: "日文的「好き」雖然翻成喜歡，但文法上接近形容詞，所以不用加「を」。",
  },
  {
    level: "N5 基礎文法",
    title: "提出邀請",
    pattern: "～ませんか",
    note: "把動詞ます形改成「ませんか」，就能禮貌地邀請對方一起做某件事，語氣相當於「要不要一起…？」。",
    phrases: [
      {
        japanese: "一緒に映画を見ませんか。",
        reading: "いっしょに えいがを みませんか。",
        translation: "要不要一起看電影？",
      },
      {
        japanese: "週末、コーヒーを飲みませんか。",
        reading: "しゅうまつ、コーヒーを のみませんか。",
        translation: "週末要不要一起喝咖啡？",
      },
    ],
    tip: "回答邀請時可說「いいですね」（好啊）；若要婉拒，可說「すみません、ちょっと…」。",
  },
  {
    level: "情境常用句",
    title: "在餐廳點餐",
    pattern: "～をお願いします",
    note: "在店家或餐廳指定想要的東西時，可以用「名詞＋をお願いします」，是簡單又自然的禮貌說法。",
    phrases: [
      {
        japanese: "このラーメンをお願いします。",
        reading: "この ラーメンを おねがいします。",
        translation: "請給我這碗拉麵。",
      },
      {
        japanese: "お水をもう一つお願いします。",
        reading: "おみずを もうひとつ おねがいします。",
        translation: "請再給我一杯水。",
      },
    ],
    tip: "指菜單時搭配「これ」（這個）也可以直接說「これをお願いします」。",
  },
];

const quizQuestions = [
  {
    category: "英文構詞",
    question: "字首「un-」通常表示什麼？",
    options: ["一起", "不、相反", "再次", "在…之前"],
    answer: 1,
    explanation: "「un-」常表示否定或相反，例如 unhappy（不開心的）。",
  },
  {
    category: "日文文法",
    question: "想說「我喜歡日本音樂」，哪一句正確？",
    options: [
      "日本の音楽を好きです。",
      "日本の音楽が好きです。",
      "日本の音楽に好きです。",
      "日本の音楽で好きです。",
    ],
    answer: 1,
    explanation: "「好きです」前面的喜好對象使用助詞「が」。",
  },
  {
    category: "英文構詞",
    question: "transportation 中的字根「port」是什麼意思？",
    options: ["書寫", "觀看", "攜帶、運送", "說話"],
    answer: 2,
    explanation: "字根「port」有攜帶、運送之意，也能在 import、export 中看到。",
  },
  {
    category: "日文情境",
    question: "在餐廳想說「請給我這個」，最自然的是？",
    options: [
      "これは好きです。",
      "これが見ませんか。",
      "これをお願いします。",
      "これに行きます。",
    ],
    answer: 2,
    explanation: "「～をお願いします」可用於禮貌地指定想要的物品。",
  },
  {
    category: "英文構詞",
    question: "哪一個字尾有「可以…的」意思？",
    options: ["-able", "-tion", "-less", "-ment"],
    answer: 0,
    explanation: "「-able」表示可以或能夠，例如 readable（可閱讀的）。",
  },
];

const defaultProgress = {
  completedEnglish: [],
  completedJapanese: [],
  unfamiliarEnglish: [],
  unfamiliarJapanese: [],
  englishPracticeCount: 0,
  japanesePracticeCount: 0,
  quizBest: 0,
  quizAttempts: 0,
  studyDates: [],
  activities: [],
};

let state = loadProgress();
let currentRoute = "dashboard";
let englishIndex = 0;
let japaneseIndex = 0;
let isEnglishReviewMode = false;
let isJapaneseReviewMode = false;
let quizIndex = 0;
let quizScore = 0;
let selectedAnswer = null;
let toastTimer;

const viewRoot = document.querySelector("#view-root");
const toast = document.querySelector("#toast");

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultProgress, ...saved };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateHeader();
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function calculateStreak() {
  const dates = new Set(state.studyDates);
  let streak = 0;
  const cursor = new Date();

  if (!dates.has(localDateKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }

  while (dates.has(localDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function totalCompleted() {
  return state.completedEnglish.length + state.completedJapanese.length;
}

function totalPractices() {
  return state.englishPracticeCount + state.japanesePracticeCount;
}

function totalUnfamiliar() {
  return state.unfamiliarEnglish.length + state.unfamiliarJapanese.length;
}

function totalLessons() {
  return englishLessons.length + japaneseLessons.length;
}

function completionPercent() {
  return Math.round((totalCompleted() / totalLessons()) * 100);
}

function todayLabel() {
  return new Intl.DateTimeFormat("zh-TW", {
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date());
}

function markStudyActivity(type, title) {
  const today = localDateKey();
  if (!state.studyDates.includes(today)) {
    state.studyDates.push(today);
  }

  state.activities = [
    { type, title, date: new Date().toISOString() },
    ...state.activities.filter((activity) => activity.title !== title),
  ].slice(0, 8);
}

function addUniqueIndex(list, index) {
  if (!list.includes(index)) {
    list.push(index);
  }
}

function removeIndex(list, index) {
  return list.filter((item) => item !== index);
}

function getNextLessonIndex(currentIndex, lessonCount, reviewList, isReviewMode) {
  if (!isReviewMode || reviewList.length === 0) {
    return (currentIndex + 1) % lessonCount;
  }

  const currentReviewPosition = reviewList.indexOf(currentIndex);
  const nextReviewPosition =
    currentReviewPosition === -1 ? 0 : (currentReviewPosition + 1) % reviewList.length;
  return reviewList[nextReviewPosition];
}

function getPreviousLessonIndex(currentIndex, lessonCount, reviewList, isReviewMode) {
  if (!isReviewMode || reviewList.length === 0) {
    return currentIndex === 0 ? lessonCount - 1 : currentIndex - 1;
  }

  const currentReviewPosition = reviewList.indexOf(currentIndex);
  const previousReviewPosition =
    currentReviewPosition <= 0 ? reviewList.length - 1 : currentReviewPosition - 1;
  return reviewList[previousReviewPosition];
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function updateHeader() {
  document.querySelector("#header-streak").textContent = calculateStreak();
}

function setActiveNavigation(route) {
  document.querySelectorAll("[data-route]").forEach((element) => {
    const isNav = element.classList.contains("nav-item") || element.classList.contains("mobile-nav-item");
    if (isNav) {
      element.classList.toggle("is-active", element.dataset.route === route);
    }
  });
}

function navigate(route) {
  currentRoute = route;
  setActiveNavigation(route);
  window.scrollTo({ top: 0, behavior: "smooth" });

  const views = {
    dashboard: renderDashboard,
    english: renderEnglishLesson,
    japanese: renderJapaneseLesson,
    quiz: renderQuiz,
    progress: renderProgress,
  };

  (views[route] || renderDashboard)();
}

function pageHeader(eyebrow, title, description) {
  return `
    <header class="page-header">
      <div>
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
      <time class="date-chip">${todayLabel()}</time>
    </header>
  `;
}

function renderDashboard() {
  const percent = completionPercent();
  const nextEnglish = englishLessons.findIndex((_, index) => !state.completedEnglish.includes(index));
  const suggestedIndex = nextEnglish === -1 ? 0 : nextEnglish;
  const suggested = englishLessons[suggestedIndex];

  viewRoot.innerHTML = `
    ${pageHeader("TODAY'S LEARNING", "今天，想學多少就學多少", "沒有每日上限；持續往下學，或集中複習還不熟的內容。")}

    <section class="hero-grid" aria-label="今日學習摘要">
      <article class="daily-card card">
        <p class="eyebrow">今日推薦 · 英文構詞</p>
        <h2>${suggested.word}</h2>
        <p>${suggested.explanation}</p>
        <div class="daily-actions">
          <button class="primary-button" type="button" data-action="start-english" data-index="${suggestedIndex}">
            開始今日課程
          </button>
          <button class="secondary-button" type="button" data-route="japanese">改學一句日文</button>
          ${
            totalUnfamiliar() > 0
              ? '<button class="secondary-button" type="button" data-route="progress">複習不熟內容</button>'
              : ""
          }
        </div>
      </article>

      <article class="progress-card card">
        <div class="progress-copy">
          <p>第一階段完成度</p>
          <div class="progress-ring" style="--progress: ${percent * 3.6}deg">
            <strong>${percent}%</strong>
          </div>
          <strong>${totalCompleted()} / ${totalLessons()} 堂課</strong>
        </div>
        <div class="mini-stats">
          <div class="mini-stat">
            <strong>${calculateStreak()}</strong>
            <small>連續天數</small>
          </div>
          <div class="mini-stat">
            <strong>${totalPractices()}</strong>
            <small>累計練習</small>
          </div>
        </div>
      </article>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <div>
          <h2>選擇今天的學習路線</h2>
          <p>不用一次學很多，完成一小段就算前進。</p>
        </div>
      </div>
      <div class="course-grid">
        <article class="course-card card">
          <div class="course-icon">A</div>
          <h3>英文拆字練習</h3>
          <p>從字首、字根、字尾理解單字，可持續循環練習，不限每日數量。</p>
          <button class="text-button" type="button" data-route="english">開始拆解 →</button>
        </article>
        <article class="course-card card">
          <div class="course-icon orange">あ</div>
          <h3>日文文法與常用句</h3>
          <p>從日常情境出發練習句子，學完後可繼續循環或複習不熟內容。</p>
          <button class="text-button" type="button" data-route="japanese">進入課程 →</button>
        </article>
        <article class="course-card card">
          <div class="course-icon blue">✓</div>
          <h3>英日混合測驗</h3>
          <p>用五道題快速檢查今天的記憶，答錯也會看到清楚解釋。</p>
          <button class="text-button" type="button" data-route="quiz">接受挑戰 →</button>
        </article>
      </div>
    </section>
  `;
}

function renderEnglishLesson() {
  const lesson = englishLessons[englishIndex];
  const isCompleted = state.completedEnglish.includes(englishIndex);
  const isUnfamiliar = state.unfamiliarEnglish.includes(englishIndex);

  viewRoot.innerHTML = `
    ${pageHeader(
      isEnglishReviewMode ? "ENGLISH REVIEW" : "ENGLISH WORD BUILDING",
      isEnglishReviewMode ? "英文不熟單字複習" : "英文拆字練習",
      "不限每日數量；熟悉後繼續下一個，不熟就保留並重複練習。",
    )}
    <section class="lesson-layout">
      <article class="lesson-main card">
        ${
          isUnfamiliar
            ? '<span class="review-badge">待複習</span>'
            : isEnglishReviewMode
              ? '<span class="review-badge">複習模式</span>'
              : ""
        }
        <div class="word-heading">
          <h2>${lesson.word}</h2>
          <span class="phonetic">${lesson.phonetic}</span>
        </div>
        <p class="definition">${lesson.meaning}</p>

        <div class="word-parts">
          ${lesson.parts
            .map(
              (part) => `
                <div class="word-part">
                  <small>${part.type}</small>
                  <strong>${part.value}</strong>
                  <span>${part.meaning}</span>
                </div>
              `,
            )
            .join("")}
        </div>

        <p class="word-explanation"><strong>這樣記：</strong>${lesson.explanation}</p>

        <div class="example-box">
          <strong>例句</strong>
          <p>${lesson.example}</p>
          <small>${lesson.translation}</small>
        </div>

        <div class="lesson-controls">
          <button class="secondary-button" type="button" data-action="previous-english">上一個</button>
          <span class="lesson-counter">${
            isEnglishReviewMode
              ? `不熟清單 ${state.unfamiliarEnglish.length} 個`
              : `${englishIndex + 1} / ${englishLessons.length} · 可循環學習`
          }</span>
          <div class="learning-actions">
            <button class="secondary-button unfamiliar-button" type="button" data-action="repeat-english">
              不熟，重複練習
            </button>
            <button class="primary-button" type="button" data-action="complete-english">
              ${isUnfamiliar ? "熟悉了，移出清單" : isCompleted ? "熟悉，下一個" : "記住了，下一個"}
            </button>
          </div>
        </div>
      </article>

      <aside class="lesson-aside">
        <article class="aside-card card">
          <h3>拆字順序</h3>
          <ol>
            <li>先看字首，判斷方向或否定。</li>
            <li>找出字根，抓住核心意思。</li>
            <li>最後看字尾，辨認詞性。</li>
          </ol>
        </article>
        <article class="aside-card card">
          <h3>不熟單字</h3>
          <p>目前有 ${state.unfamiliarEnglish.length} 個單字等待複習。</p>
          <button class="secondary-button review-button" type="button" data-action="review-english" ${
            state.unfamiliarEnglish.length === 0 ? "disabled" : ""
          }>
            ${isEnglishReviewMode ? "正在複習" : "開始集中複習"}
          </button>
        </article>
        <article class="aside-card card">
          <h3>本課進度</h3>
          <p>已完成 ${state.completedEnglish.length} / ${englishLessons.length} 個英文單字。</p>
          <div class="bar">
            <span style="width: ${(state.completedEnglish.length / englishLessons.length) * 100}%"></span>
          </div>
        </article>
      </aside>
    </section>
  `;
}

function renderJapaneseLesson() {
  const lesson = japaneseLessons[japaneseIndex];
  const isCompleted = state.completedJapanese.includes(japaneseIndex);
  const isUnfamiliar = state.unfamiliarJapanese.includes(japaneseIndex);

  viewRoot.innerHTML = `
    ${pageHeader(
      isJapaneseReviewMode ? "JAPANESE REVIEW" : "JAPANESE IN CONTEXT",
      isJapaneseReviewMode ? "日文不熟句型複習" : "日文文法與常用句",
      "不限每日句數；熟悉後繼續下一課，不熟的句型可重複練習。",
    )}
    <section class="lesson-layout">
      <article class="lesson-main card">
        ${
          isUnfamiliar
            ? '<span class="review-badge">待複習</span>'
            : isJapaneseReviewMode
              ? '<span class="review-badge">複習模式</span>'
              : ""
        }
        <span class="grammar-tag">${lesson.level}</span>
        <h2>${lesson.title}</h2>
        <div class="grammar-pattern">${lesson.pattern}</div>
        <p class="grammar-note">${lesson.note}</p>

        <div class="phrase-list">
          ${lesson.phrases
            .map(
              (phrase) => `
                <article class="phrase-card">
                  <strong>${phrase.japanese}</strong>
                  <span>${phrase.translation}</span>
                  <small>${phrase.reading}</small>
                </article>
              `,
            )
            .join("")}
        </div>

        <div class="lesson-controls">
          <button class="secondary-button" type="button" data-action="previous-japanese">上一課</button>
          <span class="lesson-counter">${
            isJapaneseReviewMode
              ? `不熟清單 ${state.unfamiliarJapanese.length} 課`
              : `${japaneseIndex + 1} / ${japaneseLessons.length} · 可循環學習`
          }</span>
          <div class="learning-actions">
            <button class="secondary-button unfamiliar-button" type="button" data-action="repeat-japanese">
              不熟，重複練習
            </button>
            <button class="primary-button" type="button" data-action="complete-japanese">
              ${isUnfamiliar ? "熟悉了，移出清單" : isCompleted ? "熟悉，下一課" : "完成並學下一課"}
            </button>
          </div>
        </div>
      </article>

      <aside class="lesson-aside">
        <article class="aside-card card">
          <h3>使用提醒</h3>
          <p>${lesson.tip}</p>
        </article>
        <article class="aside-card card">
          <h3>不熟句型</h3>
          <p>目前有 ${state.unfamiliarJapanese.length} 課等待重複練習。</p>
          <button class="secondary-button review-button" type="button" data-action="review-japanese" ${
            state.unfamiliarJapanese.length === 0 ? "disabled" : ""
          }>
            ${isJapaneseReviewMode ? "正在複習" : "開始集中複習"}
          </button>
        </article>
        <article class="aside-card card">
          <h3>日文課程進度</h3>
          <p>已完成 ${state.completedJapanese.length} / ${japaneseLessons.length} 堂日文課。</p>
          <div class="bar orange">
            <span style="width: ${(state.completedJapanese.length / japaneseLessons.length) * 100}%"></span>
          </div>
        </article>
      </aside>
    </section>
  `;
}

function renderQuiz() {
  if (quizIndex >= quizQuestions.length) {
    renderQuizResult();
    return;
  }

  const question = quizQuestions[quizIndex];
  viewRoot.innerHTML = `
    ${pageHeader("QUICK CHALLENGE", "英日混合測驗", "五道題快速確認理解；答錯時先看解釋，再繼續下一題。")}
    <section class="quiz-shell">
      <article class="quiz-card card">
        <div class="quiz-progress">
          <span style="width: ${((quizIndex + 1) / quizQuestions.length) * 100}%"></span>
        </div>
        <div class="question-meta">
          <span>${question.category}</span>
          <span>第 ${quizIndex + 1} 題，共 ${quizQuestions.length} 題</span>
        </div>
        <h2 class="quiz-question">${question.question}</h2>
        <div class="answer-list">
          ${question.options
            .map(
              (option, index) => `
                <button class="answer-button" type="button" data-action="answer" data-index="${index}">
                  <span>${String.fromCharCode(65 + index)}</span>${option}
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="quiz-feedback" id="quiz-feedback">選擇一個答案後，這裡會顯示解釋。</div>
        <div class="quiz-footer">
          <button class="primary-button" type="button" data-action="next-question" disabled>下一題</button>
        </div>
      </article>
    </section>
  `;
}

function answerQuestion(index) {
  if (selectedAnswer !== null) return;
  selectedAnswer = index;
  const question = quizQuestions[quizIndex];
  const buttons = document.querySelectorAll(".answer-button");
  const isCorrect = index === question.answer;

  if (isCorrect) {
    quizScore += 1;
  }

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === question.answer) button.classList.add("is-correct");
    if (buttonIndex === index && !isCorrect) button.classList.add("is-wrong");
  });

  document.querySelector("#quiz-feedback").innerHTML = `
    <strong>${isCorrect ? "答對了！" : "再記一次："}</strong> ${question.explanation}
  `;
  document.querySelector('[data-action="next-question"]').disabled = false;
}

function renderQuizResult() {
  const scorePercent = Math.round((quizScore / quizQuestions.length) * 100);
  const best = Math.max(state.quizBest, quizScore);
  state.quizBest = best;
  state.quizAttempts += 1;
  markStudyActivity("測驗", `完成英日混合測驗：${quizScore}/${quizQuestions.length}`);
  saveProgress();

  viewRoot.innerHTML = `
    ${pageHeader("CHALLENGE COMPLETE", "測驗完成", "每一次回想都在加深記憶，錯題也會成為下一次的線索。")}
    <section class="quiz-shell">
      <article class="result-card card">
        <div class="result-icon">${scorePercent >= 80 ? "🎉" : "🌱"}</div>
        <h2>${scorePercent >= 80 ? "掌握得很好！" : "今天又前進了一步"}</h2>
        <div class="result-score">${quizScore} / ${quizQuestions.length}</div>
        <p>本次答對率 ${scorePercent}%，歷史最佳成績 ${best} 題。</p>
        <div class="result-actions">
          <button class="primary-button" type="button" data-action="restart-quiz">再測一次</button>
          <button class="secondary-button" type="button" data-route="progress">查看學習進度</button>
        </div>
      </article>
    </section>
  `;
}

function renderProgress() {
  const englishPercent = Math.round((state.completedEnglish.length / englishLessons.length) * 100);
  const japanesePercent = Math.round((state.completedJapanese.length / japaneseLessons.length) * 100);
  const activities = state.activities.length
    ? state.activities
        .map(
          (activity) => `
            <div class="activity-item">
              <span class="activity-dot"></span>
              <div>
                <strong>${activity.title}</strong>
                <small>${new Intl.DateTimeFormat("zh-TW", {
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(new Date(activity.date))}</small>
              </div>
            </div>
          `,
        )
        .join("")
    : '<p class="empty-state">完成第一堂課後，這裡會出現學習紀錄。</p>';

  viewRoot.innerHTML = `
    ${pageHeader("YOUR PROGRESS", "你的學習足跡", "所有資料只儲存在這台裝置，不需要登入也能追蹤進度。")}
    <section class="stats-grid" aria-label="學習統計">
      <article class="stat-card card">
        <small>總完成課程</small>
        <strong>${totalCompleted()}</strong>
        <span>共 ${totalLessons()} 堂</span>
      </article>
      <article class="stat-card card">
        <small>連續學習</small>
        <strong>${calculateStreak()} 天</strong>
        <span>保持每天一小步</span>
      </article>
      <article class="stat-card card">
        <small>累計練習</small>
        <strong>${totalPractices()} 次</strong>
        <span>不限每日練習量</span>
      </article>
      <article class="stat-card card">
        <small>等待複習</small>
        <strong>${totalUnfamiliar()}</strong>
        <span>不熟內容</span>
      </article>
    </section>

    <section class="progress-detail-grid">
      <article class="detail-card card">
        <h2>課程進度</h2>
        <div class="progress-row">
          <div class="progress-row-label"><span>英文拆字</span><strong>${englishPercent}%</strong></div>
          <div class="bar"><span style="width: ${englishPercent}%"></span></div>
        </div>
        <div class="progress-row">
          <div class="progress-row-label"><span>日文文法與常用句</span><strong>${japanesePercent}%</strong></div>
          <div class="bar orange"><span style="width: ${japanesePercent}%"></span></div>
        </div>
        <div class="review-summary">
          <div>
            <strong>英文不熟單字</strong>
            <span>${state.unfamiliarEnglish.length} 個</span>
            <button class="text-button" type="button" data-action="review-english" ${
              state.unfamiliarEnglish.length === 0 ? "disabled" : ""
            }>開始複習 →</button>
          </div>
          <div>
            <strong>日文不熟句型</strong>
            <span>${state.unfamiliarJapanese.length} 課</span>
            <button class="text-button" type="button" data-action="review-japanese" ${
              state.unfamiliarJapanese.length === 0 ? "disabled" : ""
            }>開始複習 →</button>
          </div>
        </div>
      </article>

      <article class="detail-card card">
        <h2>最近活動</h2>
        <div class="activity-list">${activities}</div>
      </article>
    </section>
  `;
}

function completeEnglishLesson() {
  const reviewedWord = englishLessons[englishIndex].word;
  addUniqueIndex(state.completedEnglish, englishIndex);
  state.unfamiliarEnglish = removeIndex(state.unfamiliarEnglish, englishIndex);
  state.englishPracticeCount += 1;
  markStudyActivity("英文", `練習英文單字：${reviewedWord}`);

  if (isEnglishReviewMode && state.unfamiliarEnglish.length === 0) {
    isEnglishReviewMode = false;
    showToast("英文不熟清單已全部完成！");
  } else {
    showToast("已標記為熟悉，繼續下一個單字。");
  }

  englishIndex = getNextLessonIndex(
    englishIndex,
    englishLessons.length,
    state.unfamiliarEnglish,
    isEnglishReviewMode,
  );
  saveProgress();
  renderEnglishLesson();
}

function completeJapaneseLesson() {
  const reviewedLesson = japaneseLessons[japaneseIndex].title;
  addUniqueIndex(state.completedJapanese, japaneseIndex);
  state.unfamiliarJapanese = removeIndex(state.unfamiliarJapanese, japaneseIndex);
  state.japanesePracticeCount += 1;
  markStudyActivity("日文", `練習日文句型：${reviewedLesson}`);

  if (isJapaneseReviewMode && state.unfamiliarJapanese.length === 0) {
    isJapaneseReviewMode = false;
    showToast("日文不熟清單已全部完成！");
  } else {
    showToast("已標記為熟悉，繼續下一課。");
  }

  japaneseIndex = getNextLessonIndex(
    japaneseIndex,
    japaneseLessons.length,
    state.unfamiliarJapanese,
    isJapaneseReviewMode,
  );
  saveProgress();
  renderJapaneseLesson();
}

function repeatEnglishLesson() {
  addUniqueIndex(state.unfamiliarEnglish, englishIndex);
  state.englishPracticeCount += 1;
  markStudyActivity("英文", `重複英文單字：${englishLessons[englishIndex].word}`);
  saveProgress();
  showToast("已加入不熟清單，請再看一次拆字與例句。");
  renderEnglishLesson();
}

function repeatJapaneseLesson() {
  addUniqueIndex(state.unfamiliarJapanese, japaneseIndex);
  state.japanesePracticeCount += 1;
  markStudyActivity("日文", `重複日文句型：${japaneseLessons[japaneseIndex].title}`);
  saveProgress();
  showToast("已加入不熟清單，請再讀一次句型與例句。");
  renderJapaneseLesson();
}

function startEnglishReview() {
  if (state.unfamiliarEnglish.length === 0) {
    showToast("目前沒有需要複習的英文單字。");
    return;
  }
  isEnglishReviewMode = true;
  englishIndex = state.unfamiliarEnglish[0];
  navigate("english");
}

function startJapaneseReview() {
  if (state.unfamiliarJapanese.length === 0) {
    showToast("目前沒有需要複習的日文句型。");
    return;
  }
  isJapaneseReviewMode = true;
  japaneseIndex = state.unfamiliarJapanese[0];
  navigate("japanese");
}

function resetQuiz() {
  quizIndex = 0;
  quizScore = 0;
  selectedAnswer = null;
  renderQuiz();
}

document.addEventListener("click", (event) => {
  const routeTarget = event.target.closest("[data-route]");
  if (routeTarget) {
    event.preventDefault();
    if (routeTarget.dataset.route === "english") isEnglishReviewMode = false;
    if (routeTarget.dataset.route === "japanese") isJapaneseReviewMode = false;
    navigate(routeTarget.dataset.route);
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const actions = {
    "start-english": () => {
      isEnglishReviewMode = false;
      englishIndex = Number(actionTarget.dataset.index);
      navigate("english");
    },
    "previous-english": () => {
      englishIndex = getPreviousLessonIndex(
        englishIndex,
        englishLessons.length,
        state.unfamiliarEnglish,
        isEnglishReviewMode,
      );
      renderEnglishLesson();
    },
    "complete-english": completeEnglishLesson,
    "repeat-english": repeatEnglishLesson,
    "review-english": startEnglishReview,
    "previous-japanese": () => {
      japaneseIndex = getPreviousLessonIndex(
        japaneseIndex,
        japaneseLessons.length,
        state.unfamiliarJapanese,
        isJapaneseReviewMode,
      );
      renderJapaneseLesson();
    },
    "complete-japanese": completeJapaneseLesson,
    "repeat-japanese": repeatJapaneseLesson,
    "review-japanese": startJapaneseReview,
    answer: () => answerQuestion(Number(actionTarget.dataset.index)),
    "next-question": () => {
      quizIndex += 1;
      selectedAnswer = null;
      renderQuiz();
    },
    "restart-quiz": resetQuiz,
  };

  actions[actionTarget.dataset.action]?.();
});

updateHeader();
navigate(currentRoute);
