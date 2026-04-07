import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BuzzPage } from '../pages/BuzzPage';


test.describe('Buzz Feature Tests', () => {

  let loginPage: LoginPage;
  let buzzPage: BuzzPage;

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    buzzPage = new BuzzPage(page);

    // Login
    
   await loginPage.login('Admin', 'admin123');

    // Navigate to Buzz page
    await buzzPage.navigateToBuzz();
  });

  test('Post Buzz photo', async () => {

    await buzzPage.postPhoto(
      'test-data/photo.jpg',
      buzzPost.caption
    );

    await buzzPage.verifyPost();
  });

});