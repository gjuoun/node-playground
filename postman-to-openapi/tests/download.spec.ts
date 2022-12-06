import { test, expect } from '@playwright/test';
import postmanToOpenApi from 'postman-to-openapi'
import path from 'path'

test.use({
  storageState: 'auth.json'
});

test('test', async ({ page }) => {

  // Go to https://identity.getpostman.com/accounts
  await page.goto('https://identity.getpostman.com/accounts');

  // Click img
  await page.locator('img').click();
  await expect(page).toHaveURL('https://mistplay-mdx.postman.co/home');

  // Click span:has-text("mistplay-web")
  await page.locator('span:has-text("mistplay-web")').click();

  // Click .collection-sidebar-list-item__head__name-icon__wrapper >> nth=0
  await page.locator('.collection-sidebar-list-item__head__name-icon__wrapper').first().click();

  // Click .collection-sidebar-dropdown-actions-wrapper > .dropdown > .dropdown-button > .btn > .IconWrapper__IconContainer-gnjn48-0 > svg
  await page.locator('.collection-sidebar-dropdown-actions-wrapper > .dropdown > .dropdown-button > .btn > .IconWrapper__IconContainer-gnjn48-0 > svg').click();

  // Click text=Export
  await page.locator('text=Export').click();

  // Click [data-testid="export-collection-export-button"]
  const [ download ] = await Promise.all([
    // Start waiting for the download
    page.waitForEvent('download'),
    // Perform the action that initiates download
    page.locator('[data-testid="export-collection-export-button"]').click()
  ])

  // console.log(await download.path())

  const collectionPath = path.join(__dirname, '../src/public','collection.json')
  const openApiPath = path.join(__dirname, '../src/public','api.yaml')

  await download.saveAs(collectionPath)

  try{
    await postmanToOpenApi(collectionPath, openApiPath, {
      defaultTag: "/"
    })
  }catch(e){
    console.error(e)
  }

});