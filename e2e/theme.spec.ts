import { expect, test } from '@playwright/test';

declare global {
  interface Window {
    themeWhenBodyStarted?: string;
  }
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    new MutationObserver((_, observer) => {
      if (!document.body) return;
      window.themeWhenBodyStarted = document.documentElement.dataset.theme;
      observer.disconnect();
    }).observe(document, { childList: true, subtree: true });
  });
});

for (const colorScheme of ['light', 'dark'] as const) {
  test(`follows the ${colorScheme} system preference before the body renders`, async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme });
    await page.goto('/');

    expect(await page.evaluate(() => window.themeWhenBodyStarted)).toBe(
      colorScheme,
    );
    await expect(
      page.getByRole('button', { name: 'Modo oscuro' }),
    ).toHaveAttribute('aria-pressed', String(colorScheme === 'dark'));
  });
}

test('remembers the chosen theme across visits', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');

  await page.getByRole('button', { name: 'Modo oscuro' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

  await page.reload();

  expect(await page.evaluate(() => window.themeWhenBodyStarted)).toBe('dark');
  await expect(
    page.getByRole('button', { name: 'Modo oscuro' }),
  ).toHaveAttribute('aria-pressed', 'true');
});

test('follows system changes while no theme has been chosen', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');

  await page.emulateMedia({ colorScheme: 'dark' });

  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});
