/**
 * The only module allowed to touch localStorage.
 *
 * Everything here degrades to a no-op when storage is unavailable (private mode,
 * disabled cookies, quota exceeded) — the site must stay fully readable, only the
 * persistence is lost. Keys carry a schema version so a future change can migrate
 * rather than silently reinterpret old data.
 */

const NS = 'jitensha.v1';
export const KEYS = {
  progress: `${NS}.progress`,
  checklists: `${NS}.checklists`,
  prefs: `${NS}.prefs`,
};

/** Emitted after every successful write so views can refresh without polling. */
export const STORE_EVENT = 'jitensha:store';

let available;

function storageAvailable() {
  if (available !== undefined) return available;
  try {
    const probe = `${NS}.probe`;
    localStorage.setItem(probe, '1');
    localStorage.removeItem(probe);
    available = true;
  } catch {
    available = false;
  }
  return available;
}

function read(key, fallback) {
  if (!storageAvailable()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    const value = JSON.parse(raw);
    // Guard against hand-edited or stale data of the wrong shape.
    if (Array.isArray(fallback) && !Array.isArray(value)) return fallback;
    if (!Array.isArray(fallback) && typeof value !== 'object') return fallback;
    return value;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  if (!storageAvailable()) return false;
  try {
    localStorage.setItem(key, JSON.stringify(value));
    document.dispatchEvent(new CustomEvent(STORE_EVENT, { detail: { key } }));
    return true;
  } catch {
    return false;
  }
}

/* ---- Progress: which lessons are done -------------------------------- */

export function completedLessons() {
  return read(KEYS.progress, []);
}

export function isCompleted(lessonId) {
  return completedLessons().includes(lessonId);
}

export function setCompleted(lessonId, done) {
  const current = new Set(completedLessons());
  if (done) current.add(lessonId);
  else current.delete(lessonId);
  return write(KEYS.progress, [...current]);
}

/* ---- Checklists: which TP criteria are ticked ------------------------- */

export function lessonChecks(lessonId) {
  return read(KEYS.checklists, {})[lessonId] ?? {};
}

export function setCheck(lessonId, criterionId, checked) {
  const all = read(KEYS.checklists, {});
  const lesson = { ...(all[lessonId] ?? {}) };
  if (checked) lesson[criterionId] = true;
  else delete lesson[criterionId];

  if (Object.keys(lesson).length) all[lessonId] = lesson;
  else delete all[lessonId];

  return write(KEYS.checklists, all);
}

/* ---- Preferences ------------------------------------------------------ */

export function prefs() {
  return read(KEYS.prefs, {});
}

export function setPref(name, value) {
  return write(KEYS.prefs, { ...prefs(), [name]: value });
}
