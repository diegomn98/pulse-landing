import { expect, test } from '@playwright/test';

test('presents the exercise library', async ({ page }) => {
  await page.goto('/');

  const section = page.locator('#ejercicios');
  await expect(
    section.getByRole('heading', {
      level: 2,
      name: 'Más de 180 ejercicios. Y los que tú añadas.',
    }),
  ).toBeVisible();
  await expect(section.locator('.advantages > li')).toHaveText([
    'Foto y técnica. Cómo se hace, paso a paso, y qué músculos trabaja.',
    'Crea los tuyos. Nombre, grupo muscular y material. Listo para cualquier rutina.',
    'Tu progreso en cada uno. Récords, 1RM estimado y lo que hiciste la última vez.',
    '¿Máquina ocupada? Te proponemos alternativas que trabajan lo mismo.',
  ]);
});

test('shows the sample sheet and the new exercise card', async ({ page }) => {
  await page.goto('/');

  const section = page.locator('#ejercicios');
  await expect(section.locator('.sheet')).toContainText('Press banca');
  await expect(section.locator('.new-exercise')).toHaveText(
    /Ejercicio nuevo\s*Remo en anillas\s*Espalda\s*Anillas\s*Reps y kg\s*Guardar en mis ejercicios/,
  );
  await expect(section.getByRole('link')).toHaveCount(0);
});

test('lists each ticker name once for assistive technology', async ({
  page,
}) => {
  await page.goto('/');

  const lists = page.locator('#exercise-ticker').getByRole('list');
  await expect(lists).toHaveCount(2);
  await expect(lists.first().getByRole('listitem').first()).toHaveText(
    'Press banca',
  );
  await expect(lists.first().getByRole('listitem')).toHaveCount(10);
  await expect(lists.first().getByRole('listitem').last()).toHaveText(
    'Remo en anillas',
  );
  await expect(lists.last().getByRole('listitem')).toHaveCount(10);
  await expect(lists.last().getByRole('listitem').last()).toHaveText(
    'Crea el tuyo',
  );
});

test('keeps the ticker still with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  const ticker = page.locator('#exercise-ticker');
  await expect(ticker.locator('.track').first()).toHaveCSS(
    'animation-name',
    'none',
  );
  await expect(ticker.getByRole('button')).toBeHidden();
});

test('pauses and resumes the ticker', async ({ page }) => {
  await page.goto('/');

  const ticker = page.locator('#exercise-ticker');
  const track = ticker.locator('.track').first();
  const pause = ticker.getByRole('button', { name: 'Pausar animación' });
  await expect(track).toHaveCSS('animation-play-state', 'running');

  await pause.click();
  await page.mouse.move(0, 0);
  await expect(track).toHaveCSS('animation-play-state', 'paused');

  await ticker.getByRole('button', { name: 'Reanudar animación' }).click();
  await page.mouse.move(0, 0);
  await expect(track).toHaveCSS('animation-play-state', 'running');
});

test('reaches the exercises from the header', async ({ page }) => {
  test.skip(
    (page.viewportSize()?.width ?? 0) < 960,
    'Section links only show on wide screens',
  );
  await page.goto('/');

  await page
    .getByRole('banner')
    .getByRole('link', { name: 'Ejercicios' })
    .click();

  await expect(page).toHaveURL(/#ejercicios$/);
  await expect(
    page.getByRole('heading', { level: 2, name: /Más de 180 ejercicios/ }),
  ).toBeInViewport();
});
