import { expect, test } from '@playwright/test';

test('explains how the app works', async ({ page }) => {
  await page.goto('/');

  const section = page.locator('#como-funciona');
  await expect(
    section.getByRole('heading', {
      level: 2,
      name: 'Abres la app y ya sabes lo que toca.',
    }),
  ).toBeVisible();
  await expect(section.getByRole('heading', { level: 3 })).toHaveText([
    'Lo que toca, sin días fijos',
    'Un objetivo que cuenta sesiones',
    'Tu progreso, claro',
  ]);
});

test('lists the sample queue and the weekly goal', async ({ page }) => {
  await page.goto('/');

  const section = page.locator('#como-funciona');
  const routines = section.locator('.queue > li');
  await expect(routines).toHaveText([
    /Lo que toca hoy.*Intervalos 7 × 2.*5 días\..*Empezar · 11:40/,
    /Después.*Fuerza tren superior.*última vez\..*Empezar · ≈ 45 min/,
    /Y luego.*Series 6 × 400 m.*te desvías\..*Empezar · 32:00/,
  ]);
  await expect(section.getByRole('button')).toHaveCount(0);
  await expect(section.locator('.week')).toHaveText(
    /Esta semana\s*1 de 4\s*Racha de 3 semanas/,
  );
});

test('keeps the first routine still with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  const routines = page.locator('#como-funciona .queue > li');
  await expect(routines.nth(0)).toHaveCSS('opacity', '1');
  await expect(routines.nth(1)).toHaveCSS('opacity', '0');
  await expect(routines.nth(2)).toHaveCSS('opacity', '0');
  await expect(routines.nth(0)).toHaveCSS('animation-name', 'none');
});

test('reaches how it works from the header', async ({ page }) => {
  test.skip(
    (page.viewportSize()?.width ?? 0) < 960,
    'Section links only show on wide screens',
  );
  await page.goto('/');

  await page
    .getByRole('banner')
    .getByRole('link', { name: 'Cómo funciona' })
    .click();

  await expect(page).toHaveURL(/#como-funciona$/);
  await expect(
    page.getByRole('heading', { level: 2, name: /Abres la app/ }),
  ).toBeInViewport();
});
