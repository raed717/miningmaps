import { expect, test } from "@playwright/test";

test("navigates to projects page, clicks sub-project, and redirects to sub-project page", async ({ page }) => {
  // Go to the projects portfolio page
  await page.goto("/projects");

  // Wait for the main project card that contains the sub-project to be visible
  const subProjectLink = page.getByRole("link", { name: "Goldin Rock Properties - British Columbia" });
  await expect(subProjectLink).toBeVisible();

  // Click on the sub-project link
  await subProjectLink.click();

  // Verify that the URL has updated to the sub-project's detail page
  await expect(page).toHaveURL(/\/projects\/sub-001/);

  // Verify that the heading of the sub-project detail page is displayed correctly
  await expect(page.getByRole("heading", { name: /Goldin Rock Properties/i })).toBeVisible();
});

test("renders client sub-projects banner on details page and allows navigation", async ({ page }) => {
  // Go directly to the British Columbia project detail page
  await page.goto("/projects/bc-005");

  // Verify that the "Client Projects" section heading is visible in the main content
  const heading = page.getByRole("heading", { name: "Client Projects" });
  await expect(heading).toBeVisible();

  // Find the sub-project card for Goldin Rock Properties in the carousel
  const subCardLink = page.locator("a").filter({ hasText: "Goldin Rock Properties - British Columbia" }).first();
  await expect(subCardLink).toBeVisible();

  // Click the sub-project card
  await subCardLink.click();

  // Verify navigation to the sub-project details page
  await expect(page).toHaveURL(/\/projects\/sub-001/);
});
