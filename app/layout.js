import "./globals.css";

export const metadata = {
  title: "鲜血狂欢 | Concept Band Website Prototype",
  description:
    "鲜血狂欢是一个概念性虚构乐队 IP 官网原型，融合地下剧场、猩红霓虹、哥特摇滚与后朋克电子噪声。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
