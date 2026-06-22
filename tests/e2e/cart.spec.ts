import { test, expect } from "@playwright/test";

test("adding to cart opens the drawer with the line item", async ({ page }) => {
  await page.goto("/shop/wmns-satin-shirt-ash-blue");

  await page
    .getByRole("button", { name: /^XS$|^S$|^M$|^L$/ })
    .first()
    .click();

  await page.getByRole("button", { name: /add to cart/i }).click();

  const drawer = page.getByRole("dialog", { name: /cart/i });
  await expect(drawer).toBeVisible();
  await expect(drawer.getByText(/BEUTER® WMNS SATIN SHIRT/i)).toBeVisible();
  await expect(drawer.getByRole("button", { name: /^checkout$/i })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(drawer).not.toBeVisible();
});

test("size validation prevents adding without a pick", async ({ page }) => {
  await page.goto("/shop/ms-classic-vneck-tee-sand");

  await page.getByRole("button", { name: /add to cart/i }).click();

  await expect(page.getByText(/please pick a size/i)).toBeVisible();
});
