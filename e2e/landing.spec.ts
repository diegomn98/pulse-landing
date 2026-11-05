import { expect, test } from '@playwright/test';

test('serves the landing in Spanish', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Entrena a tu ritmo.' }),
  ).toBeVisible();
});
