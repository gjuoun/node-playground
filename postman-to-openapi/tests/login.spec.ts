import { test, expect } from '@playwright/test';



test('test', async ({ page }) => {

  // Go to https://identity.getpostman.com/login
  await page.goto('https://identity.getpostman.com/login');

  // Click text=Sign in with Google
  await page.locator('text=Sign in with Google').click();
  await expect(page).toHaveURL('https://accounts.google.com/o/oauth2/v2/auth/identifier?client_id=805864674475-3abs2rivkn7kreou30b8ru8esnti4oih.apps.googleusercontent.com&scope=profile%20email&response_type=code&redirect_uri=https%3A%2F%2Fidentity.getpostman.com%2Fgoogle%2Foauth2%2Fcallback&state=c6ff7a346e194f14a6316f9c14208dae&prompt=select_account&flowName=GeneralOAuthFlow');

  // Fill [aria-label="Email or phone"]
  await page.locator('[aria-label="Email or phone"]').fill('jun@mistplay.com');

  // Press Enter
  await page.locator('[aria-label="Email or phone"]').press('Enter');
  await expect(page).toHaveURL('https://accounts.google.com/signin/v2/challenge/pwd?client_id=805864674475-3abs2rivkn7kreou30b8ru8esnti4oih.apps.googleusercontent.com&scope=profile%20email&response_type=code&redirect_uri=https%3A%2F%2Fidentity.getpostman.com%2Fgoogle%2Foauth2%2Fcallback&state=c6ff7a346e194f14a6316f9c14208dae&prompt=select_account&flowName=GeneralOAuthFlow&cid=1&navigationDirection=forward&TL=AKqFyY-oIW5tOkiWY35Bp-96JfPm6vKtcHMoEhXb9Z_Ce3eGb_PAd6O1XhNEPfIY');

  // Fill [aria-label="Enter your password"]
  await page.locator('[aria-label="Enter your password"]').fill('!G@j#1989730');

  // Press Enter
  await page.locator('[aria-label="Enter your password"]').press('Enter');
  await expect(page).toHaveURL('https://accounts.google.com/signin/v2/challenge/dp?client_id=805864674475-3abs2rivkn7kreou30b8ru8esnti4oih.apps.googleusercontent.com&scope=profile%20email&response_type=code&redirect_uri=https%3A%2F%2Fidentity.getpostman.com%2Fgoogle%2Foauth2%2Fcallback&state=c6ff7a346e194f14a6316f9c14208dae&prompt=select_account&flowName=GeneralOAuthFlow&cid=6&TL=AKqFyY-oIW5tOkiWY35Bp-96JfPm6vKtcHMoEhXb9Z_Ce3eGb_PAd6O1XhNEPfIY&navigationDirection=forward');

  // Go to https://accounts.google.ca/accounts/SetSID?ssdc=1&sidt=ALWU2ctXAP8TiJZiBYV664hSQ1MgYpzssD51ucRAcGHBgK7kobgHmM1qSx2H3rzd4ooKfY%2BiYh64M5QSHdGTmUrxlf6XLu78QlnoxTpiiMY6z0spBt%2BYD7VhxZFGD3c9/UJ2WEh7uYI7aSxtVP5U%2BDtKRJhR4DAUZsgbbVRyPiNglL2iYOdClnTG4LwMqp5QSnQFSsyot41chqrLJkoKdP9bszYn/vycbidUIY0O/DB0FMTJgraP6MRV%2BSocx7XTz38IAcWSkD%2B5WxZD4Ew3jRJkjI0JSCVoQE/9Fde5Dp3jMb5QRvY%2BcuaFB6cW92IM9cLD5bIYx5Yhg6F4ObLdiLlUazXgrtdJi68sXBOx1R0KYWDFuOb5Ej8xkjfoHCafPnVrY2Jw7uGEhUH9Ghk1nID8IrvIs4%2Bg1ICFVNJhohZZdE76AbLG2dBabw8rt0ROrqY/Tx11wkjRofmJBde%2BSkc%2BlQLwWwZzhw%3D%3D&continue=https://accounts.google.com/signin/oauth/consent?authuser%3D0%26part%3DAJi8hAO9cFAfpBFV2s-bM_5DxoF1MklIBVzfVVJ5z8muMcYMpgjcoBbmICmSsLC-xb7Yd1H9UqzTaZuuHBW-HLjH_Xj7sb6cYfyqIbtkBcaLIXNUkwcmP6qchO8jXuMexhKbD4V4IV066vLQk0pN2yhOmS4I4a8DUuc1CogaeddSWzDYEPUeUNGr18tGFSn_DmBu0TV_JrTTGkOSfnN50XQBLkDePYG9UoAfzpktKKdZ6uZ8qq3umwnlrXsi9zy4C1LYQYNaAjnwdFT4vROf5en7Wy7Tpznnf7rIXyOq3d6auvGQnMo6C5yIyvebxcuoAJ6f3aXS2G1P-RQesCuV-CTh2j5ykQcScWxjN1L_ERHDKM8xMZwqm3Hpw6muTxYn_YllTY3STj-4DOp5F_cusSRMUJAyiIp2kCCa5hMXPrW7rJ6sK9sT7kSwNQrRZRt4ZB6lLvuah_byaGD13dbbJfsESmLTJlZLo9wGd7BW_1jNaYSUt3ZYp90%26as%3DS-1794404279%253A1661910785148502%26client_id%3D805864674475-3abs2rivkn7kreou30b8ru8esnti4oih.apps.googleusercontent.com%26rapt%3DAEjHL4NSpNB7_V9uMVcKDKfmQVJT4agcyYy-LXg7PYhi8AjVIYR_dh3owNrnswoYAArpNOFu1XAzc8Gp8WKJCJYaplqXcW329g%23&tcc=1
  await page.goto('https://accounts.google.ca/accounts/SetSID?ssdc=1&sidt=ALWU2ctXAP8TiJZiBYV664hSQ1MgYpzssD51ucRAcGHBgK7kobgHmM1qSx2H3rzd4ooKfY%2BiYh64M5QSHdGTmUrxlf6XLu78QlnoxTpiiMY6z0spBt%2BYD7VhxZFGD3c9/UJ2WEh7uYI7aSxtVP5U%2BDtKRJhR4DAUZsgbbVRyPiNglL2iYOdClnTG4LwMqp5QSnQFSsyot41chqrLJkoKdP9bszYn/vycbidUIY0O/DB0FMTJgraP6MRV%2BSocx7XTz38IAcWSkD%2B5WxZD4Ew3jRJkjI0JSCVoQE/9Fde5Dp3jMb5QRvY%2BcuaFB6cW92IM9cLD5bIYx5Yhg6F4ObLdiLlUazXgrtdJi68sXBOx1R0KYWDFuOb5Ej8xkjfoHCafPnVrY2Jw7uGEhUH9Ghk1nID8IrvIs4%2Bg1ICFVNJhohZZdE76AbLG2dBabw8rt0ROrqY/Tx11wkjRofmJBde%2BSkc%2BlQLwWwZzhw%3D%3D&continue=https://accounts.google.com/signin/oauth/consent?authuser%3D0%26part%3DAJi8hAO9cFAfpBFV2s-bM_5DxoF1MklIBVzfVVJ5z8muMcYMpgjcoBbmICmSsLC-xb7Yd1H9UqzTaZuuHBW-HLjH_Xj7sb6cYfyqIbtkBcaLIXNUkwcmP6qchO8jXuMexhKbD4V4IV066vLQk0pN2yhOmS4I4a8DUuc1CogaeddSWzDYEPUeUNGr18tGFSn_DmBu0TV_JrTTGkOSfnN50XQBLkDePYG9UoAfzpktKKdZ6uZ8qq3umwnlrXsi9zy4C1LYQYNaAjnwdFT4vROf5en7Wy7Tpznnf7rIXyOq3d6auvGQnMo6C5yIyvebxcuoAJ6f3aXS2G1P-RQesCuV-CTh2j5ykQcScWxjN1L_ERHDKM8xMZwqm3Hpw6muTxYn_YllTY3STj-4DOp5F_cusSRMUJAyiIp2kCCa5hMXPrW7rJ6sK9sT7kSwNQrRZRt4ZB6lLvuah_byaGD13dbbJfsESmLTJlZLo9wGd7BW_1jNaYSUt3ZYp90%26as%3DS-1794404279%253A1661910785148502%26client_id%3D805864674475-3abs2rivkn7kreou30b8ru8esnti4oih.apps.googleusercontent.com%26rapt%3DAEjHL4NSpNB7_V9uMVcKDKfmQVJT4agcyYy-LXg7PYhi8AjVIYR_dh3owNrnswoYAArpNOFu1XAzc8Gp8WKJCJYaplqXcW329g%23&tcc=1');

  // Go to https://accounts.google.ca/accounts/SetSID
  await page.goto('https://accounts.google.ca/accounts/SetSID');

  // Go to https://mistplay-mdx.postman.co/home
  await page.goto('https://mistplay-mdx.postman.co/home');

  // Click span:has-text("mistplay-web")
  await page.locator('span:has-text("mistplay-web")').click();
  await expect(page).toHaveURL('https://mistplay-mdx.postman.co/workspace/mistplay-web~ec0ac4c6-9e06-4c78-b538-32122f743938/overview');

  // Click .collection-sidebar-list-item__head__name-icon__wrapper >> nth=0
  await page.locator('.collection-sidebar-list-item__head__name-icon__wrapper').first().click();
  await expect(page).toHaveURL('https://mistplay-mdx.postman.co/workspace/mistplay-web~ec0ac4c6-9e06-4c78-b538-32122f743938/collection/20786989-524a3a05-60eb-4fd1-a105-fc59b1fbb243?ctx=documentation');

  // Click .collection-sidebar-dropdown-actions-wrapper > .dropdown > .dropdown-button > .btn > .IconWrapper__IconContainer-gnjn48-0 > svg
  await page.locator('.collection-sidebar-dropdown-actions-wrapper > .dropdown > .dropdown-button > .btn > .IconWrapper__IconContainer-gnjn48-0 > svg').click();

  // Click text=Export
  await page.locator('text=Export').click();

  // Click [data-testid="export-collection-export-button"]
  await page.locator('[data-testid="export-collection-export-button"]').click();

});