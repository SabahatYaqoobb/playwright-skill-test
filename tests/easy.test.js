import { test, expect } from '@playwright/test';

test('Easy: Navigate and check heading', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('text=More information');
  await expect(page).toHaveURL(/iana.org/);
  await expect(page.locator('h1')).toContainText('IANA');
});