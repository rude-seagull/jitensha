/**
 * Upgrades the TP validation criteria into a persistent checklist, and lands the
 * seal on an exercise once every one of its criteria is ticked.
 *
 * Without JavaScript the criteria remain a plain numbered list — readable and
 * printable, which is what matters at the workbench.
 */

import { lessonChecks, setCheck } from './store.js';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

for (const list of document.querySelectorAll('[data-checklist]')) {
  const lessonId = list.dataset.lesson;
  const exerciseIndex = list.dataset.exercise;
  const saved = lessonChecks(lessonId);
  const card = list.closest('[data-exercise-card]');
  const stamp = card?.querySelector('[data-stamp]');

  list.dataset.enhanced = 'true';

  const boxes = [];

  /** The seal marks a completed exercise; it never appears for a partial one. */
  const syncStamp = (animate) => {
    if (!stamp) return;
    const complete = boxes.length > 0 && boxes.every((box) => box.checked);
    if (complete) {
      const landing = animate && !reduced && stamp.hidden;
      stamp.hidden = false;
      card.dataset.complete = '';
      if (landing) {
        stamp.setAttribute('data-pressed', '');
        stamp.addEventListener('animationend', () => stamp.removeAttribute('data-pressed'), {
          once: true,
        });
      }
    } else {
      stamp.hidden = true;
      delete card.dataset.complete;
    }
  };

  [...list.querySelectorAll('[data-criterion]')].forEach((item, index) => {
    const criterionId = `${exerciseIndex}.${index}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'criterion__box';
    checkbox.id = `check-${exerciseIndex}-${index}`;
    checkbox.checked = Boolean(saved[criterionId]);
    boxes.push(checkbox);

    const text = item.querySelector('[data-criterion-text]') ?? item;
    const label = document.createElement('label');
    label.className = 'criterion__label';
    label.htmlFor = checkbox.id;
    label.append(...text.childNodes);

    text.replaceChildren(checkbox, label);
    item.dataset.checked = String(checkbox.checked);

    checkbox.addEventListener('change', () => {
      setCheck(lessonId, criterionId, checkbox.checked);
      item.dataset.checked = String(checkbox.checked);
      syncStamp(true);
    });
  });

  // Restore state without replaying the animation on every page load.
  syncStamp(false);
}
