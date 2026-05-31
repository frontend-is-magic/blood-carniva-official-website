import "./globals.css";

export const metadata = {
  title: "鲜血狂欢 | 哥特摇滚乐队官方网站",
  description:
    "鲜血狂欢官方网站。刚刚成立的哥特摇滚乐队，正在集结成员、排练首批作品并准备第一阶段现场。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
