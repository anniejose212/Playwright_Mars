import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.MARS_EMAIL!, process.env.MARS_PASSWORD!);
  await expect(loginPage.signOutButton).toBeVisible();
});
