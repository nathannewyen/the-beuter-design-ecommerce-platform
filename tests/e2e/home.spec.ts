import { test, expect } from "@playwright/test";

test.describe("home", () => {
  test("renders campaign hero and new arrivals", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: /BEUTER home/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /new arrival/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /view all/i })).toHaveAttribute(
      "href",
      "/shop",
    );

    const productLinks = page.locator('a[href^="/shop/"]');
    await expect(productLinks.first()).toBeVisible();
    expect(await productLinks.count()).toBeGreaterThanOrEqual(6);
  });

  test("primary nav exposes campaigns and webstore", async ({ page }) => {
    await page.goto("/");
    const sidebar = page.getByRole("complementary", { name: /primary/i });
    await expect(sidebar.getByRole("link", { name: "Summer 26" })).toBeVisible();
    await expect(sidebar.getByRole("link", { name: "Webstore" })).toBeVisible();
  });
});
