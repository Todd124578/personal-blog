import { describe, expect, it } from "vitest";
import { getBlogData } from "./content";

describe("content layer", () => {
  it("uses Decap-editable local content files", async () => {
    const data = await getBlogData();

    expect(data.settings.title).toBe("Todd的人生记录册");
    expect(data.posts.length).toBeGreaterThan(0);
    expect(data.categories.map((category) => category.slug)).toContain("product-thinking");
  });
});
