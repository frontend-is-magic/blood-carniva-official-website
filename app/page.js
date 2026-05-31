import Image from "next/image";
import BandIntroFlipCard from "./components/BandIntroFlipCard";
import MemberFlipCard from "./components/MemberFlipCard";

const manifesto = [
  "刚刚成立的鲜血狂欢以哥特摇滚为核心，把红幕剧场感、后朋克节拍与冷冽合成器放进同一套现场语言。",
  "乐队正在从排练室走向第一批公开现场，官网会记录成员集结、作品排练与演出公布。",
  "我们偏爱低频推进、戏剧化主唱、暗色旋律，以及适合舞台灯光的猩红视觉。",
];

const members = [
  {
    name: "狼人主唱",
    role: "主唱 / 叙事者",
    status: "正式成员",
    isPresent: true,
    image: "/images/siren-role-werewolf-vocal.png",
    imageAlt: "鲜血狂欢狼人主唱正式成员图",
    summary: "首批确认成员，负责主唱、舞台叙事与现场情绪推进。",
    detail:
      "以沙哑叙事、爆发式副歌和暗色戏剧感建立鲜血狂欢的前场气质。现场中，他负责把哥特摇滚的阴影、低频与观众呼吸连在一起。",
  },
  {
    name: "堕天使吉他",
    role: "吉他 / 噪声层",
    status: "空缺招募中",
    isPresent: false,
    image: "/images/absence-fallen-angel-church.png",
    imageAlt: "堕天使吉他空缺席位图",
    summary: "寻找能让主音、回授与噪声墙真正站上舞台的吉他手。",
    join:
      "请准备 2 段现场或排练视频、1 段原创 riff，以及可稳定排练的时间说明。偏好哥特摇滚、后朋克、暗潮或噪声摇滚经验。",
  },
  {
    name: "吸血鬼键盘",
    role: "键盘 / 合成器",
    status: "空缺招募中",
    isPresent: false,
    image: "/images/absence-vampire-upright-coffin.png",
    imageAlt: "吸血鬼键盘空缺席位图",
    summary: "寻找能处理氛围铺底、管风琴质感与冷色合成器的键盘手。",
    join:
      "请提供 2 段演奏或编曲片段，说明擅长的合成器、采样器或软件环境。能参与现场音色设计者优先。",
  },
  {
    name: "弗兰肯鼓手",
    role: "鼓 / 心跳",
    status: "空缺招募中",
    isPresent: false,
    image: "/images/absence-frankenstein-lab-table.png",
    imageAlt: "弗兰肯鼓手空缺席位图",
    summary: "寻找能在现场鼓组与机械律动之间切换的鼓手。",
    join:
      "请准备稳定节拍、半速段落和强动态段落各 1 段视频。熟悉点击轨、采样触发或电子鼓混合配置者优先。",
  },
  {
    name: "恶魔贝斯",
    role: "贝斯 / 低频",
    status: "空缺招募中",
    isPresent: false,
    image: "/images/absence-demon-summoning-circle.png",
    imageAlt: "恶魔贝斯空缺席位图",
    summary: "寻找能把低频、身体律动和压迫感推到前景的贝斯手。",
    join:
      "请提交 2 段贝斯演奏视频，包含稳定根音推进和旋律性走句。偏好失真、合唱、八度或合成贝斯处理经验。",
  },
];

const soundRoutes = [
  {
    title: "哥特摇滚核心",
    text: "厚重吉他、暗色旋律与戏剧化人声构成乐队主轴，舞台气质比技术炫耀更重要。",
  },
  {
    title: "后朋克律动",
    text: "低频线条与重复节拍负责推动身体感，让歌曲保留冷峻、直接、可现场执行的骨架。",
  },
  {
    title: "电子暗流",
    text: "合成器、采样与噪声层不抢走乐队现场感，而是把歌曲推向更深的夜色。",
  },
];

const tracks = [
  {
    number: "01",
    title: "霓虹余烬入场",
    description: "慢速后朋克贝斯线与合成器雾面铺底，像帷幕升起前的低声倒数。",
  },
  {
    number: "02",
    title: "恐惧节拍翻译机",
    description: "机械鼓机切出冷冽脉冲，把不安转成可舞动的地下节拍。",
  },
  {
    number: "03",
    title: "黑色童话广播",
    description: "叙事型人声穿过颗粒噪声，像从旧收音机里传来的寓言残片。",
  },
  {
    number: "04",
    title: "午夜游行的空拍",
    description: "明亮但危险感十足的吉他泛音，推进一场不存在的午夜队列。",
  },
  {
    number: "05",
    title: "低频剧场",
    description: "贝斯与电子低频占据前景，制造近乎戏剧灯光般的压迫感。",
  },
];

const releasePlan = [
  "完成吉他、键盘、鼓、贝斯四个席位的面试与试排。",
  "发布第一段排练室影像，公开乐队声音方向。",
  "公布首场小型现场计划，并同步开放演出合作联系。",
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-ivory">
      <Hero />
      <BandIntro />
      <BandMembers />
      <SoundRoute />
      <TrackArchive />
      <ReleasePlan />
      <Subscribe />
      <footer className="border-t border-red-900/40 px-6 py-8 text-sm text-ivory/60 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} 鲜血狂欢</p>
          <p>Blood Carniva Official Website</p>
        </div>
      </footer>
    </main>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[86vh] items-end overflow-hidden px-6 pb-12 pt-8 md:px-10 md:pb-14"
    >
      <Image
        src="/images/blood-carniva-complete-band-theater.png"
        alt="狼人主唱、堕天使吉他、吸血鬼键盘、弗兰肯鼓手与恶魔贝斯组成的鲜血狂欢完整乐队剧场头图"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="hero-asset object-cover object-center"
      />
      <div className="hero-shade" aria-hidden="true" />
      <nav className="absolute left-6 right-6 top-6 z-20 mx-auto flex max-w-6xl items-center justify-between text-sm text-ivory/80 md:left-10 md:right-10">
        <a href="#top" className="font-semibold text-ivory">
          鲜血狂欢
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          <a href="#intro" className="transition hover:text-redlight">
            简介
          </a>
          <a href="#members" className="transition hover:text-redlight">
            成员
          </a>
          <a href="#sound" className="transition hover:text-redlight">
            风格
          </a>
          <a href="#tracks" className="transition hover:text-redlight">
            作品
          </a>
          <a href="#signal" className="transition hover:text-redlight">
            信号
          </a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-black leading-none text-ivory sm:text-7xl md:text-8xl lg:text-9xl">
            鲜血狂欢
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-ivory/84 md:text-2xl md:leading-10">
            刚刚成立的哥特摇滚乐队，正在集结第一支完整阵容
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#members">
              查看成员阵容
            </a>
            <a className="btn-secondary" href="#signal">
              了解加入方式
            </a>
          </div>
          <p className="mt-8 max-w-2xl border-l border-redlight/70 pl-4 text-sm leading-6 text-ivory/72 md:text-base">
            官方网站记录乐队从成立、招募、排练到首场现场的每一步。
          </p>
        </div>
      </div>
    </section>
  );
}

function BandIntro() {
  return (
    <section id="intro" className="section-shell bg-charcoal section-glow">
      <div className="grid items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="section-heading mb-0">
            <p className="section-index">01</p>
            <h2>乐队简介</h2>
          </div>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/70">
            点击卡片翻面可以查看乐队内容介绍。鲜血狂欢的声音以哥特摇滚为核心，正在形成第一阶段现场阵容。
          </p>
          <div className="mt-8 grid gap-4">
            {manifesto.map((line) => (
              <blockquote key={line} className="manifesto-card manifesto-card-compact">
                {line}
              </blockquote>
            ))}
          </div>
        </div>
        <BandIntroFlipCard />
      </div>
    </section>
  );
}

function BandMembers() {
  return (
    <section id="members" className="section-shell bg-ink">
      <div className="section-heading">
        <p className="section-index">02</p>
        <div>
          <h2>乐队成员</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/64">
            已确认成员展示正式图，点击翻面查看介绍；空缺席位展示招募图，点击翻面查看加入方式。
          </p>
        </div>
      </div>
      <div className="member-grid">
        {members.map((member) => (
          <MemberFlipCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}

function SoundRoute() {
  return (
    <section id="sound" className="section-shell bg-charcoal">
      <div className="section-heading">
        <p className="section-index">03</p>
        <div>
          <h2>声音路线</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/64">
            这是鲜血狂欢成立初期确定的创作坐标：以哥特摇滚为根，保留后朋克律动和电子噪声的暗色边缘。
          </p>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {soundRoutes.map((route) => (
          <article key={route.title} className="sound-card">
            <h3>{route.title}</h3>
            <p>{route.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrackArchive() {
  return (
    <section id="tracks" className="section-shell bg-ink">
      <div className="section-heading">
        <p className="section-index">04</p>
        <div>
          <h2>首批作品方向</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/64">
            乐队正在排练第一批作品，正式曲名、试听与歌词会随首支公开录音一起公布。
          </p>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {tracks.map((track) => (
          <article key={track.number} className="track-card">
            <span className="track-number">{track.number}</span>
            <div>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReleasePlan() {
  return (
    <section className="section-shell bg-charcoal">
      <div className="section-heading">
        <p className="section-index">05</p>
        <div>
          <h2>近期计划</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/64">
            鲜血狂欢刚刚成立，当前重点是补齐阵容、稳定排练，并把第一阶段声音带到现场。
          </p>
        </div>
      </div>
      <ol className="release-plan">
        {releasePlan.map((item, index) => (
          <li key={item} className="plan-step">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Subscribe() {
  return (
    <section id="signal" className="section-shell bg-ink">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="section-heading mb-0">
            <p className="section-index">06</p>
            <h2>联系 / 加入</h2>
          </div>
          <p className="mt-6 text-lg leading-8 text-ivory/70">
            成员招募、演出邀约和媒体合作都可以从这里发出。加入成员请附作品链接、所在城市和可排练时间。
          </p>
        </div>
        <form
          className="signal-form"
          action="mailto:contact@blood-carniva.com"
          method="post"
          encType="text/plain"
        >
          <label>
            <span>姓名 / 乐队称呼</span>
            <input name="name" type="text" placeholder="你的称呼" />
          </label>
          <label>
            <span>联系邮箱</span>
            <input name="email" type="email" placeholder="name@domain.com" />
          </label>
          <label>
            <span>来意</span>
            <textarea name="message" rows="4" placeholder="成员申请、演出邀约或合作说明" />
          </label>
          <button className="btn-primary w-full sm:w-auto" type="submit">
            发送联系邮件
          </button>
        </form>
      </div>
    </section>
  );
}
