import { expect, test } from '@playwright/test';

test('closes with the motto and a link to the waitlist form', async ({
  page,
}) => {
  await page.goto('/');

  const section = page.getByRole('region', {
    name: 'Sé de los primeros en probarla.',
  });
  await expect(
    section.getByText('Sin días fijos. Sin presión. Solo lo que toca.'),
  ).toBeVisible();
  await expect(
    section.getByText(
      'Déjanos tu email y te avisamos el día que salga. Nada más.',
    ),
  ).toBeVisible();
  await expect(
    section.getByRole('link', { name: 'Apuntarme a la lista' }),
  ).toHaveAttribute('href', '#apuntate');
  await expect(section.getByRole('textbox')).toHaveCount(0);
});
