import { expect, test } from '@playwright/test';

const section = '.included';

test('lists what the app includes', async ({ page }) => {
  await page.goto('/');

  const included = page.locator(section);
  await expect(
    included.getByRole('heading', {
      level: 2,
      name: 'Pensada para entrenar con el móvil en la mano. O en el bolsillo.',
    }),
  ).toBeVisible();
  await expect(included.getByRole('heading', { level: 3 })).toHaveText([
    'Te guía con voz',
    'En la pantalla bloqueada',
    'Entreno libre',
    'Récords de fuerza',
    'Claro u oscuro',
    'Cuenta opcional',
  ]);
  await expect(included.locator('.cards > li')).toHaveText([
    /Avisos en cada cambio, cuenta atrás y vibración\. Entrenas sin mirar la pantalla\.\s*«Descanso\. Después: escaladores\.»/,
    /En iOS la sesión sigue en la pantalla bloqueada y en la Dynamic Island\.\s*Intervalos 7 × 2\s*Ronda 1 de 2\s*Trabajo\s*Sentadilla con salto\s*0:24/,
    /Empieza sin preparar nada\. Al terminar, guárdalo como rutina\.\s*Guardar como rutina/,
    /81 kg\s*Tu 1RM estimado en press banca, semana a semana\./,
    /Sigue el ajuste de tu móvil, o elige el que prefieras\./,
    /Empieza sin registrarte\. Si creas cuenta, tus rutinas y tu progreso te siguen de un dispositivo a otro\./,
  ]);
  await expect(included.getByRole('link')).toHaveCount(0);
  await expect(included.getByRole('button')).toHaveCount(1);
});

test('keeps the voice wave still with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  const included = page.locator(section);
  await expect(included.locator('.bar').first()).toHaveCSS(
    'animation-name',
    'none',
  );
  await expect(included.getByRole('button')).toBeHidden();
});

test('pauses and resumes the voice wave', async ({ page }) => {
  await page.goto('/');

  const included = page.locator(section);
  const bar = included.locator('.bar').first();
  const pause = included.getByRole('button', { name: 'Pausar animación' });
  await expect(pause).toHaveAttribute('aria-controls', 'voice-wave');
  await expect(bar).toHaveCSS('animation-play-state', 'running');

  await pause.click();
  await page.mouse.move(0, 0);
  await expect(bar).toHaveCSS('animation-play-state', 'paused');

  await included.getByRole('button', { name: 'Reanudar animación' }).click();
  await page.mouse.move(0, 0);
  await expect(bar).toHaveCSS('animation-play-state', 'running');
});

test('shows the record chart drawn with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  const reveal = page.locator(`${section} .chart-reveal`);
  await expect(reveal).toHaveCSS('animation-name', 'none');
  await expect(reveal).toHaveCSS('transform', 'none');
});

test('draws the record chart as it scrolls into view', async ({ page }) => {
  await page.goto('/');

  const reveal = page.locator(`${section} .chart-reveal`);
  const offset = () =>
    reveal.evaluate(
      (element) => new DOMMatrix(getComputedStyle(element).transform).m41,
    );
  test.skip(
    (await reveal.evaluate(
      (element) => getComputedStyle(element).animationName,
    )) === 'none',
    'Scroll-driven animations are not supported',
  );

  await expect.poll(offset).toBeLessThan(0);

  await reveal.evaluate((element) =>
    element.scrollIntoView({ block: 'start', behavior: 'instant' }),
  );
  await expect.poll(offset).toBe(0);
});
