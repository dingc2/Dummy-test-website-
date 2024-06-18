import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Google Link' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bing Link' }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Duckduckgo Link' }).click();
  const page3 = await page3Promise;
  await page.getByRole('link', { name: 'Goes Nowhere' }).click();
  await page.getByRole('button', { name: 'Clicking this button will' }).click();
  await page.getByRole('button', { name: 'Clicking this button will' }).click();
  await page.getByText('This is another test').click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'button that goes to cat' }).click();
  const page4 = await page4Promise;
  await page.getByText('" My Dummy Website Google').click();
  await page.getByRole('button', { name: 'MAKE PAGE GO POOF' }).click();
});