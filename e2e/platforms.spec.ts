import { expect, test } from '@playwright/test';

test('announces the platforms where the app is coming', async ({ page }) => {
  await page.goto('/');

  const platforms = page.getByRole('region', {
    name: 'Llega a iOS, Android y web.',
  });
  await expect(platforms.getByRole('heading', { level: 2 })).toBeVisible();
  await expect(platforms.getByRole('paragraph')).toHaveText(
    'Tu cuenta y tus rutinas te siguen de un sitio a otro. Dinos dónde la usarás y te avisamos allí primero.',
  );
  await expect(platforms.getByRole('listitem')).toHaveText([
    /Próximamente en\s*App Store/,
    /Próximamente en\s*Google Play/,
    /Próximamente en\s*Web/,
  ]);
  await expect(platforms.getByRole('link')).toHaveCount(0);
  await expect(platforms.getByRole('button')).toHaveCount(0);
});
