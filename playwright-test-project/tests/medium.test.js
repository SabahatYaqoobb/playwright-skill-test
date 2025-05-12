import { test, expect } from '@playwright/test';

test('Medium: Fill form and check submission', async ({ page }) => {
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  await page.fill('#my-text-id', 'Playwright Test');
  await page.fill('#my-password-id', 'Secret123');
  const today = new Date().toISOString().split('T')[0];
  await page.fill('#my-date-id', today);
  await page.selectOption('#my-select-id', '2');
  await page.click('text=Submit');
  await expect(page.locator('#message')).toContainText('Received!');
});