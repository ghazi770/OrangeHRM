import { Page, Locator, expect } from '@playwright/test';

export class BuzzPage {
 readonly page: Page;
 readonly sharePhotoButton: Locator;
 readonly photoInput: Locator;
 readonly captionBox: Locator;
 readonly sharePostButton: Locator;
 readonly postContainer: Locator;

 constructor(page: Page) {
   this.page = page;

   this.sharePhotoButton = page.locator('button:has-text("Share Photos")');
   this.photoInput = page.locator('input[type="file"]');
   this.captionBox = page.locator('textarea');
   this.sharePostButton = page.locator('button:has-text("Share")');
   this.postContainer = page.locator('.orangehrm-buzz-post');
 }

 async navigateToBuzz() {
   await this.page.goto(
     'https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz'
   );
 }

 async postPhoto(photoPath: string, caption: string) {
   await this.sharePhotoButton.click();
   await this.photoInput.setInputFiles(photoPath);
   await this.captionBox.fill(caption);
   await this.sharePostButton.click();
 }

 async verifyPost() {
   await expect(this.postContainer.first()).toBeVisible();
 }
}

