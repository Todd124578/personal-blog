import { describe, expect, it } from "vitest";
import { getBlogData } from "./content";

describe("local content", () => {
  it("loads editable content files used by Decap CMS", async () => {
    const data = await getBlogData();

    expect(data.settings.title).toBe("Todd的人生记录册");
    expect(data.posts[0]?.slug).toBe("personal-content-system");
    expect(data.categories.map((category) => category.slug)).toContain("ai-workflows");
  });
});
