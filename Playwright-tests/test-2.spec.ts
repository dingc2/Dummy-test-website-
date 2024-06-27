import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Button 1 Press me').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Press me', exact: true }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Press me!!!' }).click();
  await page.getByRole('heading', { name: 'About Us' }).click();
  await page.getByRole('heading', { name: 'Our Services' }).click();
  await page.getByRole('heading', { name: 'Contact Us' }).click();
  await page.getByText('Get in touch with us for more').click();
  await page.getByText('© 2024 My Dummy Website. All').click();
  await page.getByRole('button', { name: 'MAKE PAGE GO POOF' }).click();
  await page.getByText('Make page go poof').click();
});