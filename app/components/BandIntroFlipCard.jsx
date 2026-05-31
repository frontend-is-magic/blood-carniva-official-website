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
          <span className="flip-title">刚刚成立的哥特摇滚现场计划</span>
          <span className="flip-copy">
            鲜血狂欢以哥特摇滚为核心，把后朋克律动、暗色旋律和戏剧化人声压进同一个排练室。
          </span>
          <span className="flip-hint">点击卡片翻面</span>
        </span>
        <span className="flip-face flip-back">
          <span className="flip-kicker">成立阶段</span>
          <span className="flip-title">第一阶段：集结成员，准备首场现场</span>
          <span className="flip-copy">
            目前已确认主唱席位，正在寻找吉他、键盘、鼓和贝斯。我们会用官网同步招募、排练、作品发布和演出消息。
          </span>
          <span className="flip-hint">再次点击回到正面</span>
        </span>
      </span>
    </button>
  );
}
