const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();

const checks = [
  {
    file: "app/page.js",
    includes: [
      "鲜血狂欢",
      "概念性虚构乐队",
      "不对应现实中的具体乐队、成员或演出",
      "查看五个任务形象",
      "进入缺席角色图",
      "接收下一次信号",
      "乐队简介",
      "点击卡片翻面",
      "乐队成员 / 五个任务形象",
      "缺席角色图",
      "缺席招募中",
      "狼人主唱",
      "堕天使吉他",
      "吸血鬼键盘",
      "弗兰肯鼓手",
      "恶魔贝斯",
      "最接近满月的弦月",
      "圣光教堂",
      "竖着的棺材",
      "怪人躺在实验台",
      "召唤阵",
      "声音路线",
      "发布计划",
      "恐惧转译成节拍",
      "虚构声音宇宙",
      "舞台红色美学",
      "主唱 / 叙事者",
      "吉他 / 噪声",
      "贝斯 / 低频",
      "鼓 / 心跳",
      "Concept band website prototype"
    ]
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

for (const { file, includes } of checks) {
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
