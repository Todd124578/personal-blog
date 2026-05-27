import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navItems = [
  { label: "文章", href: "/posts" },
  { label: "项目", href: "/projects" },
  { label: "书影音", href: "/media" },
  { label: "友链", href: "/friends" },
  { label: "留言", href: "/guestbook" },
  { label: "关于", href: "/about" }
];

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Todd的人生记录册",
    template: "%s | Todd的人生记录册"
  },
  description: "一个个人博客，记录产品思考、AI 工作流、工作案例与生活观察。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="site-shell">
          <header className="topbar">
            <div className="container topbar-inner">
              <Link className="brand" href="/">
                <span className="brand-mark">LT</span>
                <span>Todd的人生记录册</span>
              </Link>
              <nav className="nav" aria-label="主导航">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          {children}
          <footer className="footer">
            <div className="container footer-inner">
              <span>© 2026 Todd的人生记录册</span>
              <span>Built with Next.js, Vercel and Sanity.</span>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
