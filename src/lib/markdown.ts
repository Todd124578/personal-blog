function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderInline(markdown: string) {
  return escapeHtml(markdown)
    .replace(/!\[([^\]]*)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

export function renderMarkdown(markdown: string) {
  const blocks = markdown.trim().split(/\n{2,}/);

  return blocks
    .map((block) => {
      const lines = block.split("\n").map((line) => line.trimEnd());
      const firstLine = lines[0]?.trim() ?? "";

      if (firstLine.startsWith("### ")) {
        return `<h3>${renderInline(firstLine.slice(4))}</h3>`;
      }

      if (firstLine.startsWith("## ")) {
        return `<h2>${renderInline(firstLine.slice(3))}</h2>`;
      }

      if (firstLine.startsWith("# ")) {
        return `<h1>${renderInline(firstLine.slice(2))}</h1>`;
      }

      if (lines.every((line) => line.trim().startsWith("- "))) {
        const items = lines
          .map((line) => `<li>${renderInline(line.trim().slice(2))}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }

      return `<p>${lines.map((line) => renderInline(line.trim())).join("<br />")}</p>`;
    })
    .join("");
}
