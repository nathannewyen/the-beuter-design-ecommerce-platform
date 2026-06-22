import { test, expect } from "@playwright/test";

test.describe("shop", () => {
  test("lists the catalog with category sidebar", async ({ page }) => {
    await page.goto("/shop");

    await expect(page.getByText(/new arrival/i).first()).toBeVisible();
    await expect(page.getByText(/collections/i).first()).toBeVisible();

    const cards = page.locator('a[href^="/shop/"]');
    expect(await cards.count()).toBeGreaterThanOrEqual(15);
  });

  test("opens product detail from a grid card", async ({ page }) => {
    await page.goto("/shop");

    const firstCard = page.locator('a[href^="/shop/"]').first();
    const href = await firstCard.getAttribute("href");
    expect(href).toMatch(/^\/shop\/[a-z0-9-]+$/);

    await firstCard.click();
    await expect(page).toHaveURL(new RegExp(href!));
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("button", { name: /add to cart/i })).toBeVisible();
  });
});
