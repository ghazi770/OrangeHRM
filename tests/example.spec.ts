import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test.describe('Login Scenarios', () => {
  let loginPage: LoginPage;

  // Runs before each test
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
  });

  // ✅ Valid Login
 // example.spec.ts – Valid Login test
test('Valid Login', async ({ page }) => {
  await loginPage.login('Admin', 'admin123');

  // More reliable locator: find an element with text "Dashboard" that is visible
  const dashboardHeading = page.locator('text=Dashboard').first();

  await expect(dashboardHeading).toBeVisible({ timeout: 10000 });
});

  // ✅ Invalid Username
  test('Invalid Username', async () => {
    await loginPage.login('wrongUser', 'admin123');

    // Single unified error locator
    await expect(loginPage.error_alert).toBeVisible({ timeout: 5000 });
    await expect(loginPage.error_alert).toContainText('Invalid credentials', { timeout: 5000 });
  });

  // ✅ Invalid Password
  test('Invalid Password', async () => {
    await loginPage.login('Admin', 'wrong123');

    // Same unified error locator
    await expect(loginPage.error_alert).toBeVisible({ timeout: 5000 });
    await expect(loginPage.error_alert).toContainText('Invalid credentials', { timeout: 5000 });
  });

});