import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test.describe('Login Scenarios', () => {
  let loginPage: LoginPage;

  // Runs before each test: create a fresh page and navigate
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
  });

  // ✅ Valid Login
  test('Valid Login', async ({ page }) => {
    await loginPage.login('Admin', 'admin123');

    // Wait for the Dashboard to be visible
    const dashboardHeading = page.locator('text=Dashboard').first();
    await dashboardHeading.waitFor({ state: 'visible', timeout: 10000 });
    await expect(dashboardHeading).toBeVisible();
  });

  // ✅ Invalid Username
  test('Invalid Username', async ({ page }) => {
    await loginPage.login('wrongUser', 'admin123');

    // Wait for error alert and check text
    await loginPage.error_alert.waitFor({ state: 'visible', timeout: 5000 });
    await expect(loginPage.error_alert).toBeVisible();
    await expect(loginPage.error_alert).toContainText('Invalid credentials');
  });

  // ✅ Invalid Password
  test('Invalid Password', async ({ page }) => {
    await loginPage.login('Admin', 'wrong123');

    // Wait for error alert and check text
    await loginPage.error_alert.waitFor({ state: 'visible', timeout: 5000 });
    await expect(loginPage.error_alert).toBeVisible();
    await expect(loginPage.error_alert).toContainText('Invalid credentials');
  });
});