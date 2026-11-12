import { test, expect } from '@playwright/test';

test('uses await in a Playwright test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});