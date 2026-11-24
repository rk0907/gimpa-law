/**
 * Contract Law Quiz App
 * Practice & Exam modes • Build_it inspired UI
 */

(function () {
  'use strict';

  // ---------- State ----------
  let state = {
    mode: null,          // 'practice' | 'exam'
    questions: [],
    current: 0,
    answers: [],         // { selected: number|null, correct: boolean|null, skipped: boolean }
    score: 0
  };

  // ---------- DOM ----------
  const $ = (sel) => document.querySelector(sel);
  const startScreen   = $('#startScreen');
  const quizScreen    = $('#quizScreen');
  const resultsScreen = $('#resultsScreen');
  const qNumber       = $('#qNumber');
  const qText         = $('#qText');
  const optionsEl     = $('#options');
  const feedbackEl    = $('#feedback');
  const nextBtn       = $('#nextBtn');
  const skipBtn       = $('#skipBtn');
  const progressFill  = $('#progressFill');
  const progressText  = $('#progressText');
  const scoreLive     = $('#scoreLive');
  const questionCount = $('#questionCount');
  const totalQuestions= $('#totalQuestions');

  // ---------- Init ----------
  function init() {
    totalQuestions.textContent = QUESTION_BANK.length;

    // Mode cards
    document.querySelectorAll('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        const mode = card.dataset.mode;
        startQuiz(mode);
      });
    });

    nextBtn.addEventListener('click', handleNext);
    skipBtn.addEventListener('click', handleSkip);
    $('#restartBtn').addEventListener('click', resetToStart);
    $('#retryBtn').addEventListener('click', resetToStart);
    $('#reviewBtn').addEventListener('click', showReview);
  }

  // ---------- Start ----------
  function startQuiz(mode) {
    state.mode = mode;
    const countVal = questionCount.value;
    let pool = [...QUESTION_BANK];

    // Shuffle
    pool = shuffle(pool);

    if (countVal !== 'all') {
      const n = Math.min(parseInt(countVal, 10), pool.length);
      pool = pool.slice(0, n);
    }

    state.questions = pool;
    state.current = 0;
    state.answers = pool.map(() => ({ selected: null, correct: null, skipped: false }));
    state.score = 0;

    showScreen('quiz');
    renderQuestion();
  }

  // ---------- Render ----------
  function renderQuestion() {
    const q = state.questions[state.current];
    const total = state.questions.length;
    const idx = state.current;

    qNumber.textContent = `Q${idx + 1}`;
    qText.textContent = q.text;
    progressText.textContent = `Question ${idx + 1} of ${total}`;
    progressFill.style.width = `${((idx) / total) * 100}%`;

    if (state.mode === 'practice') {
      scoreLive.textContent = `Score: ${state.score}/${idx}`;
    } else {
      scoreLive.textContent = '';
    }

    // Options
    optionsEl.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.dataset.index = i;
      btn.innerHTML = `
        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
        <span>${opt}</span>
      `;
      btn.addEventListener('click', () => selectOption(i));
      optionsEl.appendChild(btn);
    });

    feedbackEl.hidden = true;
    feedbackEl.className = 'feedback';
    nextBtn.disabled = true;
    nextBtn.textContent = idx === total - 1 ? 'Finish' : 'Next';
    skipBtn.disabled = false;
  }

  // ---------- Select ----------
  function selectOption(index) {
    const q = state.questions[state.current];
    const ans = state.answers[state.current];

    // Already answered in practice mode
    if (state.mode === 'practice' && ans.selected !== null) return;

    // Clear previous selection styling
    optionsEl.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));

    const selectedBtn = optionsEl.querySelector(`[data-index="${index}"]`);
    selectedBtn.classList.add('selected');

    ans.selected = index;
    ans.skipped = false;
    nextBtn.disabled = false;

    if (state.mode === 'practice') {
      // Immediate feedback
      const isCorrect = index === q.answer;
      ans.correct = isCorrect;
      if (isCorrect) state.score++;

      // Mark all options
      optionsEl.querySelectorAll('.option').forEach(btn => {
        const i = parseInt(btn.dataset.index, 10);
        btn.classList.add('disabled');
        if (i === q.answer) btn.classList.add('correct');
        else if (i === index && !isCorrect) btn.classList.add('wrong');
      });

      feedbackEl.hidden = false;
      feedbackEl.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
      feedbackEl.innerHTML = isCorrect
        ? `<strong>Correct.</strong> ${q.explanation || ''}`
        : `<strong>Incorrect.</strong> The correct answer is <strong>${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}</strong>. ${q.explanation || ''}`;

      skipBtn.disabled = true;
      scoreLive.textContent = `Score: ${state.score}/${state.current + 1}`;
    }
  }

  // ---------- Next / Skip ----------
  function handleNext() {
    const ans = state.answers[state.current];
    if (ans.selected === null && !ans.skipped) return;

    // In exam mode, grade on the fly for score tracking
    if (state.mode === 'exam' && ans.selected !== null) {
      const q = state.questions[state.current];
      ans.correct = ans.selected === q.answer;
      if (ans.correct) state.score++;
    }

    if (state.current < state.questions.length - 1) {
      state.current++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function handleSkip() {
    state.answers[state.current].skipped = true;
    state.answers[state.current].selected = null;
    state.answers[state.current].correct = null;
    handleNext();
  }

  // ---------- Finish ----------
  function finishQuiz() {
    // Final grade for exam mode (already mostly done)
    if (state.mode === 'exam') {
      state.score = state.answers.filter(a => a.correct === true).length;
    }

    const total = state.questions.length;
    const correct = state.score;
    const skipped = state.answers.filter(a => a.skipped).length;
    const wrong = total - correct - skipped;
    const percent = total ? Math.round((correct / total) * 100) : 0;

    $('#scorePercent').textContent = `${percent}%`;
    $('#correctCount').textContent = correct;
    $('#wrongCount').textContent = wrong;
    $('#skippedCount').textContent = skipped;

    let summary = '';
    if (percent >= 80) summary = 'Excellent work. You have a strong command of the statutory reforms.';
    else if (percent >= 60) summary = 'Solid performance. Review the residual public-policy and duress points.';
    else if (percent >= 40) summary = 'You know the basics. Focus on the differences between common law and Act 25.';
    else summary = 'Go back to the core provisions — ss. 5, 8, 9 and 10 — and try again.';

    $('#resultsSummary').textContent = summary;

    // Score circle
    const circle = $('#scoreCircle');
    circle.style.background = `conic-gradient(var(--blue-600) ${percent}%, var(--slate-200) ${percent}%)`;

    showScreen('results');
  }

  // ---------- Review ----------
  function showReview() {
    const list = $('#reviewList');
    list.hidden = false;
    list.innerHTML = '';

    state.questions.forEach((q, i) => {
      const ans = state.answers[i];
      const item = document.createElement('div');
      item.className = 'review-item';

      let status = '';
      if (ans.skipped) status = '<span class="bad">Skipped</span>';
      else if (ans.correct) status = '<span class="ok">Correct</span>';
      else status = '<span class="bad">Incorrect</span>';

      const yourAns = ans.selected !== null
        ? `${String.fromCharCode(65 + ans.selected)}. ${q.options[ans.selected]}`
        : '—';
      const correctAns = `${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}`;

      item.innerHTML = `
        <div class="review-q">${i + 1}. ${q.text}</div>
        <div class="review-meta">
          ${status} · Your answer: ${yourAns}<br>
          Correct: <strong>${correctAns}</strong>
          ${q.explanation ? `<br><em>${q.explanation}</em>` : ''}
        </div>
      `;
      list.appendChild(item);
    });

    list.scrollIntoView({ behavior: 'smooth' });
  }

  // ---------- Helpers ----------
  function showScreen(name) {
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    if (name === 'start') startScreen.classList.add('active');
    if (name === 'quiz')  quizScreen.classList.add('active');
    if (name === 'results') resultsScreen.classList.add('active');
  }

  function resetToStart() {
    state = { mode: null, questions: [], current: 0, answers: [], score: 0 };
    $('#reviewList').hidden = true;
    showScreen('start');
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- Boot ----------
  document.addEventListener('DOMContentLoaded', init);
})();
