import { expect, test } from '@playwright/test';

test('serves the landing in Spanish', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Entrena a tu ritmo.' }),
  ).toBeVisible();
});

test('shows the section links only on wide screens', async ({ page }) => {
  await page.goto('/');
  const wide = (page.viewportSize()?.width ?? 0) >= 960;

  const sectionLinks = page
    .getByRole('banner')
    .getByRole('navigation')
    .getByRole('link');
  if (wide) {
    await expect(sectionLinks).toHaveText([
      'Los tres tipos',
      'Cómo funciona',
      'Ejercicios',
      'Preguntas',
    ]);
  } else {
    await expect(page.getByRole('banner').getByRole('navigation')).toBeHidden();
  }
  await expect(
    page.getByRole('banner').getByRole('link', { name: 'Apúntate' }),
  ).toBeVisible();
});

test('links the legal pages from the footer', async ({ page }) => {
  await page.goto('/');

  const footer = page.getByRole('contentinfo');
  await expect(
    footer.getByRole('link', { name: 'Privacidad' }),
  ).toHaveAttribute('href', '/privacidad');
  await expect(footer.getByRole('link', { name: 'Términos' })).toHaveAttribute(
    'href',
    '/terminos',
  );
  await expect(footer.getByRole('link', { name: 'Cookies' })).toHaveAttribute(
    'href',
    '/cookies',
  );
  await expect(footer).toContainText('© 2026 PULSE');
});

for (const reducedMotion of ['no-preference', 'reduce'] as const) {
  test(`gives the header a backdrop only once the page scrolls (motion: ${reducedMotion})`, async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto('/');
    await page.locator('main').evaluate((main) => {
      main.style.minHeight = '3000px';
    });
    const backdropOpacity = () =>
      page
        .getByRole('banner')
        .evaluate((header) => getComputedStyle(header, '::before').opacity);

    await expect.poll(backdropOpacity).toBe('0');

    await page.mouse.wheel(0, 400);

    await expect.poll(backdropOpacity).toBe('1');
  });
}
