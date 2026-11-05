import { expect, test } from '@playwright/test';

test('lays out the waitlist form in the hero', async ({ page }) => {
  await page.goto('/');

  const form = page.locator('#apuntate');
  await expect(form.getByRole('textbox', { name: 'Tu email' })).toHaveAttribute(
    'placeholder',
    'tu@email.com',
  );
  await expect(form.getByRole('button', { name: 'Apuntarme' })).toBeVisible();

  const platforms = form.getByRole('group', { name: '¿Dónde la usarás?' });
  await expect(platforms.getByRole('button')).toHaveText([
    'iOS',
    'Android',
    'Web',
  ]);
  await expect(platforms.getByRole('button', { name: 'iOS' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );

  await expect(
    page.getByRole('main').getByRole('link', { name: 'Privacidad' }),
  ).toHaveAttribute('href', '/privacidad');
});

test('shows the home screen that matches the theme', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  const homeScreen = page.getByRole('img', {
    name: 'Inicio de PULSE con la rutina que toca hoy',
  });
  await expect(homeScreen).toHaveCount(1);
  await expect(homeScreen).toHaveAttribute('src', /home-light/);

  await page.getByRole('button', { name: 'Modo oscuro' }).click();

  await expect(homeScreen).toHaveCount(1);
  await expect(homeScreen).toHaveAttribute('src', /home-dark/);
});

test('never scrolls sideways', async ({ page }) => {
  await page.goto('/');

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  expect(overflow).toBe(0);
});
