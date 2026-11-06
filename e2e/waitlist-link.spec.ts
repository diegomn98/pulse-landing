import { expect, test } from '@playwright/test';

for (const name of ['Apúntate', 'Apuntarme a la lista']) {
  test(`takes «${name}» to the hero form with the email focused`, async ({
    page,
  }) => {
    await page.goto('/');

    await page.getByRole('link', { name, exact: true }).click();

    await expect(page).toHaveURL(/#apuntate$/);
    const email = page
      .locator('#apuntate')
      .getByRole('textbox', { name: 'Tu email' });
    await expect(email).toBeFocused();
    await expect(email).toBeInViewport();
  });
}
