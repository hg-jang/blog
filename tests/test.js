import { expect, test } from '@playwright/test';
import { base } from '$app/paths';

test('about page has expected h1', async ({ page }) => {
  await page.goto(`${base}/about`);
  await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
});
