import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./markdown";

describe("renderMarkdown", () => {
  it("renders common article markdown safely", () => {
    const html = renderMarkdown("## 标题\n\n- 要点\n- **重点**\n\n[链接](https://example.com)");

    expect(html).toContain("<h2>标题</h2>");
    expect(html).toContain("<li>要点</li>");
    expect(html).toContain("<strong>重点</strong>");
    expect(html).toContain('href="https://example.com"');
  });
});
