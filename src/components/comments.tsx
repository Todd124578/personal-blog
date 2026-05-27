"use client";

export function Comments() {
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

  if (!repo || !repoId || !category || !categoryId) {
    return (
      <div className="comment-box">
        <h3>评论区</h3>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          评论系统预留好了。连接 Giscus 后，这里会显示真实评论。
        </p>
      </div>
    );
  }

  return (
    <div className="comment-box">
      <script
        src="https://giscus.app/client.js"
        data-repo={repo}
        data-repo-id={repoId}
        data-category={category}
        data-category-id={categoryId}
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="transparent_dark"
        data-lang="zh-CN"
        crossOrigin="anonymous"
        async
      />
    </div>
  );
}
