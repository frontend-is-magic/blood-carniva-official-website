"use client";

import Image from "next/image";
import { useState } from "react";

export default function MemberFlipCard({ member }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const backText = member.isPresent ? member.detail : member.join;

  return (
    <button
      type="button"
      className={`member-flip-card ${member.isPresent ? "is-confirmed" : "is-vacant"} ${
        isFlipped ? "is-flipped" : ""
      }`}
      aria-pressed={isFlipped}
      aria-label={isFlipped ? `返回${member.name}正面` : `翻面查看${member.name}详情`}
      onClick={() => setIsFlipped((current) => !current)}
    >
      <span className="member-flip-inner">
        <span className="member-flip-face member-flip-front">
          <span className="member-image">
            <Image
              src={member.image}
              alt={member.imageAlt}
              fill
              unoptimized
              sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
            />
          </span>
          <span className="member-copy">
            <span className={`member-status ${member.isPresent ? "" : "member-status-missing"}`}>
              {member.status}
            </span>
            <span className="member-name">{member.name}</span>
            <span className="member-role">{member.role}</span>
            <span className="member-summary">{member.summary}</span>
            <span className="member-flip-hint">点击翻面</span>
          </span>
        </span>
        <span className="member-flip-face member-flip-back">
          <span>
            <span className={`member-status ${member.isPresent ? "" : "member-status-missing"}`}>
              {member.isPresent ? "成员介绍" : "加入方式"}
            </span>
            <span className="member-name">{member.name}</span>
            <span className="member-role">{member.role}</span>
          </span>
          <span className="member-back-copy">{backText}</span>
          <span className="member-flip-hint">再次点击回到正面</span>
        </span>
      </span>
    </button>
  );
}
