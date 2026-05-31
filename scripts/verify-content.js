const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();

const checks = [
  {
    file: "app/page.js",
    includes: [
      "鲜血狂欢",
      "刚刚成立的哥特摇滚乐队",
      "官方网站记录乐队从成立、招募、排练到首场现场的每一步",
      "查看成员阵容",
      "了解加入方式",
      "发送联系邮件",
      "乐队简介",
      "点击卡片翻面",
      "乐队成员",
      "正式成员",
      "空缺招募中",
      "狼人主唱",
      "堕天使吉他",
      "吸血鬼键盘",
      "弗兰肯鼓手",
      "恶魔贝斯",
      "已确认成员展示正式图",
      "空缺席位展示招募图",
      "请准备 2 段现场或排练视频",
      "请提供 2 段演奏或编曲片段",
      "请准备稳定节拍",
      "请提交 2 段贝斯演奏视频",
      "声音路线",
      "哥特摇滚核心",
      "近期计划",
      "主唱 / 叙事者",
      "吉他 / 噪声层",
      "贝斯 / 低频",
      "鼓 / 心跳",
      "Blood Carniva Official Website",
      "contact@blood-carniva.com"
    ],
    excludes: [
      "概念性虚构乐队",
      "不对应现实中的具体乐队、成员或演出",
      "查看五个任务形象",
      "进入缺席角色图",
      "接收下一次信号",
      "乐队成员 / 五个任务形象",
      "缺席角色图",
      "缺席招募中",
      "任务形象",
      "siren-rock",
      "占位",
      "原型",
      "prototype",
      "Prototype",
      "Concept band website prototype",
      "example",
      "you@example"
    ]
  },
  {
    file: "app/layout.js",
    includes: [
      "鲜血狂欢 | 哥特摇滚乐队官方网站",
      "刚刚成立的哥特摇滚乐队",
      "正在集结成员"
    ],
    excludes: ["Prototype", "prototype", "概念性虚构乐队", "原型"]
  },
  {
    file: "app/components/BandIntroFlipCard.jsx",
    includes: [
      "刚刚成立的哥特摇滚现场计划",
      "鲜血狂欢以哥特摇滚为核心",
      "第一阶段：集结成员，准备首场现场"
    ],
    excludes: ["概念性虚构乐队", "虚构", "原型", "prototype"]
  },
  {
    file: "app/components/MemberFlipCard.jsx",
    includes: ["成员介绍", "加入方式", "点击翻面", "再次点击回到正面"],
    excludes: ["测试", "prototype", "占位"]
  },
  {
    file: "vercel.json",
    includes: [
      "\"framework\": \"nextjs\"",
      "\"buildCommand\": \"npm run build\"",
      "\"installCommand\": \"npm install\"",
      "X-Frame-Options",
      "X-Content-Type-Options",
      "Referrer-Policy"
    ]
  },
  {
    file: ".github/workflows/vercel-ci.yml",
    includes: [
      "pull_request:",
      "branches: [main]",
      "workflow_dispatch:",
      "node-version: 20",
      "vercel pull",
      "vercel build",
      "vercel deploy --prebuilt",
      "--prod",
      "VERCEL_TOKEN",
      "VERCEL_ORG_ID",
      "VERCEL_PROJECT_ID"
    ]
  },
  {
    file: ".gitignore",
    includes: [".vercel", ".env*.local", ".next", "node_modules"]
  },
  {
    file: "README_DEPLOY.md",
    includes: [
      "npm install",
      "npm run dev",
      "npm run build",
      "vercel link",
      "VERCEL_TOKEN",
      "VERCEL_ORG_ID",
      "VERCEL_PROJECT_ID",
      "Preview",
      "Production"
    ]
  }
];

const requiredFiles = [
  "app/layout.js",
  "app/globals.css",
  "app/components/BandIntroFlipCard.jsx",
  "app/components/MemberFlipCard.jsx",
  "postcss.config.js",
  "tailwind.config.js",
  "public/images/blood-carniva-complete-band-theater.png",
  "public/images/siren-role-werewolf-vocal.png",
  "public/images/siren-role-fallen-angel-guitar.png",
  "public/images/siren-role-vampire-keyboard.png",
  "public/images/siren-role-frankenstein-drums.png",
  "public/images/siren-role-demon-bass.png",
  "public/images/absence-werewolf-gibbous-moon.png",
  "public/images/absence-fallen-angel-church.png",
  "public/images/absence-vampire-upright-coffin.png",
  "public/images/absence-frankenstein-lab-table.png",
  "public/images/absence-demon-summoning-circle.png"
];

const failures = [];

for (const { file, includes, excludes = [] } of checks) {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) {
    failures.push(`${file} is missing`);
    continue;
  }

  const content = fs.readFileSync(filePath, "utf8");
  for (const expected of includes) {
    if (!content.includes(expected)) {
      failures.push(`${file} is missing required text: ${expected}`);
    }
  }

  for (const forbidden of excludes) {
    if (content.includes(forbidden)) {
      failures.push(`${file} includes production-forbidden text: ${forbidden}`);
    }
  }
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    failures.push(`${file} is missing`);
  }
}

if (failures.length > 0) {
  console.error("Content verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Content verification passed.");
