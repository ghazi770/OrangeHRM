import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username_Input: Locator;
  readonly password_Input: Locator;
  readonly login_Button: Locator;
  readonly error_alert: Locator; // unified error locator

  constructor(page: Page) {
    this.page = page;
    this.username_Input = page.locator('input[name="username"]');
    this.password_Input = page.locator('input[name="password"]');
    this.login_Button = page.locator('button[type="submit"]');
    this.error_alert = page.locator('div.orangehrm-login-error'); // CSS class for all errors
  }

  async gotoLoginPage(): Promise<void> {
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      {
        waitUntil: 'domcontentloaded', // faster & more reliable
        timeout: 120000,               // 120s to allow slower loads
      }
    );
  }

  async login(username: string, password: string): Promise<void> {
    await this.username_Input.waitFor({ state: 'visible' }); // ensure input is ready
    await this.username_Input.fill(username);
    await this.password_Input.fill(password);
    await this.login_Button.click();
  }
}