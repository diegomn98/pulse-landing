export const THEME_STORAGE_KEY = 'pulse-theme';

type Theme = 'light' | 'dark';

const darkScheme = '(prefers-color-scheme: dark)';

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch {
    return null;
  }
}

function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Without storage the choice still applies for this visit.
  }
}

function applyTheme(theme: Theme, toggle: HTMLButtonElement) {
  document.documentElement.dataset.theme = theme;
  toggle.setAttribute('aria-pressed', String(theme === 'dark'));
}

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function setupThemeToggle(toggle: HTMLButtonElement) {
  applyTheme(currentTheme(), toggle);

  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next, toggle);
    storeTheme(next);
  });

  matchMedia(darkScheme).addEventListener('change', (event) => {
    if (readStoredTheme() === null)
      applyTheme(event.matches ? 'dark' : 'light', toggle);
  });
}
