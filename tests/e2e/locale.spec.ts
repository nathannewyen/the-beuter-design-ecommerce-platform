import { test, expect } from "@playwright/test";

test("EN/VN switcher translates the primary nav", async ({ page }) => {
  await page.goto("/");

  const sidebar = page.getByRole("complementary", { name: /primary/i });
  await expect(sidebar.getByRole("link", { name: "Webstore" })).toBeVisible();
  await expect(sidebar.getByRole("link", { name: "About Us" })).toBeVisible();

  await sidebar.getByRole("button", { name: "Tiếng Việt" }).click();

  await expect(sidebar.getByRole("link", { name: "Cửa hàng" })).toBeVisible();
  await expect(sidebar.getByRole("link", { name: "Giới thiệu" })).toBeVisible();
});
