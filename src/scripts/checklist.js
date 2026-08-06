/**
 * Upgrades the TP validation criteria into a persistent checklist.
 *
 * Without JavaScript the criteria remain a plain numbered list — readable and
 * printable. This module adds the checkboxes and restores previous ticks.
 */

import { lessonChecks, setCheck } from './store.js';

for (const list of document.querySelectorAll('[data-checklist]')) {
  const lessonId = list.dataset.lesson;
  const exerciseIndex = list.dataset.exercise;
  const saved = lessonChecks(lessonId);

  list.dataset.enhanced = 'true';

  [...list.querySelectorAll('[data-criterion]')].forEach((item, index) => {
    const criterionId = `${exerciseIndex}.${index}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'criterion__box';
    checkbox.id = `check-${exerciseIndex}-${index}`;
    checkbox.checked = Boolean(saved[criterionId]);

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
    });
  });
}
