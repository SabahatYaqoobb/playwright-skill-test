import { test, expect } from '@playwright/test';

test('Hard: Search and verify table results', async ({ page }) => {
  await page.goto('https://datatables.net/examples/data_sources/ajax.html');
  await page.waitForSelector('#example');
  await page.fill('input[type="search"]', 'London');

  const rows = page.locator('#example tbody tr');
  const count = await rows.count();

  for (let i = 0; i < count; i++) {
    const office = await rows.nth(i).locator('td').nth(2).innerText();
    expect(office).toContain('London');
  }
});