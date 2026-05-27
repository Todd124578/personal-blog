import { describe, expect, it } from "vitest";
import { getBlogData, hasSanityConfig } from "./content";

describe("content layer", () => {
  it("uses demo content when Sanity config is missing", async () => {
    expect(hasSanityConfig({})).toBe(false);

    const data = await getBlogData({});

    expect(data.settings.title).toBe("刘涛的产品实验室");
    expect(data.posts.length).toBeGreaterThan(0);
    expect(data.categories.map((category) => category.slug)).toContain("product-thinking");
  });

  it("recognizes complete Sanity config", () => {
    expect(
      hasSanityConfig({
        NEXT_PUBLIC_SANITY_PROJECT_ID: "project",
        NEXT_PUBLIC_SANITY_DATASET: "production"
      })
    ).toBe(true);
  });
});
