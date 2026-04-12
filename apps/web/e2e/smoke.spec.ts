import { expect, test } from "@playwright/test";

test("loads the landing page and navigates to services", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: /services/i })).toBeVisible();
  await expect(page.getByText("GIS Service", { exact: false })).toBeVisible();

  await page.getByRole("link", { name: /services/i }).first().click();

  await expect(page).toHaveURL(/\/services/);
  await expect(page.getByRole("heading", { name: /full gis service registry/i })).toBeVisible();
});
