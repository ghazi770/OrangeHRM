import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { loginData } from '../TestData/loginData'

loginData.forEach(data => {

  test(`Login Test: ${data.scenario}`, async ({ page }) => {

    const loginPage = new LoginPage(page)

    await loginPage.gotoLoginPage()

    await loginPage.login(data.username, data.password)

    if (data.expected === 'success') {
      await expect(page.url()).toContain('dashboard');
    }

    if (data.expected === 'error') {
      await expect(loginPage.error_user).toBeVisible()
      await expect(loginPage.error_password).toBeVisible()
    }

  })

})