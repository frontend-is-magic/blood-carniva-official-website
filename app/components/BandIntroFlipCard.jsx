"use client";

import { useState } from "react";

export default function BandIntroFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`flip-card ${isFlipped ? "is-flipped" : ""}`}
      aria-pressed={isFlipped}
      aria-label={isFlipped ? "查看乐队简介正面" : "翻面查看乐队内容介绍"}
      onClick={() => setIsFlipped((current) => !current)}
    >
      <span className="flip-card-inner">
        <span className="flip-face flip-front">
          <span className="flip-kicker">乐队简介</span>
          <span className="flip-title">午夜剧场里的猩红噪声</span>
          <span className="flip-copy">
            鲜血狂欢是一支概念性虚构乐队，把哥特摇滚、后朋克律动和电子低频压进同一个舞台叙事。
          </span>
          <span className="flip-hint">点击卡片翻面</span>
        </span>
        <span className="flip-face flip-back">
          <span className="flip-kicker">内容介绍</span>
          <span className="flip-title">不是现实履历，而是声音设定</span>
          <span className="flip-copy">
            乐队以“红幕、月亮、噪声、游行”为核心意象。每首歌都像一段剧场档案：先制造不安，再把它变成可以跟随的节拍。
          </span>
          <span className="flip-hint">再次点击回到正面</span>
        </span>
      </span>
    </button>
  );
}
