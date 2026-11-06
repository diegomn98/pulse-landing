import { expect, test } from '@playwright/test';

test('answers the frequent questions without hiding the answers', async ({
  page,
}) => {
  await page.goto('/');

  const section = page.locator('#preguntas');
  await expect(
    section.getByRole('heading', { level: 2, name: 'Preguntas' }),
  ).toBeVisible();
  await expect(section.getByRole('heading', { level: 3 })).toHaveText([
    '¿Cuándo sale?',
    '¿En qué dispositivos funcionará?',
    '¿Necesito crear una cuenta?',
    '¿Qué haréis con mi email?',
  ]);

  const answers = section.getByRole('listitem').getByRole('paragraph');
  await expect(answers).toHaveText([
    'Estamos terminándola. Si te apuntas, serás de los primeros en enterarte y en probarla.',
    'En iOS, en Android y en el navegador. Con la misma cuenta tendrás tus rutinas en todos.',
    'No. Puedes empezar a entrenar sin registrarte y crear la cuenta después, si quieres guardar tu progreso.',
    'Solo lo usamos para avisarte cuando salga. No lo compartimos y puedes darte de baja cuando quieras.',
  ]);
  for (const answer of await answers.all()) {
    await expect(answer).toBeVisible();
  }
  await expect(section.getByRole('button')).toHaveCount(0);
  await expect(section.getByRole('link')).toHaveCount(0);
});

test('reaches the questions from the header', async ({ page }) => {
  test.skip(
    (page.viewportSize()?.width ?? 0) < 960,
    'Section links only show on wide screens',
  );
  await page.goto('/');

  await page
    .getByRole('banner')
    .getByRole('link', { name: 'Preguntas' })
    .click();

  await expect(page).toHaveURL(/#preguntas$/);
  await expect(
    page.getByRole('heading', { level: 2, name: 'Preguntas' }),
  ).toBeInViewport();
});
