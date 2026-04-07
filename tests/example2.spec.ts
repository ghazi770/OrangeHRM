import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Upload image', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await test.step('Login to OrangeHRM', async () => {
    await loginPage.gotoLoginPage();
    await loginPage.login('Admin', 'admin123');

    // ensure login succeeded
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  });

  await test.step('Open Buzz page and upload image', async () => {
    await page.getByRole('link', { name: 'Buzz' }).click();

    await page.getByRole('button', { name: 'Share Photos' }).click();

    await page.locator('input[type="file"]').setInputFiles('tests/file/gig_pic_2.jpg');
  });

});