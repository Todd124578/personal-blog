import type { BlogData } from "./types";

const categories = [
  {
    title: "产品思考",
    slug: "product-thinking",
    description: "产品判断、需求取舍、增长和商业化复盘。",
    accentColor: "#39ffb6"
  },
  {
    title: "技术教程",
    slug: "technical-notes",
    description: "把复杂工具、流程和技术概念讲成能上手的方法。",
    accentColor: "#6ea8ff"
  },
  {
    title: "AI 工具",
    slug: "ai-workflows",
    description: "AI 产品、自动化工作流和效率系统。",
    accentColor: "#b36bff"
  },
  {
    title: "作品案例",
    slug: "projects",
    description: "模板、工具、产品方案和副业实验。",
    accentColor: "#ffcf5a"
  },
  {
    title: "生活记录",
    slug: "life-log",
    description: "摄影、旅行、观察和日常碎片。",
    accentColor: "#ff7a90"
  },
  {
    title: "书影音",
    slug: "books-movies",
    description: "输入清单、阅读笔记和影像记录。",
    accentColor: "#7df0ff"
  }
];

const tags = [
  { title: "产品经理", slug: "product-manager" },
  { title: "AI", slug: "ai" },
  { title: "增长", slug: "growth" },
  { title: "效率工具", slug: "productivity" }
];

export const demoData: BlogData = {
  settings: {
    name: "Todd",
    title: "Todd的人生记录册",
    slogan: "热爱可抵岁月漫长",
    description:
      "一个个人博客，记录产品思考、AI 工作流、工作案例与生活观察。",
    avatar: "",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80",
    accentColor: "#39ffb6",
    socialLinks: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "即刻", href: "https://web.okjike.com/" }
    ],
    communityLinks: [
      { label: "社群入口", href: "/guestbook" },
      { label: "合作联系", href: "/about" }
    ]
  },
  categories,
  tags,
  posts: [
    {
      title: "我如何搭建一个产品经理的个人内容系统",
      slug: "personal-content-system",
      status: "published",
      publishedAt: "2026-05-27",
      coverImage:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      summary:
        "从选题、素材、写作、发布到复盘，把个人博客当成一个持续迭代的产品。",
      category: categories[0],
      tags: [tags[0], tags[3]],
      body: [
        {
          _type: "block",
          _key: "intro",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "intro-span",
              text: "这是第一篇演示文章。接入 Sanity 后，你可以在后台直接修改、发布和管理文章。"
            }
          ]
        }
      ],
      featured: true,
      readingTime: "6 min"
    },
    {
      title: "AI 工具不是玩具，是新的产品基础设施",
      slug: "ai-as-product-infrastructure",
      status: "published",
      publishedAt: "2026-05-20",
      coverImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      summary:
        "用产品经理视角看 AI 工具的真正价值：不是炫技，而是重构工作流。",
      category: categories[2],
      tags: [tags[1], tags[0]],
      body: [],
      featured: true,
      readingTime: "8 min"
    },
    {
      title: "一个模板产品从 0 到 1 的验证路线",
      slug: "template-product-validation",
      status: "published",
      publishedAt: "2026-05-10",
      summary:
        "面向模板客户，把创意、需求、定价和交付路径拆成可验证的小实验。",
      category: categories[3],
      tags: [tags[2]],
      body: [],
      featured: false,
      readingTime: "5 min"
    }
  ],
  projects: [
    {
      title: "PM Knowledge OS",
      slug: "pm-knowledge-os",
      summary: "一个面向产品经理的个人知识管理模板。",
      externalUrl: "#",
      body: []
    }
  ],
  friends: [
    {
      name: "未来友链位",
      siteUrl: "#",
      description: "这里会展示你的朋友、合作伙伴或常读网站。"
    }
  ],
  mediaPicks: [
    {
      type: "book",
      title: "产品思维相关书单",
      creator: "待补充",
      rating: 5,
      notes: "用来沉淀长期输入。"
    },
    {
      type: "movie",
      title: "影像观察清单",
      creator: "待补充",
      rating: 4,
      notes: "记录能启发产品和叙事的作品。"
    }
  ],
  guestbookEntries: [
    {
      name: "访客",
      message: "期待你的第一批真实留言。",
      createdAt: "2026-05-27",
      approved: true
    }
  ]
};
