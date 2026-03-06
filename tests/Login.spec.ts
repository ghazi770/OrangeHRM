import { test, expect } from '@playwright/test';

test('google search', async ({ page }) => {

  await page.goto('https://www.google.com');

  });