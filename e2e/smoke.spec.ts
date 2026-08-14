import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/il-frantoio", "/il-processo", "/i-nostri-oli", "/contatti"];

for (const route of routes) {
  test(`${route} loads and has no serious accessibility violations`, async ({ page }) => {
    await page.goto(route);
    await expect(page).toHaveTitle(/.+/);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
}
