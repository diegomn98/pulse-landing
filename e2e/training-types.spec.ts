import { expect, test } from '@playwright/test';

test('presents the three training types', async ({ page }) => {
  await page.goto('/');

  const section = page.locator('#tipos');
  await expect(
    section.getByRole('heading', {
      level: 2,
      name: 'Tres formas de entrenar. Cada una con su color.',
    }),
  ).toBeVisible();
  await expect(section.getByRole('heading', { level: 3 })).toHaveText([
    'Intervalos',
    'Running',
    'Fuerza',
  ]);
  await expect(
    section.getByRole('article', { name: 'Fuerza' }).getByRole('listitem'),
  ).toHaveText([
    'Descansos automáticos',
    'Si la máquina está ocupada, la cambias',
    'Récords y progreso de cada ejercicio',
  ]);
});

test('reaches the training types from the header', async ({ page }) => {
  test.skip(
    (page.viewportSize()?.width ?? 0) < 960,
    'Section links only show on wide screens',
  );
  await page.goto('/');

  await page
    .getByRole('banner')
    .getByRole('link', { name: 'Los tres tipos' })
    .click();

  await expect(page).toHaveURL(/#tipos$/);
  await expect(
    page.getByRole('heading', { level: 2, name: /Tres formas de entrenar/ }),
  ).toBeInViewport();
});
