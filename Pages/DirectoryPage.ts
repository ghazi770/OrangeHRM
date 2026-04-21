import { Page, Locator, expect } from '@playwright/test';

export class DirectoryPage {
  readonly page: Page;
  readonly Employee_Input: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.Employee_Input = page.locator('input[placeholder="Type for hints..."]');
  
}

 async searchDirectoryPage(username: string,): Promise<void> {
      await this.Employee_Input.fill(username);
       await this.Employee_Input.press('Enter'); 
       // Wait until autosuggestions appear
       
  //await expect(suggestions.first()).toBeVisible();
  }

}