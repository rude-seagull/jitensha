/**
 * Progress tracking: the "mark as complete" toggle, the completion marks on
 * lesson cards, and the progress bars.
 *
 * Progress is derived entirely on the client from the lesson ids present in the
 * markup, so no lesson list has to be duplicated into JavaScript. Every control
 * is rendered `hidden` server-side and revealed here — without JavaScript the
 * reader sees a clean page rather than dead buttons.
 */

import { completedLessons, isCompleted, setCompleted, STORE_EVENT } from './store.js';

/* ---- Mark a lesson complete ------------------------------------------- */

const toggle = document.querySelector('[data-complete-toggle]');

if (toggle) {
  const lessonId = toggle.dataset.lesson;
  const stamp = document.getElementById('lesson-stamp');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sync = (animate) => {
    const done = isCompleted(lessonId);
    toggle.setAttribute('aria-pressed', String(done));
    toggle.dataset.state = done ? 'done' : 'todo';
    toggle.querySelector('[data-complete-label]').textContent = done
      ? 'Leçon terminée'
      : 'Marquer comme terminée';

    if (!stamp) return;
    const landing = animate && !reduced && done && stamp.hidden;
    stamp.hidden = !done;
    if (landing) {
      stamp.setAttribute('data-pressed', '');
      stamp.addEventListener('animationend', () => stamp.removeAttribute('data-pressed'), {
        once: true,
      });
    }
  };

  // Restore state without replaying the animation on every page load.
  sync(false);
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    setCompleted(lessonId, !isCompleted(lessonId));
    sync(true);
  });
}

/* ---- Completion marks on lesson cards ---------------------------------- */

function syncCards() {
  const done = new Set(completedLessons());
  for (const card of document.querySelectorAll('[data-lesson-card]')) {
    const isDone = done.has(card.dataset.lesson);
    card.dataset.done = String(isDone);
    const mark = card.querySelector('[data-done-mark]');
    if (mark) mark.hidden = !isDone;
  }
}

/* ---- End-of-sequence seal ----------------------------------------------- */

/**
 * A lesson path declares the ids it covers via `data-path-complete`. When every one is
 * done the seal lands, matching the rule that it marks a validation and nothing else.
 */
function syncPathStamps() {
  const done = new Set(completedLessons());
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  for (const end of document.querySelectorAll('[data-path-complete]')) {
    const ids = end.dataset.pathComplete.split(',').filter(Boolean);
    const stamp = end.querySelector('[data-stamp]');
    if (!stamp || !ids.length) continue;

    const complete = ids.every((id) => done.has(id));
    const landing = complete && stamp.hidden && !reduced;
    stamp.hidden = !complete;
    if (landing) {
      stamp.setAttribute('data-pressed', '');
      stamp.addEventListener('animationend', () => stamp.removeAttribute('data-pressed'), {
        once: true,
      });
    }
  }
}

/* ---- Progress bars ------------------------------------------------------ */

/**
 * A bar declares the lesson ids it covers via `data-progress="id,id,…"`, so the
 * server stays the single source of truth for which lessons belong to a group.
 */
function syncBars() {
  const done = new Set(completedLessons());
  for (const bar of document.querySelectorAll('[data-progress]')) {
    const ids = bar.dataset.progress.split(',').filter(Boolean);
    if (!ids.length) continue;

    const count = ids.filter((id) => done.has(id)).length;
    const percent = Math.round((count / ids.length) * 100);

    bar.hidden = false;
    bar.style.setProperty('--progress', `${percent}%`);
    bar.setAttribute('aria-valuenow', String(percent));
    const text = bar.querySelector('[data-progress-text]');
    if (text) text.textContent = `${count} / ${ids.length}`;
  }
}

function syncAll() {
  syncCards();
  syncBars();
  syncPathStamps();
}

syncAll();
document.addEventListener(STORE_EVENT, syncAll);
// Keep tabs in sync when progress changes in another window.
addEventListener('storage', syncAll);
